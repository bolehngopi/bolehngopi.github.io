"use client";

import { experience } from "@/data"; // Importing data from "@/data"

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white py-16 px-8 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              {/* Decorative Line */}
              <span className="absolute left-0 top-1/2 w-1 h-12 bg-white/40 -translate-y-1/2 rounded"></span>

              {/* Content */}
              <div className="pl-8">
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="text-lg text-gray-200 mt-2">{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
