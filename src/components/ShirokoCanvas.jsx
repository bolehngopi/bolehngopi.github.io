"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";

const ShirokoCanvas = () => {
  const { scene } = useGLTF("/3D/Shiroko_fumo.glb"); // Load GLB file
  const modelRef = useRef(); // Reference to the model
  const [rotationSpeed, setRotationSpeed] = useState(0.01); // Default rotation speed
  const [keySequence, setKeySequence] = useState(""); // Track key sequence

  // Add rotation animation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += rotationSpeed; // Adjust rotation speed
    }
  });

  // Detect if the user types "faster" globally
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Update the key sequence with the latest key
      setKeySequence((prev) => (prev + event.key).toLowerCase().slice(-6));

      // Debug
      console.log(keySequence);

      // Check if the last part of the sequence is "faster"
      if (keySequence.includes("faster")) {
        setRotationSpeed(0.05); // Increase speed
      } else {
        setRotationSpeed(0.01); // Default speed
      }
    };

    // Add event listener for keypresses
    window.addEventListener("keypress", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [keySequence]);

  return (
    < >
      {/* 3D Model */}
      <primitive
        ref={modelRef}
        object={scene}
        scale={6}
        position={[0, -2.5, 0]}
      />
    </>
  );
};

export default ShirokoCanvas;
