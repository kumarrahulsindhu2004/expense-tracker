import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-gray-100 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm mb-4">
            <p>Email : demo@gmail.com</p>
            <p>Password : demo123</p>
          </span>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Master Your Money <br />
            <span className="text-indigo-600">with Intelligence</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            The only expense tracker that uses AI to analyze your spending habits,
            identify leaks, and help you reach your financial goals faster.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/register")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              Get Started for Free
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="bg-white rounded-2xl shadow-xl p-4">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Dashboard preview"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
