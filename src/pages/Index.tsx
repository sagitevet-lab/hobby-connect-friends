
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CommunitySection from '../components/CommunitySection';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Hero />
      <Features />
      <HowItWorks />
      <CommunitySection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
