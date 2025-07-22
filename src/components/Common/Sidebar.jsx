import { useAuth } from "../../context/AuthContext"
import { NavLink, useNavigate } from "react-router"

const Sidebar = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/signin");
            console.log("User logged out successfully");
        } catch (error) {
            console.error("Failed to log out:", error);
        }
    }

  return (
    <div className="w-64 h-full bg-gray-900 text-white flex flex-col">
      <div className="text-2xl font-bold p-4 border-b border-gray-700">AI Resume</div>
      <nav className="flex flex-col gap-2 p-4">
        <NavLink to="/dashboard" className="hover:text-blue-300">Dashboard</NavLink>
        <NavLink to="/resume-builder" className="hover:text-blue-300">Resume Builder</NavLink>
        <NavLink to="/profile" className="hover:text-blue-300">Profile</NavLink>
        <button onClick={handleLogout} className="mt-4 text-red-400 hover:text-red-600 text-left">
          Logout
        </button>
      </nav>
    </div>
  )
}

export default Sidebar