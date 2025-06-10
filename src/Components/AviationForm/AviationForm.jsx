import { useState } from "react";
import React from "react";
import Flyradnewlogowhitechanges from '../images/Logo/Flyradnewlogowhitechanges.svg';

import { Link } from "react-router-dom";

export default function AviationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    applicationType: "",
    applicationFor: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div id="aviationform" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#0A2A7D] px-6 py-10 overflow-hidden">
      {/* Left Content - Form Section */}
      <div className="w-full md:w-1/2 space-y-6 md:pl-40">
        <h2 className="text-white text-3xl font-semibold break-words">
          Join us and elevate your aviation career!
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-transparent space-y-4 max-w-full"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full md:w-1/2 p-3 rounded-md border bg-white text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-1/2 p-3 rounded-md border bg-white text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 rounded-md border bg-white text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="applicationType"
            value={formData.applicationType}
            onChange={handleChange}
            className="w-full p-3 rounded-md border bg-white text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Your Application Type
            </option>
            <option value="training">Training</option>
            <option value="internship">Internship</option>
            <option value="job">Job</option>
          </select>

          <select
            name="applicationFor"
            value={formData.applicationFor}
            onChange={handleChange}
            className="w-full p-3 rounded-md border bg-white text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Application for Employment or Education
            </option>
            <option value="employment">Employment</option>
            <option value="education">Education</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md border bg-white text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 h-28"
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Content - Show on Mobile with Adjusted Layout */}
      <div className="md:w-1/2 flex flex-col items-center text-white p-6 text-center max-w-full space-y-6 bg-[#0A2A7D] rounded-xl shadow-lg">
        {/* Logo */}
        <img
          src={Flyradnewlogowhitechanges}
          alt="Company Logo"
          className="w-28 md:w-48 h-auto"
        />

        {/* Company Info */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-wide">FLYRAD.IN LTD</h3>
          <p className="text-sm leading-relaxed">
            <a
              href="https://www.google.com/maps/search/?q=Door+no+84,+3rd+cross,+near+Jyoti+Nivas+College+Road,+Koramangala+Industrial+Layout,+5th+Block,+Koramangala,+Bengaluru,+Karnataka+560095"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              Door no: 84, 3rd Cross, near Jyoti Nivas College Road, <br />
              Koramangala Industrial Layout, 5th Block, <br />
              Koramangala, Bengaluru, Karnataka 560095
            </a>
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-sm space-y-2">
          <p className="font-semibold">📞 Connect With Us:</p>
          <a
            href="tel:+919035465956"
            className="block hover:text-gray-300 transition"
          >
            +91 9035465954
          </a>

          <p className="font-semibold mt-2">📧 Email:</p>
          <a
            href="mailto:info@flyrad.in"
            className="block hover:text-gray-300 transition"
          >
            info@flyrad.in
          </a>
        </div>

        {/* Policy Links */}
        <div className="text-xs text-gray-400 space-y-1 pt-2 border-t border-gray-600 w-full mt-4">
          <Link
            to="/privacypolicy"
            className="hover:underline block transition"
          >
            Privacy Policy
          </Link>
          <Link
            to="/termsconditions"
            className="hover:underline block transition"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>

    </div>
  );
}
