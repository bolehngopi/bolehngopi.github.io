"use client";

import React, { useEffect, useState, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa"; // Ensure react-icons is installed

interface MoveToTopProps {
  color?: string; // Customizable button background color
  position?: string; // Customizable position (e.g., "bottom-10 right-10")
}

const MoveToTop: React.FC<MoveToTopProps> = ({
  color = "bg-black",
  position = "bottom-6 right-6",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Optimized scroll handler using useCallback to avoid unnecessary re-renders
  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed ${position} z-50 flex items-center justify-center w-12 h-12 ${color} text-white rounded-full shadow-lg border border-white/10 
        transition-transform duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50 
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default MoveToTop;
