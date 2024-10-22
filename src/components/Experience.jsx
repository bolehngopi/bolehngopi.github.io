"use client";

import { experience } from "@/data"; // Importing data from "@/data"
import { FaBriefcase } from "react-icons/fa"; // Adding an icon for each experience

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white py-16 px-8 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto">
        {/* Enhanced Animated Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
          My Experience
        </h2>

        <div className="relative space-y-12">
          {/* Vertical Timeline */}
          <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></div>

          {experience.map((exp, index) => (
            <div key={index} className="relative pl-16">
              {/* Year Label */}
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                <span className="text-lg font-semibold text-gray-300">
                  {exp.year}
                </span>
              </div>

              <div
                className="relative p-6 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 shadow-lg hover:scale-105 transform transition-all duration-500 group hover:shadow-2xl"
              >
                {/* Decorative Icon */}
                <FaBriefcase className="absolute left-3 top-3 text-white/60 text-3xl group-hover:rotate-12 transition-transform duration-500" />

                {/* Content */}
                <div className="pl-10">
                  <h3 className="text-2xl font-semibold group-hover:text-white/90 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-gray-200 mt-2">{exp.date}</p>
                  <p className="text-sm text-white/70 mt-2 group-hover:text-white/80 transition-colors duration-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
