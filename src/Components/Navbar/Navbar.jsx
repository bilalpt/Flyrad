import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
// import Flyradnewlogochanges3 from "../images/Logo/Flyradnewlogochanges3.svg";
import FlyradLogo from "../../../public/FlyradLogo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });

      // Wait a moment to ensure React Router navigates before scrolling
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#a8b5d5] to-[#1e347d] shadow-md transition-all duration-300 py-2">
      <div className="container mx-auto flex items-center px-4 md:px-6 lg:px-24 py-2">
        {/* Logo */}
        <div className="flex-1 flex items-center">
          <img src={FlyradLogo} alt="Logo" className="h-10 md:h-16 object-cover" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center gap-16">
          <button onClick={() => handleSectionClick("home")} className="text-white cursor-pointer">Home</button>
          <button onClick={() => handleSectionClick("missionvision")} className="text-white cursor-pointer">About</button>
          <button onClick={() => handleSectionClick("services")} className="text-white cursor-pointer">Services</button>
          <RouterLink to="/blog" className="text-white cursor-pointer">Blog</RouterLink>
          <button onClick={() => handleSectionClick("aviationform")} className="text-white cursor-pointer">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1 flex justify-end">
          {!isOpen && <button onClick={toggleMenu} className="text-white cursor-pointer"><FiMenu size={28} /></button>}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-64 h-screen bg-white transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} flex flex-col items-center gap-6 pt-20`}>
        <button onClick={toggleMenu} className="absolute top-5 right-5 text-black text-2xl cursor-pointer"><FiX /></button>
        <button onClick={() => handleSectionClick("home")} className="text-xl text-black cursor-pointer">Home</button>
        <button onClick={() => handleSectionClick("missionvision")} className="text-xl text-black cursor-pointer">About</button>
        <button onClick={() => handleSectionClick("services")} className="text-xl text-black cursor-pointer">Services</button>
        <RouterLink to="/blog" onClick={() => setIsOpen(false)} className="text-xl text-black cursor-pointer">Blog</RouterLink>
        <button onClick={() => handleSectionClick("aviationform")} className="text-xl text-black cursor-pointer">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
