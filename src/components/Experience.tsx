"use client";

import { experience } from "@/data"; // Importing data from "@/data"
import { FaBriefcase } from "react-icons/fa"; // Adding an icon for each experience
import { motion } from "framer-motion"; // Import Framer Motion
import React from "react";

// Define the shape of the experience data
interface ExperienceItem {
  year: string;
  title: string;
  date: string;
  description: string;
}

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white py-16 px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center relative"
    >
      {/* Static Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-72 h-72 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-[150px] opacity-40 absolute top-16 left-1/4"></div>
        <div className="w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-[150px] opacity-40 absolute bottom-[8rem] right-1/4"></div>
      </div>

      {/* Content with Framer Motion Animations */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Enhanced Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 text-transparent bg-clip-text animate-pulse"
        >
          My Experience
        </motion.h2>

        <div className="relative space-y-8 md:space-y-12">
          {/* Vertical Timeline */}
          <div className="absolute left-2 md:left-4 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></div>

          {experience.map((exp: ExperienceItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Initial state
              animate={{ opacity: 1, y: 0 }} // Animate to these values
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index
              className="relative pl-10 md:pl-16"
            >
              {/* Year Label */}
              <div className="absolute -left-10 md:-left-12 top-1/2 transform -translate-y-1/2">
                <span className="text-base md:text-lg font-semibold text-gray-300">
                  {exp.year}
                </span>
              </div>

              <div className="relative p-4 md:p-6 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 shadow-lg hover:scale-105 transform transition-all duration-500 group hover:shadow-2xl">
                {/* Decorative Icon */}
                <FaBriefcase className="absolute left-2 top-2 md:left-3 md:top-3 text-white/60 text-2xl md:text-3xl group-hover:rotate-12 transition-transform duration-500" />

                {/* Content */}
                <div className="pl-8 md:pl-10">
                  <h3 className="text-lg md:text-2xl font-semibold group-hover:text-white/90 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-200 mt-1 md:mt-2">
                    {exp.date}
                  </p>
                  <p className="text-xs md:text-sm text-white/70 mt-2 group-hover:text-white/80 transition-colors duration-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
