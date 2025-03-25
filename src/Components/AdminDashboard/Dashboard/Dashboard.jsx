import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser, FaChartBar, FaProjectDiagram, FaFileAlt, FaBlog, FaSignOutAlt, FaTasks } from "react-icons/fa";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AdminBlog from "../AdminBlog/AdminBlog";
import AdminLoginPage from "../AdminLoginPage";  // Import the AdminLoginPage

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate(); // Hook for navigation

  // Check if the user is authenticated on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (!token) {
      // If no token is found, redirect to the login page
      navigate("/AdminLoginPage");
    }
  }, [navigate]); // Empty dependency array ensures this runs only once after the component mounts

  const handleLogout = (e) => {
    e.preventDefault();  // Prevent default Link behavior
    localStorage.removeItem("authToken"); // Replace with your token key
    sessionStorage.removeItem("authToken"); // In case you're using sessionStorage
    // Clear any other session data if needed

    navigate("/AdminLoginPage");  // Redirect to login page
  };

  return (
    <div className="flex bg-black text-white min-h-screen">
      {/* Sidebar */}
      <div className={`bg-black bg-opacity-80 transition-all duration-300 ${isOpen ? "w-64" : "w-16"} h-screen p-5 relative`}>
        {/* Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="absolute top-6 right-[-15px] bg-purple-700 p-2 rounded-full">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <h2 className={`text-xl font-bold transition-all duration-300 ${isOpen ? "block" : "hidden"} text-white`}>Flyrad ADMIN</h2>

        {/* Sidebar Links */}
        <nav className="mt-10 space-y-4">
          <SidebarItem icon={<FaChartBar />} text="Dashboard" isOpen={isOpen} link="/dashboard" />
          <SidebarItem icon={<FaUser />} text="Team" isOpen={isOpen} link="/dashboard/team" />
          <SidebarItem icon={<FaProjectDiagram />} text="Projects" isOpen={isOpen} link="/dashboard/projects" />
          <SidebarItem icon={<FaBlog />} text="Blogs" isOpen={isOpen} link="/dashboard/blogs" />
          <SidebarItem icon={<FaFileAlt />} text="Documents" isOpen={isOpen} link="/dashboard/documents" />
          {/* Add Logout Sidebar Item */}
          <SidebarItem icon={<FaSignOutAlt />} text="Logout" isOpen={isOpen} onClick={handleLogout} />
        </nav>
      </div>

      {/* Main Dashboard Area */}
      <div className="flex-1 p-6 bg-black bg-opacity-90">
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/blogs" element={<AdminBlog />} />
          <Route path="/AdminLoginPage" element={<AdminLoginPage />} /> {/* Route for login page */}
        </Routes>
      </div>
    </div>
  );
}

/* Sidebar Item */
function SidebarItem({ icon, text, isOpen, link, onClick }) {
  return (
    <Link
      to={link || "#"}  // Prevent navigation if it's logout
      onClick={onClick}  // Trigger the onClick handler for logout
      className="flex items-center space-x-3 hover:bg-purple-700 p-3 rounded-lg cursor-pointer"
    >
      {icon}
      {isOpen && <span className="text-lg">{text}</span>}
    </Link>
  );
}

/* Default Dashboard Content */
function DashboardContent() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-400">Dashboard</h1>
        <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">
          <FaUser />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <StatCard title="Total Users" value="24,521" change="+14%" icon={<FaUser />} />
        <StatCard title="Revenue" value="$45,216" change="+5.2%" icon={<FaChartBar />} />
        <StatCard title="Active Projects" value="34" change="-2.4%" icon={<FaProjectDiagram />} />
        <StatCard title="Task Completion" value="78%" change="+8%" icon={<FaTasks />} />
      </div>
    </>
  );
}

/* Stat Card */
function StatCard({ title, value, change, icon }) {
  return (
    <div className="bg-black bg-opacity-80 p-4 rounded-lg flex justify-between items-center border border-gray-800">
      <div>
        <h3 className="text-lg text-white">{title}</h3>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className={`text-sm ${change.includes("-") ? "text-red-500" : "text-green-500"}`}>{change} vs last week</p>
      </div>
      <div className="text-3xl text-purple-700">{icon}</div>
    </div>
  );
}
