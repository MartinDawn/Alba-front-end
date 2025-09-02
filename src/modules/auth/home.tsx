import React from "react";
import MainLayout from './layout/layout';
import { IntroductionSection } from './components/home/Introduction_section';
import { FeedbackSection } from './components/home/feadback_section';
import { CTASection } from './components/home/cta_section';
import { StatsSection } from './components/home/stat_section';
import { HeroSection } from './components/home/hero_section';

const Home = () => {
  return (
      <MainLayout>
        <HeroSection />
        <IntroductionSection />
        <FeedbackSection />
        <StatsSection />
        <CTASection />
      </MainLayout>
  );
};

export default Home;
