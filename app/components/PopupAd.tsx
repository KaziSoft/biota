"use client";

import { useState, useEffect } from "react";

export default function PopupAd() {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '+8801751511212'; // Your WhatsApp number
  const defaultMessage = 'Hello, I have a question about your project'; // Default message

  useEffect(() => {
    // Trigger fade-in animation
    setTimeout(() => setIsVisible(true), 100);
    
    // Auto close popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 300);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  const openWhatsAppChat = () => {
    // Open WhatsApp chat in a new tab
    window.open(`https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(defaultMessage)}`, '_blank');
    closePopup();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/70 flex justify-center items-center z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-modal="true"
      role="dialog"
      aria-labelledby="popup-title"
      aria-describedby="popup-desc"
    >
      <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl max-w-md w-full mx-4 p-8 relative transform transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col items-center space-y-6">
          {/* Image with subtle animation */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 p-1 shadow-inner overflow-hidden animate-float">
            <img
              src="/img/logo.jpg"
              alt="Project Interest"
              className="w-full h-full object-cover rounded-full border-4 border-white"
            />
          </div>
          
          <div className="text-center space-y-3">
            <h2
              id="popup-title"
              className="text-2xl font-bold text-gray-800"
            >
              আপনি কি প্রকল্পের জন্য আগ্রহী?
            </h2>
            <p
              id="popup-desc"
              className="text-gray-600 text-lg"
            >
              আমাদের সাথে যোগাযোগ করুন এবং বিশেষ অফার পান!
            </p>
          </div>
          
          <div className="flex space-x-4 pt-2">
            <button
              onClick={closePopup}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              পরে দেখুন
            </button>
            <button
              onClick={openWhatsAppChat}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              যোগাযোগ করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}