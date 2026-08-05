// src/components/ThreeBackground.tsx
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const RotatingStars = () => {
  const starsRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x -= 0.0002;
      starsRef.current.rotation.y -= 0.0002;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#030014]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars />
      </Canvas>
    </div>
  );
}