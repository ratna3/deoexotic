import React from 'react';
import Header from '@/components/Header';
import Hero3D from '@/components/Hero3D';
import Features from '@/components/Features';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero3D />
      <Features />
    </div>
  );
}
