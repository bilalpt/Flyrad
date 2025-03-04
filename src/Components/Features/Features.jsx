import React from "react";
import { motion } from "framer-motion";
import { School, Briefcase, Users } from "lucide-react"; // Importing standard icons

const Features = () => {
  return (
    <div className="bg-blue-50 flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 py-12">
      {/* Main Heading with Gradient */}
      <h2 className="text-2xl font-bold text-center mb-6 pt-10 bg-gradient-to-r from-[#1e347d] to-[#7686aa] bg-clip-text text-transparent">
        Explore Endless Opportunities in Aviation with Flyrad
      </h2>
      <p className="text-center text-gray-800 max-w-4xl mb-10  text-xl  font-sans ">
        At Flyrad Aviation, we specialize in providing an unmatched network of
        educational resources, training centers, and job opportunities in the
        aviation industry across India. Whether you’re looking for pilot
        training, aviation management, engineering programs, or other
        specialized fields, our platform offers:
      </p>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 pt-4 pb-14">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="border border-gray-300 shadow-lg rounded-lg p-6 text-center relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }} // Ensures animation happens only once
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1e347d] to-[#7686aa]"></div>
            <div className="flex justify-center mb-4">{feature.icon}</div>
            {/* Apply Gradient Text Effect to All Headings */}
            <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-[#1e347d] to-[#7686aa] bg-clip-text text-transparent">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-md">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    icon: <School className="h-10 w-10 text-[#1e347d]" />, // Standard education icon
    title: "Comprehensive Directory of Aviation Schools and Academies",
    description:
      "Explore top-rated institutions and courses tailored to kickstart your journey in the aviation sector.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-[#1e347d]" />, // Standard job icon
    title: "Exclusive Job Portal",
    description:
      "Access our extensive job board featuring aviation roles from airlines, airports, and related sectors across India.",
  },
  {
    icon: <Users className="h-10 w-10 text-[#1e347d]" />, // Standard community icon
    title: "A Community Focused on Growth and Success",
    description:
      "Join like-minded individuals and industry experts who are passionate about aviation. Receive guidance, support, and mentorship.",
  },
];

export default Features;
