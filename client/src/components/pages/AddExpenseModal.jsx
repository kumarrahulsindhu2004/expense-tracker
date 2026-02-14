import { useState } from "react";
import API from "../../api/axios";

function AddExpenseModal({ isOpen, onClose, refresh }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/expenses", form);
    refresh();
    onClose();
    setForm({ title: "", amount: "", category: "", date: "" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl w-[400px] shadow-xl">
        <h2 className="text-xl font-bold mb-4">New Expense</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            className="w-full mb-3 p-3 border rounded-lg"
            value={form.title}
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-2 gap-4 mb-3">
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              className="p-3 border rounded-lg"
              value={form.amount}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              className="p-3 border rounded-lg"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <input
            name="date"
            type="date"
            className="w-full mb-6 p-3 border rounded-lg"
            value={form.date}
            onChange={handleChange}
          />

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Save Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpenseModal;
