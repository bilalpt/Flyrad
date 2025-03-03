import React from "react";

const Modal = ({ isOpen, onClose, title, description }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
                <button 
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold text-blue-900">{title}</h2>
                <p className="mt-4 text-gray-700 whitespace-pre-line">{description}</p>
            </div>
        </div>
    );
};

export default Modal;
