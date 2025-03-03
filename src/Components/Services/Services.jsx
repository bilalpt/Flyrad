import React, { useState } from "react";
import jobplacement from '../images/Services/jobplacement.jpg';
import internshipopertunities from '../images/Services/internshipopertunities.jpg';
import expertcounsilling from '../images/Services/expertcounsilling.jpg';
import admissionassistance from '../images/Services/admissionassistance.jpg';

const services = [
    {
        title: "Expert Counseling",
        description: `Not sure where to start your aviation journey? Flyrad, India’s largest aviation portal, offers expert career counselling to help you choose the right path in the aviation industry. Whether you aspire to be a pilot, cabin crew, aircraft engineer, or ground staff, our industry experts provide the guidance you need.

        ✅ Personalized Career Roadmap – Get expert advice based on your interests & qualifications.
        ✅ Course & Institute Selection – Choose the best aviation program tailored for you.
        ✅ Admission & Scholarship Assistance – Get help securing the right institute with funding options.
        ✅ Job & Internship Guidance – Plan your career with placement-focused counselling.
        ✅ One-on-One Sessions – Speak with aviation professionals to clear all your doubts.`,
        image: expertcounsilling,
    },
    {
        title: "Admission Assistance",
        description: `Dreaming of an aviation career? Flyrad, India’s largest aviation portal, helps aspiring students secure admission to top aviation institutes across India and abroad. From pilot training to cabin crew programs, we guide you every step of the way!
        
        ✅ Top Aviation Institutes – Get admission to DGCA-approved and globally recognised institutes.
        ✅ Personalized Guidance – Expert counsellors help you choose the right course & college.
        ✅ Hassle-Free Application Process – We simplify admissions with end-to-end support.
        ✅ Scholarships & Financial Aid Support – Guidance on securing educational loans & funding.
        ✅ Direct Placement Pathway – Study with job-focused programs for a guaranteed career boost.`,
        image: admissionassistance,
    },
    {
        title: "Internship Opportunities",
        description: `Would you be willing to gain hands-on experience in the aviation industry? Flyrad, India’s largest aviation portal, connects aspiring professionals with top-tier internship programs at leading airlines, airports, and aviation companies.
        
        ✅ Real-World Aviation Experience – Work with industry experts & gain practical knowledge.
        ✅ Certified Internship Programs – Get recognized certification to boost your resume.
        ✅ Exclusive Industry Exposure – Learn from aviation professionals & expand your network.
        ✅ Pathway to Full-Time Jobs – Many interns secure permanent positions post-internship!`,
        image: internshipopertunities,
    },
    {
        title: "Guaranteed Job Placement",
        description: `Looking for an aviation career? Flyrad, India’s largest aviation portal, ensures a smooth path to your dream job. With our exclusive industry partnerships, we provide:
        
        ✅ 100% Verified Aviation Jobs – Direct tie-ups with airlines, airports, and aviation companies.
        ✅ Guaranteed Placement Support – Resume building, interview prep & career guidance.
        ✅ Premium Recruiter Access – Connect with top employers in aviation.
        ✅ Skill-Based Training Assistance – Get certified & job-ready.`,
        image: jobplacement,
    },
];

const Modal = ({ show, onClose, service }) => {
    if (!show) return null;

    return (
        <div id="services"
            className="fixed inset-0 bg-transparent backdrop-blur-sm flex justify-center items-center z-50"
            onClick={onClose} // Closes when clicking outside
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold text-blue-900">{service.title}</h2>
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded mt-3" />
                <p className="text-gray-600 mt-4 whitespace-pre-line">{service.description}</p>

                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-900 transition duration-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <div>
            <section id="services" className="relative bg-gradient-to-r to-[#1e347d] to-[#7686aa] pb-40 overflow-hidden">
                <div className="max-w-6xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-blue-900 pt-10">Our Services</h2>
                    <p className="mt-5 text-[#474d52]">
                        At Flyrad Aviation, we’re committed to guiding you every step of the way as you launch your career in aviation.
                    </p>
                </div>

                <div className="mt-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-32">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 group"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 relative z-10">
                                <h3 className="text-lg font-bold text-blue-900 group-hover:text-white transition duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mt-2 group-hover:text-white transition duration-300 max-h-16 overflow-hidden">
                                    {service.description.split("\n")[0]}...
                                </p>

                                <button
                                    onClick={() => openModal(service)}
                                    className="text-blue-700 font-semibold mt-3 block hover:underline group-hover:text-white transition duration-300"
                                >
                                    Read More
                                </button>
                            </div>

                            <div className="absolute inset-0 bg-[#6a4ba7] opacity-0 transform translate-y-full group-hover:opacity-70 group-hover:translate-y-0 transition duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Modal Component */}
                <Modal show={selectedService} onClose={closeModal} service={selectedService} />

                {/* Static Wave Effect */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg
                        className="w-full h-[180px]"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#0A2A7D"
                            fillOpacity="1"
                            d="M0,224L48,224C96,224,192,224,288,186.7C384,149,480,75,576,64C672,53,768,107,864,144C960,181,1056,203,1152,192C1248,181,1344,139,1392,117.3L1440,96V320H0V224Z"
                        ></path>
                    </svg>

                </div>
            </section>
        </div>
    );
};

export default Services;
