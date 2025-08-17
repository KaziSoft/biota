'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-33 right-6 z-100">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex items-center justify-center h-14 w-14 rounded-full bg-[#7AA859] text-white shadow-lg transition-opacity duration-300 ease-in-out hover:bg-[#6e984e] hover:scale-105"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
