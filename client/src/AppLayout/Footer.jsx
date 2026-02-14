function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <h2 className="font-semibold text-indigo-600">
          ExpensifyAI
        </h2>

        <p>© 2026 Smart Expense Tracker. Built for Internship Assessment.</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-indigo-600">Privacy</a>
          <a href="#" className="hover:text-indigo-600">Terms</a>
          <a href="#" className="hover:text-indigo-600">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
