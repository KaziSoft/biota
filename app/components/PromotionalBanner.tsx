'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';

const PromotionalBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[500px] overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat mt-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-6"
      >
        {!isPlaying ? (
          <>
            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="w-16 h-16 rounded-full bg-red-600 text-white shadow-lg flex items-center justify-center hover:scale-110 transition duration-300 z-10"
              aria-label="Play video"
            >
              <FaPlay className="text-xl" />
            </button>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl z-10">
              Ray White Begins Bangladesh’s First Smart City: Jolshiri Abashon
            </h2>
          </>
        ) : (
          <div className="relative w-full max-w-4xl aspect-video z-20 mx-auto">
            {/* Close Button on top-right inside video container */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all z-30"
              aria-label="Close video"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Embedded YouTube Video */}
            <iframe
              className="w-full h-full border-0 rounded-2xl shadow-lg"
              src="https://www.youtube.com/embed/7yoncwdMbyg?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
    </section>
  );
};

export default PromotionalBanner;
