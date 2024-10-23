"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-t bg-black text-white py-6 border-t-white border-t">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Copyright Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Aziz Khasyi. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            title="GitHub"
            href="https://github.com/bolehngopi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            title="LinkedIn"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            title="Twitter"
            href="https://x.com/kasurtrbang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-all duration-300"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
