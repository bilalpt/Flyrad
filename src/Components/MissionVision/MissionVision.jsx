import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Mission Section */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={fadeInUp}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#1e347d] to-[#7686aa] text-transparent bg-clip-text">
              Our Mission
            </h2>
          </div>
          <div className="mt-6">
            {[
              {
                title: "Connect the Dots",
                text: "Establish a dynamic network that seamlessly integrates the aviation industry’s top recruiters and institutions with highly motivated candidates.",
              },
              {
                title: "Excellence & Transparency",
                text: "Set the industry standard by ensuring every listing and partnership adheres to strict quality, ethical, and professional benchmarks.",
              },
              {
                title: "Future-Focused",
                text: "Shape the future of aviation recruitment by fostering growth, innovation, and continuous improvement.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <h3 className="text-xl font-bold mt-4 bg-gradient-to-r from-[#1e347d] to-[#7686aa] text-transparent bg-clip-text">
                  {item.title}
                </h3>
                <p className="mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={fadeInUp}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#1e347d] to-[#7686aa] text-transparent bg-clip-text">
              Our Vision
            </h2>
          </div>
          <div className="mt-6">
            {[
              {
                title: "Quality Matches",
                text: "To serve as a reliable conduit that delivers verified, quality opportunities, ensuring that candidates and recruiters alike benefit from genuine and rewarding connections.",
              },
              {
                title: "Excellence & Transparency",
                text: "To rigorously standardize and rate every partnering institution and recruiter, maintaining an environment of trust and excellence.",
              },
              {
                title: "Empowerment",
                text: "To empower recruiters and institutions with a steady flow of motivated, skilled candidates, driving forward the progress of the aviation sector.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <h3 className="text-xl font-bold mt-4 bg-gradient-to-r from-[#1e347d] to-[#7686aa] text-transparent bg-clip-text">
                  {item.title}
                </h3>
                <p className="mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MissionVision;
