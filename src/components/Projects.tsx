"use client";

import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { projects } from "@/data"; // Assuming you have the project data in /data
import { motion } from "framer-motion"; // Import Framer Motion

interface Project {
  title: string;
  description: string;
  preview?: string;
  source?: string;
}

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-16 px-6 bg-black text-white flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }} // Animates when in view
            initial={{ opacity: 0, y: 50 }} // Initial off-screen position
            transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger animation
            viewport={{ once: true, amount: 0.3 }} // Animates only once when 30% in view
          >
            <PinContainer title={project.title}>
              <div className="w-full h-full p-2 flex flex-col justify-between rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {/* Project Image or Placeholder */}
                {project.preview ? (
                  <img
                    src={project.preview}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-lg mb-4 shadow-lg"
                  />
                ) : (
                  <div className="w-full h-56 flex items-center justify-center bg-gray-700 rounded-lg mb-4 shadow-lg">
                    <span className="text-gray-400">No Image Available</span>
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-200 mb-4 line-clamp-3 overflow-hidden max-h-16">
                  {project.description}
                </p>

                {project.source ? (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                    aria-label={`GitHub link for ${project.title}`}
                  >
                    Check More <FaArrowRight />
                  </a>
                ) : (
                  <p className="text-gray-400">Source not available</p>
                )}
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

// PinContainer Component
interface PinContainerProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  containerClassName?: string;
}

export const PinContainer: React.FC<PinContainerProps> = ({
  children,
  title,
  className,
  containerClassName,
}) => {
  const [transform, setTransform] = useState<string>("rotateX(0deg) scale(1)");

  const onMouseEnter = () => {
    setTransform("rotateX(20deg) scale(0.95)");
  };
  const onMouseLeave = () => {
    setTransform("rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={
        "relative group z-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white w-full" +
        (containerClassName ? containerClassName : "")
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
      aria-labelledby={`project-${title}`}
    >
      <div id={`project-${title}`} className="sr-only">
        {title}
      </div>
      <div
        style={{
          perspective: "1000px",
        }}
        className="w-full h-full"
      >
        <div
          style={{
            transform: transform,
            willChange: "transform",
          }}
          className="relative w-full h-full p-4 flex flex-col justify-start items-start rounded-2xl shadow-lg border border-white/[0.1] group-hover:border-white/[0.2] transition-transform duration-500 overflow-hidden bg-gradient-to-tl from-gray-800 via-gray-900 to-black"
        >
          <div className={"relative z-10 " + (className ? className : "")}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
