'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as THREE from 'three';

// Simple 3D Perfume Bottle Component
const PerfumeBottle = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Bottle Body */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.8, 0.6, 2, 8]} />
        <meshPhysicalMaterial 
          color="#8B4513"
          metalness={0.1}
          roughness={0.1}
          transmission={0.9}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
      
      {/* Bottle Neck */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 0.6, 8]} />
        <meshPhysicalMaterial 
          color="#8B4513"
          metalness={0.1}
          roughness={0.1}
          transmission={0.9}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
      
      {/* Cap */}
      <mesh position={[0, 1.3, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.3, 8]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Label */}
      <mesh position={[0, -0.3, 0.61]}>
        <planeGeometry args={[1.2, 0.6]} />
        <meshBasicMaterial color="#FFF8DC" transparent opacity={0.9} />
      </mesh>
    </group>
  );
};

// Floating particles
const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const particlePositions = React.useMemo(() => {
    const positions = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={100}
          array={particlePositions}
          itemSize={3}
          args={[particlePositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#FFD700" transparent opacity={0.6} />
    </points>
  );
};

const Hero3D = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-background to-amber-deep/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8B4513 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #FFD700 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left Content */}
        <motion.div 
          className="text-center lg:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-amber-deep dark:text-gold">Pure Luxury</span>
            <br />
            <span className="text-forest dark:text-green-400">Naturally</span>
            <br />
            <span className="bg-gradient-to-r from-amber-deep via-gold to-forest bg-clip-text text-transparent">
              Crafted
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience the essence of nature with our 100% chemical-free attars. 
            No parabens, no chemicals, no side effects.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/collections"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-deep to-gold text-cream rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Explore Collection
              <svg 
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-deep text-amber-deep hover:bg-amber-deep hover:text-cream rounded-full font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              100% Natural
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              No Chemicals
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Cruelty Free
            </div>
          </motion.div>
        </motion.div>

        {/* Right 3D Scene */}
        <motion.div 
          className="h-96 lg:h-[600px] relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            className="w-full h-full"
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FFD700" />
              
              <PerfumeBottle />
              <Particles />
              
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                autoRotate
                autoRotateSpeed={1}
              />
            </Suspense>
          </Canvas>
          
          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gold rounded-full animate-float opacity-60"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-forest rounded-full animate-float animation-delay-1000 opacity-40"></div>
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-amber-deep rounded-full animate-float animation-delay-2000 opacity-50"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="flex flex-col items-center text-muted-foreground">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3D;