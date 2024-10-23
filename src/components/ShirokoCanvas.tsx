"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import * as THREE from "three";
const ShirokoCanvas: React.FC = () => {
  const { scene } = useGLTF("/3D/Shiroko_fumo.glb");
  const modelRef = useRef<THREE.Object3D | null>(null);
  const [rotationSpeed, setRotationSpeed] = useState<number>(0.01);
  const [keySequence, setKeySequence] = useState<string>("");

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += rotationSpeed;
    }
  });

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setKeySequence((prev) => (prev + event.key).toLowerCase().slice(-6));

      if (keySequence.includes("faster")) {
        setRotationSpeed(0.05);
      } else {
        setRotationSpeed(0.01);
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [keySequence]);

  return (
    <>
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
