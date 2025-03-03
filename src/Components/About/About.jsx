import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import womenwithflight from "../../Components/images/flightimg/womenwithflight.jpg";

const About = () => {
  // Intersection Observer Hook (Triggers animation when in view)
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation happens only once
    threshold: 0.2, // Triggers when 20% of the component is in view
  });

  return (
    <div id="about"
      ref={ref}
      className="flex flex-col items-center text-center px-8 md:px-16 lg:px-24 py-12 bg-gradient-to-r to-[#1e347d] to-[#7686aa] text-white"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Why Choose Flyrad?
      </motion.h2>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-stretch justify-center w-full gap-10">
        {/* Image Section */}
        <motion.div
          className="md:w-xl flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="p-4 rounded-2xl flex items-center justify-center ">
            <img
              src={womenwithflight}
              alt="Air Hostess"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center text-left p-4 bg-gradient-to-r -[#1e347d] to-[#7686aa] bg-opacity-20 rounded-2xl "
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="mt-6 pl-5">
            <h3 className="text-xl font-semibold ">1. Trusted Network of Institutions</h3>
            <p className="mt-2">
              Access a wide range of respected aviation schools and academies offering specialized programs and training for various aviation careers.
            </p>
          </div>

          <div className="mt-6 pl-5">
            <h3 className="text-xl font-semibold">2. Career Opportunities</h3>
            <p className="mt-2">
              Explore valuable job opportunities, internships, and networking prospects with leading aviation companies.
            </p>
          </div>

          <div className="mt-6 pl-5">
            <h3 className="text-xl font-semibold">3. Personalized Guidance</h3>
            <p className="mt-2">
              We guide aspiring professionals by providing trusted resources and expert advice on how to navigate the complex world of aviation education and careers.
            </p>
          </div>

          <div className="mt-6 pl-5">
            <h3 className="text-xl font-semibold">4. Mutually Beneficial Partnerships</h3>
            <p className="mt-2">
              Flyrad offers collaboration opportunities. Institutions can engage directly with aviation enthusiasts, helping them make informed decisions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
