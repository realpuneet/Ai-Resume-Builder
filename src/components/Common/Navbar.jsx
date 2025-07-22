import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

function Navbar() {
  const { isAuth, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/signin");
    setMenuOpen(false);
    toast.success("Logged out successfully");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-blue-600">AI Resume</Link>
        {/* Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Links */}
        
        <div className={`flex-col md:flex-row md:flex md:items-center gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10 ${menuOpen ? "flex" : "hidden"}`}>
          
          <Link to="/features" className="hover:text-blue-500 px-4 py-2" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link to="/templates" className="hover:text-blue-500 px-4 py-2" onClick={() => setMenuOpen(false)}>Templates</Link>
          <Link to="/pricing" className="hover:text-blue-500 px-4 py-2" onClick={() => setMenuOpen(false)}>Pricing</Link>
          
          
          {!isAuth ? (
            <>
              <Link to="/signin" className="px-3 py-1 border border-blue-600 rounded hover:bg-blue-100" onClick={() => setMenuOpen(false)}>Sign In</Link>
              <Link to="/signup" className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
              <button onClick={handleLogout} className="text-red-500 hover:text-red-700 px-3 py-1">Logout</button>
            </>
          )}
        
        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;