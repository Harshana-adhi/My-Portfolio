"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function HeroBlob() {
  const meshRef = React.useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.12;
      meshRef.current.rotation.y += delta * 0.16;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 12]} />
        <MeshDistortMaterial
          color="#d0ff71"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.35}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.4} color="#0bde66" />
      <pointLight position={[-3, -2, -2]} intensity={0.8} color="#d0ff71" />
      <HeroBlob />
      <Environment resolution={64}>
        <Lightformer intensity={2.5} color="#d0ff71" position={[0, 3, 0]} scale={[6, 6, 1]} />
        <Lightformer intensity={1.5} color="#0bde66" position={[-3, 0, 3]} scale={[4, 4, 1]} />
        <Lightformer intensity={1.5} color="#ffffff" position={[3, -2, -3]} scale={[4, 4, 1]} />
      </Environment>
    </Canvas>
  );
}
