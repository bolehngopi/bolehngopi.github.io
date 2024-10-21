"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import ShirokoCanvas from "./ShirokoCanvas";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = ["Web Developer", "Tech Enthusiast"];

  // Typewriter Effect
  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];
    const timeout = setTimeout(
      () => {
        setText((prev) =>
          prev.length < currentPhrase.length
            ? currentPhrase.slice(0, prev.length + 1)
            : ""
        );

        if (text === "") {
          setIndex((prev) => prev + 1);
        }
      },
      text === currentPhrase ? 1500 : 150
    );

    return () => clearTimeout(timeout);
  }, [text, index]);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-900 via-gray-900 to-black overflow-hidden"
    >
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas gl={{ preserveDrawingBuffer: true }}>
          {/* Lighting */}
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          {/* <pointLight position={[10, 20, 10]} /> */}

          {/* 3D Object */}
          <Suspense fallback={null}>
            <ShirokoCanvas />
          </Suspense>

          {/* Controls for Rotation */}
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 flex flex-col items-center gap-6 select-none">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, I am <span className="text-primary">Aziz Khasyi</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-secondary mt-2 h-8 text-white/70">
          {text}
          <span className="animate-blink">|</span>
        </h2>
      </div>

      {/* Scroll Down Button */}
      {/* <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white text-xl animate-bounce z-10"
      >
        Scroll Down <FaArrowDown />
      </a> */}
    </section>
  );
};

export default Hero;
