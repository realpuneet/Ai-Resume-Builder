import { useAuth } from "../../context/AuthContext"
import { NavLink, useNavigate } from "react-router"
import { MdDashboard } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";


const Sidebar = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/signin");
            toast.success("Logged out successfully");
        } catch (error) {
            console.error("Failed to log out:", error);
        }
    }

  return (
    <div className="w-10   items-center h-full bg-gray-900 text-white flex flex-col">
      <nav className="flex h-[100vh] flex-col gap-4 p-4">
        <NavLink to="/dashboard" className="hover:text-blue-300 text-xl" title="Dashboard"><MdDashboard /></NavLink>
        <NavLink to="/resume-builder" className="hover:text-blue-300 text-xl ms-1" title="Resume-Builder"><FaFileSignature /></NavLink>
        <NavLink to="/profile" className="hover:text-blue-300 text-xl" title="Profile"><FaUser /></NavLink>
        <button onClick={handleLogout} className="ms-1 mt-10 text-xl text-red-400 hover:text-red-600 text-left" title="Logout">
          <FiLogOut />
        </button>
      </nav>
    </div>
  )
}

export default Sidebar