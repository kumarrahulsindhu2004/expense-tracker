import Expense from "../models/expense.js";

/* ================= CREATE EXPENSE ================= */
export const createExpense = async (req, res) => {
  try {
    const { title, amount, category, date, note } = req.body;

    if (!title || !amount) {
      return res.status(400).json({ message: "Title and amount are required" });
    }

    const expense = await Expense.create({
      userId: req.user._id, // from auth middleware
      title,
      amount,
      category,
      date,
      note,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET USER EXPENSES ================= */
export const getExpenses = async (req, res) => {
  try {
    const { category, startDate, endDate, page = 1, limit = 5 } = req.query;

    const query = { userId: req.user._id };

    // Category filter
    if (category) {
      query.category = category;
    }

    // Date range filter
    if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const expenses = await Expense.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Expense.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      expenses,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ================= UPDATE EXPENSE ================= */
export const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    // Ensure expense belongs to logged-in user
    if (expense.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= DELETE EXPENSE ================= */
export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    if (expense.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await expense.deleteOne();

    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getTotalSpent = async (req, res) => {
  try {
    const result = await Expense.aggregate([
      { $match: { userId: req.user._id } },
      {
        $group: {
          _id: null,
          totalSpent: { $sum: "$amount" },
        },
      },
    ]);

    res.json({
      totalSpent: result[0]?.totalSpent || 0,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};









export const getMonthlySummary = async (req, res) => {
  try {
    const year = new Date().getFullYear();

    const summary = await Expense.aggregate([
      {
        $match: {
          userId: req.user._id,
          date: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          },
        },
      },
      {
        $group: {
          _id: { $month: "$date" },
          total: { $sum: "$amount" },
        },
      },
      {
        $sort: { "_id": 1 },
      },
    ]);

    res.json(summary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};









export const getCategorySummary = async (req, res) => {
  try {
    const summary = await Expense.aggregate([
      { $match: { userId: req.user._id } },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.json(summary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



/* ================= CURRENT MONTH TOTAL ================= */
export const getCurrentMonthTotal = async (req, res) => {
  try {
    const now = new Date();

    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const result = await Expense.aggregate([
      {
        $match: {
          userId: req.user._id,
          date: { $gte: start, $lte: end },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.json({
      monthlySpent: result[0]?.total || 0,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
