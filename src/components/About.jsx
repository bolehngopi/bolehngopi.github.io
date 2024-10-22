"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-16 px-6 bg-black text-white flex items-center justify-center"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8">
        {/* Left Side: Title and Social Links */}
        <div className="flex flex-col items-center md:items-end justify-center">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center md:text-right mb-6">
            About Me
          </h2>

          {/* Social Links */}
          <div className="flex gap-6 justify-center md:justify-end">
            <a
              href="https://github.com/bolehngopi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:text-black dark:hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-500 hover:text-black dark:hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300 dark:bg-gray-600"></div>

        {/* Right Side: Description */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <p className="text-lg leading-relaxed mb-6 text-center md:text-left">
            I&apos;m <span className="text-primary font-semibold">Aziz Khasyi</span>, a passionate developer who loves building
            beautiful web experiences. With a keen eye for detail and a deep interest in technology,
            I bridge the gap between code and design to craft exceptional projects.
          </p>

          {/* Call to Action */}
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-white font-medium rounded-full shadow-md hover:bg-primary/90 transition duration-300"
          >
            Let's Collaborate
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
