"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import ShirokoCanvas from "./ShirokoCanvas";
import * as THREE from "three";

// Starry Background Component with Full 360° Distribution and Random Colors
const Stars = () => {
  const points = useRef();

  // Generate stars in a spherical 360° distribution
  const [positions] = useState(() => {
    const temp = [];
    const numStars = 500; // Adjust the number of stars as needed

    for (let i = 0; i < numStars; i++) {
      const radius = 100; // Adjust the radius of the sphere
      const theta = Math.random() * Math.PI * 2; // Random angle around the sphere
      const phi = Math.acos((Math.random() * 2) - 1); // Random polar angle

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  });

  const [colors] = useState(() => {
    const colorArray = [];
    for (let i = 0; i < 500; i++) {
      const color = new THREE.Color(`hsl(${Math.random() * 360}, 100%, 75%)`); // Random pastel colors
      colorArray.push(color.r, color.g, color.b);
    }
    return new Float32Array(colorArray);
  });

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    points.current.rotation.x = elapsed * 0.05;
    points.current.rotation.y = elapsed * 0.05;
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
      <pointsMaterial
        vertexColors
        size={1} // Adjust the size of stars
        sizeAttenuation
      />
    </points>
  );
};

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

          {/* Particle System (Stars) */}
          <Suspense fallback={null}>
            <Stars />
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
    </section>
  );
};

export default Hero;
