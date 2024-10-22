"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-16 px-6 bg-black text-white flex items-center justify-center relative"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-72 h-72 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-[150px] opacity-40 absolute top-16 left-1/4"></div>
        <div className="w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-[150px] opacity-40 absolute bottom-16 right-1/4"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center flex flex-col space-y-8">
        {/* Title with animated gradient */}
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-text-gradient mb-6">
          About Me
        </h2>

        {/* Description with smooth transitions */}
        <p className="text-lg leading-relaxed max-w-2xl mx-auto transition-opacity duration-500 hover:opacity-90">
          Hi, I'm <span className="text-primary font-bold">Aziz Khasyi</span>, a passionate developer who enjoys building sleek, functional web applications. I merge design and technology to craft projects that engage users and look amazing.
        </p>

        {/* Social Links with hover animations */}
        <div className="flex justify-center space-x-8 text-3xl">
          <a
            href="https://github.com/bolehngopi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100 transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400 transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300 transition-transform transform hover:scale-110"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Call to Action Button */}
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 max-w-xs mx-auto"
        >
          Let's Collaborate
        </a>
      </div>
    </section>
  );
};

export default About;
