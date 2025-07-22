import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleAdmin = (e) => {
    e.preventDefault();
    const val = localStorage.getItem("Admin");
    if (val) {
      navigate("/Admin");
    } else {
      alert("❌ Only Admin can access this page");
    }
  };

  const handleBikerBooking = (e) => {
    e.preventDefault();
    const val = localStorage.getItem("Biker");
    if (val) {
      navigate("/ViewSingleBooking");
    } else {
      alert("❌ Only Biker can access this page");
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const adminVal = localStorage.getItem("Admin");
    if (adminVal) {
      navigate("/Booking");
    } else {
      alert("❌ Only Admin can access this page");
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWx3VAp9zuLCrq8Gm4sIA-GDzRQtQBCHpjWQ&s"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover shadow-md"
          />
          <span className="text-xl font-extrabold text-slate-900 tracking-wide">BikeZone</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 font-medium text-sm">
          <a href="/AllBikes" className="text-slate-700 hover:text-orange-500 transition">All Bikes</a>
          <button onClick={handleBooking} className="text-slate-700 hover:text-orange-500 transition">Booking</button>
          <a href="/Profile" className="text-slate-700 hover:text-orange-500 transition">Profile</a>
          <a href="/ContactUs" className="text-slate-700 hover:text-orange-500 transition">Contact Us</a>
          <button onClick={handleAdmin} className="text-slate-700 hover:text-orange-500 transition">Admin</button>
          <button onClick={handleBikerBooking} className="text-slate-700 hover:text-orange-500 transition">View Booking</button>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/Login"
            className="px-4 py-2 text-sm font-semibold border border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition"
          >
            Login
          </a>
          <a
            href="/Signup"
            className="px-4 py-2 text-sm font-semibold bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
