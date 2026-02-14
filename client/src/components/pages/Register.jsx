import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    monthlySalary: "",
    monthlyTarget: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/register", form);

      localStorage.setItem("user", JSON.stringify(data));
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-[400px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign Up
        </h2>

        <input
          name="name"
          placeholder="Name"
          className="w-full mb-3 p-3 border rounded-lg"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded-lg"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-3 border rounded-lg"
          onChange={handleChange}
        />

        <input
          name="monthlySalary"
          type="number"
          placeholder="Monthly Salary"
          className="w-full mb-3 p-3 border rounded-lg"
          onChange={handleChange}
        />

        <input
          name="monthlyTarget"
          type="number"
          placeholder="Monthly Target"
          className="w-full mb-6 p-3 border rounded-lg"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
