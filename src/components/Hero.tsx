"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState, useRef, useCallback } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import * as THREE from "three";
import { motion } from "framer-motion";
import ShirokoCanvas from "./ShirokoCanvas";

// Starry Background Component
const Stars: React.FC = () => {
  const points = useRef<THREE.Points>(null);

  const [positions] = useState(() => {
    const temp: number[] = [];
    const numStars = 300; // Reduced stars for better performance
    for (let i = 0; i < numStars; i++) {
      const radius = 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  });

  const [colors] = useState(() => {
    const colorArray: number[] = [];
    for (let i = 0; i < 300; i++) {
      const color = new THREE.Color(`hsl(${Math.random() * 360}, 100%, 75%)`);
      colorArray.push(color.r, color.g, color.b);
    }
    return new Float32Array(colorArray);
  });

  useFrame(({ clock }) => {
    if (points.current) {
      const elapsed = clock.getElapsedTime();
      points.current.rotation.x = elapsed * 0.02;
      points.current.rotation.y = elapsed * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          itemSize={3}
          count={colors.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial vertexColors size={0.8} sizeAttenuation />
    </points>
  );
};

// Typewriter Effect Optimized
const useTypewriter = (phrases: string[]) => {
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];
    const timeout = setTimeout(
      () => {
        setText((prev) =>
          prev.length < currentPhrase.length
            ? currentPhrase.slice(0, prev.length + 1)
            : ""
        );
        if (text === "") setIndex((prev) => prev + 1);
      },
      text === currentPhrase ? 1200 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, index, phrases]);

  return text;
};

const Hero: React.FC = () => {
  const text = useTypewriter(["Web Developer", "Tech Enthusiast"]);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-900 via-gray-900 to-black overflow-hidden"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          gl={{ antialias: true }}
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5] }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Stars />
            <ShirokoCanvas />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 select-none">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I&apos;m{" "}
          <span className="text-primary animate-glow">Aziz Khasyi</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-secondary mt-2 h-8 text-white/70"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {text}
          <span className="animate-blink">|</span>
        </motion.h2>

        {/* Call to Action Arrow */}
        <motion.a
          href="#about"
          className="text-white mt-10 text-4xl animate-bounce"
          aria-label="Scroll Down"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaArrowDown />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
