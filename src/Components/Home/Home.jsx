import React from "react";
import kimgflight from "../images/flightimg/kimgflight.webp";
import flightwithpiolet from "../images/flightimg/flightwithpiolet.jpg";
import homeflightimg2 from "../images/flightimg/homeflightimg2.jpg";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="home" className="md:w-full h-[100vh] md:min-h-[95vh] bg-gradient-to-r from-[#1e347d] to-[#7686aa] relative">
      {/* Content Layout */}
      <div className="relative md:w-full h-auto min-h-[95vh] flex flex-col md:flex-row">

        {/* Left Side - Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[50%] flex flex-col items-center justify-center text-center md:text-left px-6 md:px-8 py-10 md:pt-20"
        >
          <h1 className="text-3xl md:text-5xl text-white font-bold md:pl-14 mt-16 md:mt-0">
            Explore the Sky With Your{" "}
            <span className="block md:inline">Passion</span>
          </h1>

          <div className="text-white text-sm md:text-lg pt-4 md:pt-6 md:pl-14 text-justify">
            <p>
              Flyrad is India’s premier online portal for aspiring aviation professionals.
              Our mission is to connect passionate individuals with top-tier aviation schools,
              academies, and career opportunities. Whether you’re a student seeking the right
              course or a job seeker aiming for the next big career move, Flyrad bridges the gap.
            </p>
            <button
              className="mt-6 md:mt-8 px-5 md:px-6 py-2 md:py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition"
              onClick={() => document.getElementById("aviationform").scrollIntoView({ behavior: "smooth" })}
            >
              Connect Us
            </button>

          </div>
        </motion.div>

        {/* Right Side - Images */}
        <div className="w-full md:w-[50%] flex items-center justify-center relative mt-8 md:mt-32">

          {/* Image Cards */}
          <motion.div
            className="w-40 md:w-52 h-52 md:h-64 bg-white rounded-lg shadow-lg overflow-hidden absolute top-8 md:top-24 left-6 md:left-12 border-4 border-white"
            initial={{ opacity: 0, y: -50, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={homeflightimg2} alt="New Flight" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            className="w-44 md:w-56 h-56 md:h-72 bg-white rounded-lg shadow-2xl overflow-hidden absolute top-4 md:top-12 right-6 md:right-14 border-4 border-white"
            initial={{ opacity: 0, y: -50, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={kimgflight} alt="Home Flight" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            className="w-52 md:w-72 h-72 md:h-96 bg-white rounded-lg shadow-xl overflow-hidden relative"
            initial={{ opacity: 0, y: -50, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img src={flightwithpiolet} alt="Flight with Pilot" className="w-full h-full object-cover" />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Home;
