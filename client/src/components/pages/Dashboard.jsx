// import { useEffect, useState } from "react";
// import API from "../../api/axios";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import AddExpenseModal from "./AddExpenseModal";

// function Dashboard() {
//   const [expenses, setExpenses] = useState([]);
//   const [totalSpent, setTotalSpent] = useState(0);
//   const [categoryData, setCategoryData] = useState([]);

//   const [search, setSearch] = useState("");
//   const [filterCategory, setFilterCategory] = useState("");
//   const [page, setPage] = useState(1);

//   const [openModal, setOpenModal] = useState(false);


//   const [userData, setUserData] = useState(null);
// const [monthlySpent, setMonthlySpent] = useState(0);


//   const COLORS = ["#4f46e5", "#22c55e", "#f59e0b", "#ef4444"];

//   useEffect(() => {
//     fetchData();
//   }, [page, filterCategory]);

//   const fetchData = async () => {
//     try {
//       const expenseRes = await API.get(
//         `/expenses?page=${page}&limit=5&category=${filterCategory}`
//       );

//       const totalRes = await API.get("/expenses/total");
//       const categoryRes = await API.get("/expenses/category-summary");

//       setExpenses(expenseRes.data.expenses);
//       setTotalSpent(totalRes.data.totalSpent);
//       setCategoryData(categoryRes.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleDelete = async (id) => {
//     await API.delete(`/expenses/${id}`);
//     fetchData();
//   };

//   const filteredExpenses = expenses.filter((exp) =>
//     exp.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">

//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">Financial Overview</h1>

//         <button
//           onClick={() => setOpenModal(true)}
//           className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700"
//         >
//           + Add Expense
//         </button>
//       </div>

//       {/* Stats */}
//       <div className="grid md:grid-cols-4 gap-6 mb-8">
//         <div className="bg-white p-6 rounded-xl shadow">
//           <p>Total Balance Spent</p>
//           <h2 className="text-2xl font-bold">₹ {totalSpent}</h2>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <p>Transactions</p>
//           <h2 className="text-2xl font-bold">{expenses.length}</h2>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <p>Main Category</p>
//           <h2 className="text-2xl font-bold">
//             {categoryData[0]?._id || "N/A"}
//           </h2>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <p>Categories</p>
//           <h2 className="text-2xl font-bold">
//             {categoryData.length}
//           </h2>
//         </div>
//       </div>

//       {/* Search + Filter */}
//       <div className="flex gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search expenses..."
//           className="flex-1 p-3 border rounded-lg"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="p-3 border rounded-lg"
//           value={filterCategory}
//           onChange={(e) => setFilterCategory(e.target.value)}
//         >
//           <option value="">All Categories</option>
//           <option value="Food">Food</option>
//           <option value="Travel">Travel</option>
//           <option value="Shopping">Shopping</option>
//           <option value="Bills">Bills</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>

//       {/* Main Section */}
//       <div className="grid md:grid-cols-2 gap-8">

//         {/* Expense List */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="font-semibold mb-4">Recent Expenses</h3>

//           {filteredExpenses.map((exp) => (
//             <div
//               key={exp._id}
//               className="flex justify-between items-center border-b py-3"
//             >
//               <div>
//                 <p className="font-medium">{exp.title}</p>
//                 <p className="text-sm text-gray-500">
//                   {new Date(exp.date).toLocaleDateString()}
//                 </p>
//               </div>

//               <div className="flex items-center gap-4">
//                 <span className="font-semibold">
//                   ₹ {exp.amount}
//                 </span>

//                 <button
//                   onClick={() => handleDelete(exp._id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Pagination */}
//           <div className="flex justify-between mt-4">
//             <button
//               disabled={page === 1}
//               onClick={() => setPage(page - 1)}
//               className="px-4 py-2 border rounded disabled:opacity-50"
//             >
//               Prev
//             </button>

//             <button
//               onClick={() => setPage(page + 1)}
//               className="px-4 py-2 border rounded"
//             >
//               Next
//             </button>
//           </div>
//         </div>

//         {/* Category Chart */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="font-semibold mb-4">
//             Category Analysis
//           </h3>

//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={categoryData}
//                 dataKey="total"
//                 nameKey="_id"
//                 innerRadius={60}
//                 outerRadius={100}
//               >
//                 {categoryData.map((entry, index) => (
//                   <Cell
//                     key={index}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <AddExpenseModal
//         isOpen={openModal}
//         onClose={() => setOpenModal(false)}
//         refresh={fetchData}
//       />
//     </div>
//   );
// }

// export default Dashboard;








import { useEffect, useState } from "react";
import API from "../../api/axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AddExpenseModal from "./AddExpenseModal";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const [categoryData, setCategoryData] = useState([]);

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [page, setPage] = useState(1);

  const [openModal, setOpenModal] = useState(false);

  const [userData, setUserData] = useState(null);
  const [monthlySpent, setMonthlySpent] = useState(0);

  const COLORS = ["#4f46e5", "#22c55e", "#f59e0b", "#ef4444"];

  useEffect(() => {
    fetchData();
  }, [page, filterCategory]);

  const fetchData = async () => {
    try {
      const expenseRes = await API.get(
        `/expenses?page=${page}&limit=5&category=${filterCategory}`
      );

      const totalRes = await API.get("/expenses/total");
      const categoryRes = await API.get("/expenses/category-summary");

      // 🔥 NEW APIs
      const profileRes = await API.get("/auth/profile");
      const monthRes = await API.get("/expenses/monthly-total");

      setExpenses(expenseRes.data.expenses || []);
      setTotalSpent(totalRes.data.totalSpent || 0);
      setCategoryData(categoryRes.data || []);

      setUserData(profileRes.data || null);
      setMonthlySpent(monthRes.data.monthlySpent || 0);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    await API.delete(`/expenses/${id}`);
    fetchData();
  };

  const filteredExpenses = expenses.filter((exp) =>
    exp.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Financial Overview</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700"
        >
          + Add Expense
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-6 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <p>Total Balance Spent</p>
          <h2 className="text-2xl font-bold">₹ {totalSpent}</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>Transactions</p>
          <h2 className="text-2xl font-bold">{expenses.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>Main Category</p>
          <h2 className="text-2xl font-bold">
            {categoryData[0]?._id || "N/A"}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>Categories</p>
          <h2 className="text-2xl font-bold">
            {categoryData.length}
          </h2>
        </div>

        {/* 🔥 NEW CARD */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p>Monthly Salary</p>
          <h2 className="text-2xl font-bold">
            ₹ {userData?.monthlySalary || 0}
          </h2>
        </div>

        {/* 🔥 NEW CARD */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p>Monthly Target</p>
          <h2 className="text-2xl font-bold">
            ₹ {userData?.monthlyTarget || 0}
          </h2>
        </div>
      </div>

      {/* 🔥 Target Warning */}
      {monthlySpent > userData?.monthlyTarget && (
        <div className="bg-red-100 text-red-600 p-4 rounded-lg mb-6 font-medium">
          ⚠️ Your monthly expense has crossed your target!
        </div>
      )}

      {/* 🔥 Target Progress Bar */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <p className="font-medium">Target Progress</p>

        <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
          <div
            className={`h-4 rounded-full ${
              monthlySpent > userData?.monthlyTarget
                ? "bg-red-500"
                : "bg-green-500"
            }`}
            style={{
              width: `${
                userData?.monthlyTarget
                  ? Math.min(
                      (monthlySpent / userData.monthlyTarget) * 100,
                      100
                    )
                  : 0
              }%`,
            }}
          ></div>
        </div>

        <p className="mt-2 text-sm">
          ₹ {monthlySpent} / ₹ {userData?.monthlyTarget || 0}
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search expenses..."
          className="flex-1 p-3 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-3 border rounded-lg"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Expense List */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Recent Expenses</h3>

          {filteredExpenses.map((exp) => (
            <div
              key={exp._id}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <p className="font-medium">{exp.title}</p>
                <p className="text-sm text-gray-500">
                  {new Date(exp.date).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-semibold">
                  ₹ {exp.amount}
                </span>

                <button
                  onClick={() => handleDelete(exp._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-between mt-4">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <button
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 border rounded"
            >
              Next
            </button>
          </div>
        </div>

        {/* Category Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">
            Category Analysis
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="total"
                nameKey="_id"
                innerRadius={60}
                outerRadius={100}
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <AddExpenseModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        refresh={fetchData}
      />
    </div>
  );
}

export default Dashboard;
