import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"; // Import Router Link
import Flyradnewlogochanges3 from "../images/Logo/Flyradnewlogochanges3.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#a8b5d5] to-[#1e347d] shadow-md transition-all duration-300 ${
        isScrolled ? "py-1" : "py-2"
      }`}
    >
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
          {["Home", "About", "Services", "Blog", "Contact"].map((item) => {
            let sectionId = item.toLowerCase();
            if (item === "About") sectionId = "missionvision";
            if (item === "Contact") sectionId = "aviationform";

            return item === "Blog" ? (
              <RouterLink
                key={item}
                to="/blog"
                className="px-4 py-2 text-white hover:text-white transition-all duration-300 rounded-md cursor-pointer"
              >
                {item}
              </RouterLink>
            ) : (
              <ScrollLink
                key={item}
                to={sectionId}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="px-4 py-2 text-white hover:text-white transition-all duration-300 rounded-md cursor-pointer"
              >
                {item}
              </ScrollLink>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1 flex justify-end z-50 relative">
          {!isOpen && (
            <button
              onClick={toggleMenu}
              className="text-[#1e347d] transition-all duration-300"
            >
              <FiMenu size={28} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu (Right Sidebar) */}
      <div
        className={`fixed top-0 right-0 w-64 h-screen bg-white shadow-md transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-center justify-center z-40`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-[#1e347d] text-2xl"
        >
          <FiX />
        </button>

        <div className="flex flex-col space-y-6 text-center">
          {["Home", "About", "Services", "Blog", "Contact"].map((item) => {
            let sectionId = item.toLowerCase();
            if (item === "About") sectionId = "missionvision";
            if (item === "Contact") sectionId = "aviationform";

            return item === "Blog" ? (
              <RouterLink
                key={item}
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="text-xl text-black hover:bg-[#1e347d] hover:text-white transition-all duration-300 px-6 py-3 rounded-md cursor-pointer"
              >
                {item}
              </RouterLink>
            ) : (
              <ScrollLink
                key={item}
                to={sectionId}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="text-xl text-black hover:bg-[#1e347d] hover:text-white transition-all duration-300 px-6 py-3 rounded-md cursor-pointer"
              >
                {item}
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
