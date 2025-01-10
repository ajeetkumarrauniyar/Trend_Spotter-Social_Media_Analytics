"use client"

import React from 'react';
import { BackgroundGradient2 } from '@/app/components/BackgroundGradient';
import { HeroSection2 } from '@/app/components/HeroSection';
import Navigation from '@/app/components/Navigation';
import TimelineSection from '@/app/components/TimelineSection';
import { FeaturesSection2 } from '@/app/components/FeaturesSection';
import { CTA2 } from '@/app/components/CTA';
import Footer from '@/app/components/Footer';
import "@/styles/landingPageStyle.css"

const LandingPage = () => {
    return (
        <div className="min-h-screen text-white relative overflow-hidden">
            <BackgroundGradient2 />
            <Navigation />
            <HeroSection2 />
            <TimelineSection />
            <FeaturesSection2 />
            <CTA2 />
            <Footer />
        </div>
    );
};

export default LandingPage;