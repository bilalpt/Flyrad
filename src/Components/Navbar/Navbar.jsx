import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Flyradnewlogochanges3 from "../images/Logo/Flyradnewlogochanges3.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-20 bg-gradient-to-r from-[#a8b5d5] to-[#1e347d] shadow-md transition-all duration-300 ${isScrolled ? "py-1" : "py-2"}`}>
      <div className="container mx-auto flex items-center px-4 md:px-6 lg:px-24 py-2">
        {/* Logo */}
        <div className="flex-1 flex items-center">
          <img
            src={Flyradnewlogochanges3}
            alt="Incubenation Logo"
            className="h-10 md:h-16 object-cover transition-all duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          {["Home", "About", "Services", "Contact"].map((item) => {
            let sectionId = item.toLowerCase();
            if (item === "Contact") sectionId = "aviationform"; // Contact → AviationForm
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                className="px-4 py-2 text-white hover:text-white transition-all duration-300 rounded-md"
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1 flex justify-end z-20 relative">
          <button onClick={toggleMenu} className="text-[#1e347d] transition-all duration-300">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-2 p-4">
          {["Home", "About", "Services", "Contact"].map((item) => {
            let sectionId = item.toLowerCase();
            if (item === "Contact") sectionId = "aviationform"; // Contact → AviationForm
            return (
              <a
                key={item}
                onClick={() => setIsOpen(false)} // Close menu on click
                href={`#${sectionId}`}
                className="px-4 py-2 text-black hover:bg-[#1e347d] hover:text-white transition-all duration-300 rounded-md"
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
