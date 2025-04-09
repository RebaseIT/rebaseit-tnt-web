import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-secondary text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {t('hero.title')}
            </h1>
            <p className="text-xl mb-8 text-black">
              {t('hero.subtitle')}
            </p>
            <div className="space-x-4">
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primaryHover transition-colors duration-200"
              >
                {t('hero.cta.start')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-base font-medium rounded-md text-primary hover:bg-cyan-50 hover:text-primaryHover transition-colors duration-200"
              >
                {t('hero.cta.demo')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Supply Chain Visualization"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;