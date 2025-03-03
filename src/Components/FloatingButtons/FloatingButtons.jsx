import React from "react";
import { FaWhatsapp, FaPhone, FaInstagram } from "react-icons/fa";

const FloatingButtons = () => {
    return (
        <div className="fixed bottom-10 right-5 flex flex-col gap-3">
            {/* Instagram Button */}
            <a
                href="https://www.instagram.com/flyrad_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-pink-500 text-white rounded-full shadow-lg"
            >
                <FaInstagram size={28} />
            </a>
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919035465956"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg"
            >
                <FaWhatsapp size={28} />
            </a>

            {/* Call Button */}
            <a
                href="tel:+919035465956"
                className="w-14 h-14 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg"
            >
                <FaPhone size={28} />
            </a>


        </div>
    );
};

export default FloatingButtons;
