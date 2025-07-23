import { useAuth } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router";
import { MdDashboard } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const NavItem = ({ to, icon: Icon, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavLink
        to={to}
        className="hover:text-blue-300 text-xl p-2 rounded transition-all duration-200"
      >
        <Icon />
      </NavLink>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: -4 }}
          exit={{ opacity: 0, x: -10 }}
          className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-md z-10 whitespace-nowrap"
        >
          {label}
        </motion.div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [hoverLogout, setHoverLogout] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signin");
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="w-14 items-center h-full bg-gray-900 text-white flex flex-col">
      <nav className="flex h-[100vh] flex-col gap-6 p-4 items-center">
        <NavItem to="/dashboard" icon={MdDashboard} label="Dashboard" />
        <NavItem to="/dashboard/resume-builder" icon={FaFileSignature} label="Resume Builder" />
        <NavItem to="/dashboard/profile" icon={FaUser} label="Profile" />


        {/* Logout Icon */}
        <div
          className="relative flex justify-center mt-10"
          onMouseEnter={() => setHoverLogout(true)}
          onMouseLeave={() => setHoverLogout(false)}
        >
          <button
            onClick={handleLogout}
            className="text-xl text-red-400 hover:text-red-600 p-2"
          >
            <FiLogOut />
          </button>
          {hoverLogout && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: -4 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-md z-10 whitespace-nowrap"
            >
              Logout
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
