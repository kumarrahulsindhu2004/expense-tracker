import express from "express";
import {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getTotalSpent,
  getMonthlySummary,
  getCategorySummary,
  getCurrentMonthTotal,
} from "../controllers/expenseController.js";
import { protect } from "../middleware/authMiddleware.js";

const expenseRoutes = express.Router();

expenseRoutes.post("/", protect, createExpense);
expenseRoutes.get("/", protect, getExpenses);
expenseRoutes.put("/:id", protect, updateExpense);
expenseRoutes.delete("/:id", protect, deleteExpense);

expenseRoutes.get('/total',protect,getTotalSpent);
expenseRoutes.get('/monthly-summary',protect,getMonthlySummary);
expenseRoutes.get('/category-summary',protect,getCategorySummary);
expenseRoutes.get("/monthly-total",protect, getCurrentMonthTotal)
export default expenseRoutes;
