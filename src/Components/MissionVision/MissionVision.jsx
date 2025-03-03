import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          viewport={{ once: true }} // Ensures it animates only once
          className="bg-white p-8 rounded-lg shadow-2xl"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl"
            >
              🎯
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              custom={1}
              viewport={{ once: true }}
              className="text-3xl font-bold mt-4 bg-gradient-to-r from-[#1e347d] to-[#7686aa] text-transparent bg-clip-text"
            >
              Our Mission
            </motion.h2>
          </div>
          <div className="mt-6">
            {[
              { title: "Connect the Dots", text: "Establish a dynamic network that seamlessly integrates the aviation industry’s top recruiters and institutions with highly motivated candidates." },
              { title: "Excellence & Transparency", text: "Set the industry standard by ensuring every listing and partnership adheres to strict quality, ethical, and professional benchmarks." },
              { title: "Future-Focused", text: "Shape the future of aviation recruitment by fostering growth, innovation, and continuous improvement." }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial="hidden" 
                whileInView="visible" 
                variants={textVariants} 
                custom={index + 2} 
                viewport={{ once: true }}
              >
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
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-2xl"
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="text-4xl"
              animate={{ scaleY: isBlinking ? 0.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {isBlinking ? "⬛" : "👁️"}
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              custom={1}
              viewport={{ once: true }}
              className="text-3xl font-bold mt-4 bg-gradient-to-r from-[#1e347d] to-[#7686aa] text-transparent bg-clip-text"
            >
              Our Vision
            </motion.h2>
          </div>
          <div className="mt-6">
            {[
              { title: "Quality Matches", text: "To serve as a reliable conduit that delivers verified, quality opportunities, ensuring that candidates and recruiters alike benefit from genuine and rewarding connections." },
              { title: "Excellence & Transparency", text: "To rigorously standardize and rate every partnering institution and recruiter, maintaining an environment of trust and excellence." },
              { title: "Empowerment", text: "To empower recruiters and institutions with a steady flow of motivated, skilled candidates, driving forward the progress of the aviation sector." }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial="hidden" 
                whileInView="visible" 
                variants={textVariants} 
                custom={index + 2} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mt-4 bg-gradient-to-r from-[#1e347d] to-[#7686aa] text-transparent bg-clip-text">
                  {item.title}
                </h3>
                <p className="mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVision;
