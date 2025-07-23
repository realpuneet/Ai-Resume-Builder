import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext"; // Assuming you have a custom hook for auth

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuth, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signin");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const navLinksPublic = [
    { label: "Features", path: "/features" },
    { label: "Templates", path: "/templates" },
    { label: "Pricing", path: "/pricing" },
    { label: "Login", path: "/signin" },
    { label: "Signup", path: "/signup" },
  ];

  const navLinksPrivate = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Resume Builder", path: "/dashboard/resume-builder" },
    { label: "Templates", path: "/templates" },
    { label: "Profile", path: "/dashboard/profile" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50"
    >
      <Link to="/" className="text-2xl font-bold text-blue-600">
        ResumeX
      </Link>

      <div className="hidden md:flex gap-6 items-center">
        {(isAuth ? navLinksPrivate : navLinksPublic).map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="text-gray-700 dark:text-white hover:text-blue-600 transition duration-200"
          >
            {link.label}
          </Link>
        ))}

        {isAuth && (
          <button
            onClick={logout}
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 dark:text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-start gap-4 px-6 py-4 shadow-md md:hidden">
          {(isAuth ? navLinksPrivate : navLinksPublic).map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-gray-700 dark:text-white hover:text-blue-600 transition duration-200 w-full"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {isAuth && (
            <button
              onClick={() => {
                setIsOpen(false);
                handleLogout();
              }}
              className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition w-full"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
