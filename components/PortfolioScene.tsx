
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Cylinder, Stars, Environment, Box, Text } from '@react-three/drei';
import * as THREE from 'three';

// Fix for JSX intrinsic elements errors in TypeScript
const Mesh = 'mesh' as any;
const OctahedronGeometry = 'octahedronGeometry' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const SpotLight = 'spotLight' as any;
const Group = 'group' as any;

const FloatingTechNode = ({ position, color, scale = 1, rotationSpeed = 1 }: { position: [number, number, number]; color: string; scale?: number; rotationSpeed?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t * 1.5 + position[0]) * 0.15;
      ref.current.rotation.x = t * 0.3 * rotationSpeed;
      ref.current.rotation.y = t * 0.2 * rotationSpeed;
    }
  });

  return (
    /* Fix: use Mesh constant to resolve TS error */
    <Mesh ref={ref} position={position} scale={scale}>
      {/* Fix: use OctahedronGeometry constant to resolve TS error */}
      <OctahedronGeometry args={[1, 0]} />
      {/* Fix: use MeshStandardMaterial constant to resolve TS error */}
      <MeshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.1}
        wireframe
        emissive={color}
        emissiveIntensity={0.5}
      />
    </Mesh>
  );
};

const ConnectionRing = () => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
       const t = state.clock.getElapsedTime();
       ref.current.rotation.z = t * 0.15;
       ref.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <Torus ref={ref} args={[4, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
      {/* Fix: use MeshStandardMaterial constant to resolve TS error */}
      <MeshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={0.8} transparent opacity={0.4} />
    </Torus>
  );
}

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Fix: use AmbientLight constant to resolve TS error */}
        <AmbientLight intensity={0.4} />
        {/* Fix: use PointLight constant to resolve TS error */}
        <PointLight position={[10, 10, 10]} intensity={1.5} color="#C5A059" />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <FloatingTechNode position={[0, 0, 0]} color="#C5A059" scale={1.2} />
          <ConnectionRing />
          <ConnectionRing />
        </Float>
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
           <FloatingTechNode position={[-4, 2, -3]} color="#71717a" scale={0.5} />
           <FloatingTechNode position={[4, -1, -4]} color="#C5A059" scale={0.7} />
           <FloatingTechNode position={[-2, -3, -2]} color="#a1a1aa" scale={0.4} />
        </Float>

        <Environment preset="city" />
        <Stars radius={100} depth={50} count={800} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export const TechStackScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Fix: use AmbientLight constant to resolve TS error */}
        <AmbientLight intensity={1.2} />
        {/* Fix: use SpotLight constant to resolve TS error */}
        <SpotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.5} color="#C5A059" />
        {/* Fix: use PointLight constant to resolve TS error */}
        <PointLight position={[-5, -5, -5]} intensity={0.5} />
        <Environment preset="studio" />
        
        <Float rotationIntensity={1} floatIntensity={0.5} speed={2}>
          {/* Fix: use Group constant to resolve TS error */}
          <Group rotation={[Math.PI / 6, Math.PI / 6, 0]}>
            {/* Core Box representing reliable backend */}
            <Box args={[1.5, 1.5, 1.5]}>
                {/* Fix: use MeshStandardMaterial constant to resolve TS error */}
                <MeshStandardMaterial 
                  color="#1a1a1a" 
                  metalness={0.8} 
                  roughness={0.2} 
                  wireframe
                />
            </Box>
            
            {/* Floating spheres representing AI/Scalability */}
            <Sphere args={[0.2, 32, 32]} position={[1.5, 0, 0]}>
                {/* Fix: use MeshStandardMaterial constant to resolve TS error */}
                <MeshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={1} />
            </Sphere>
            <Sphere args={[0.2, 32, 32]} position={[-1.5, 0, 0]}>
                {/* Fix: use MeshStandardMaterial constant to resolve TS error */}
                <MeshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={1} />
            </Sphere>
            <Sphere args={[0.2, 32, 32]} position={[0, 1.5, 0]}>
                {/* Fix: use MeshStandardMaterial constant to resolve TS error */}
                <MeshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={1} />
            </Sphere>
            <Sphere args={[0.2, 32, 32]} position={[0, -1.5, 0]}>
                {/* Fix: use MeshStandardMaterial constant to resolve TS error */}
                <MeshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={1} />
            </Sphere>
            
            {/* Inner "Data" Cube */}
            <Box args={[0.8, 0.8, 0.8]}>
                <MeshDistortMaterial
                    color="#C5A059"
                    speed={2}
                    distort={0.4}
                    metalness={0.5}
                />
            </Box>
          </Group>
        </Float>
      </Canvas>
    </div>
  );
}
