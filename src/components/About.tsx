"use client";

import React, { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const About: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-16 px-6 bg-black text-white flex items-center justify-center relative"
    >
      {/* Background Decoration (Static) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-72 h-72 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-[150px] opacity-40 absolute top-16 left-1/4"></div>
        <div className="w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-[150px] opacity-40 absolute bottom-16 right-1/4"></div>
      </div>

      {/* Motion Section Content */}
      <motion.div
        className="relative z-10 w-full max-w-3xl text-center flex flex-col space-y-8"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Title with animated gradient */}
        <motion.h2
          className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6"
          variants={item}
        >
          About Me
        </motion.h2>

        {/* Description with smooth fade-in */}
        <motion.p
          className="text-lg leading-relaxed max-w-2xl mx-auto transition-opacity duration-500 hover:opacity-90"
          variants={item}
        >
          Hi, I'm <span className="text-primary font-bold">Aziz Khasyi</span>, a
          passionate developer who enjoys building sleek, functional web
          applications. I merge design and technology to craft projects that
          engage users and look amazing.
        </motion.p>

        {/* Social Links with hover animations */}
        <motion.div
          className="flex justify-center space-x-8 text-3xl"
          variants={item}
        >
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
            href="https://x.com/kasurtrbang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300 transition-transform transform hover:scale-110"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
        </motion.div>

        {/* Call to Action Button */}
        <motion.a
          href="#contact"
          className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 max-w-xs mx-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={item}
        >
          Let's Collaborate
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
