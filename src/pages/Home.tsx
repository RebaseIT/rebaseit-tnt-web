import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import ModulesSection from '../components/home/ModulesSection';
import SolutionsSection from '../components/home/SolutionsSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      <Hero scrollToSection={scrollToSection} />
      <About />
      <ModulesSection />
      <SolutionsSection />
      <ContactSection />
    </div>
  );
};

export default Home;