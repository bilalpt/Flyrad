import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="bg-blue-50 flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 py-12">
      {/* Main Heading with Gradient */}
      <h2 className="text-2xl font-bold text-center mb-6 pt-10 bg-gradient-to-r from-[#1e347d] to-[#7686aa] bg-clip-text text-transparent">
        Explore Endless Opportunities in Aviation with Flyrad
      </h2>
      <p className="text-center text-gray-800 max-w-4xl mb-10 pt-4">
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
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-[#1e347d]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h11M9 21V3m0 0l6 6m-6-6L3 9m0 0h6m0 0v12m0-12l6 6"
        />
      </svg>
    ),
    title: "Comprehensive Directory of Aviation Schools and Academies",
    description:
      "Explore top-rated institutions and courses tailored to kickstart your journey in the aviation sector.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-[#1e347d]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c0-2.21-1.79-4-4-4S4 8.79 4 11m16 0c0-2.21-1.79-4-4-4s-4 1.79-4 4m4-4v12m-4-12v12m-4-12v12M4 21h16"
        />
      </svg>
    ),
    title: "Exclusive Job Portal",
    description:
      "Access our extensive job board featuring aviation roles from airlines, airports, and related sectors across India.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-[#1e347d]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-4m6 4v-4M3 21h18M4 10l8-6 8 6M4 10v11h16V10"
        />
      </svg>
    ),
    title: "A Community Focused on Growth and Success",
    description:
      "Join like-minded individuals and industry experts who are passionate about aviation. Receive guidance, support, and mentorship.",
  },
];

export default Features;
