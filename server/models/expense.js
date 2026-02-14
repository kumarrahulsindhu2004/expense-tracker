import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: 0,
    },

    category: {
      type: String,
      required: true,
      enum: ["Food", "Travel", "Shopping", "Bills", "Other"],
      default: "Other",
    },

    date: {
      type: Date,
      default: Date.now,
    },

    note: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
