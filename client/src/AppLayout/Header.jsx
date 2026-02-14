import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">
          ExpensifyAI
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-600">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          {user ? (
            <>
              <button
                onClick={() => navigate("/dashboard")}
                className="text-gray-600 hover:text-indigo-600"
              >
                Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="text-gray-600 hover:text-indigo-600"
              >
                Log in
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Sign up free
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
