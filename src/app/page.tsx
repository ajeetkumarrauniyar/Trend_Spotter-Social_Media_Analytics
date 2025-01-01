"use client";

import React from 'react';

import Navigation from '@/app/components/Navigation';
import HeroSection from '@/app/components/HeroSection';
import CTA from '@/app/components/CTA';
import { FeaturesSection } from '@/app/components/FeaturesSection';
import Footer from '@/app/components/Footer'
import { BackgroundGradient } from '@/app/components/BackgroundGradient';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <BackgroundGradient />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;