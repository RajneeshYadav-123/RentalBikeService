import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleAdmin = (e) => {
    e.preventDefault();
    const val = localStorage.getItem('Admin');
    if (val) {
      navigate('/Admin');
    } else {
      alert("❌ Only Admin can access this page");
    }
  };

  const handleBikerBooking = (e) => {
    e.preventDefault();
    const val = localStorage.getItem('Biker');
    if (val) {
      navigate('/ViewSingleBooking');
    } else {
      alert("❌ Only Biker can access this page");
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const adminVal = localStorage.getItem('Admin');
    if (adminVal) {
      navigate('/Booking');
    } else {
      alert("❌ Only Admin can access this page");
    }
  };

  return (
    <div className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between py-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWx3VAp9zuLCrq8Gm4sIA-GDzRQtQBCHpjWQ&s"
            alt="Logo"
            className="h-12 w-12 rounded-full shadow-md object-cover"
          />
          <span className="text-2xl font-bold text-white">BikeZone</span>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 mt-4 sm:mt-0 font-medium">
          <a href="/AllBikes" className="text-white hover:text-yellow-400 transition duration-200">All Bikes</a>
          <span onClick={handleBooking} role="button" className="text-white cursor-pointer hover:text-yellow-400 transition duration-200">Booking</span>
          <a href="/Profile" className="text-white hover:text-yellow-400 transition duration-200">Profile</a>
          <a href="/Signup" className="text-white hover:text-yellow-400 transition duration-200">Signup</a>
          <a href="/Login" className="text-white hover:text-yellow-400 transition duration-200">Login</a>
          <a href="/ContactUs" className="text-white hover:text-yellow-400 transition duration-200">Contact Us</a>
          <span onClick={handleAdmin} role="button" className="text-white cursor-pointer hover:text-yellow-400 transition duration-200">Admin</span>
          <span onClick={handleBikerBooking} role="button" className="text-white cursor-pointer hover:text-yellow-400 transition duration-200">View Booking</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
