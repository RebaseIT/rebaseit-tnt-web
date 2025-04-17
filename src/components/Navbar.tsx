import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Hexagon, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from "../public/logos/TrackAndTraceLogo630px.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const scrollToSection = async (sectionId: string) => {
    await navigate('/');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="flex items-center">
              <img
                src={logo}
                style={{ width: "120px", height: "auto" }}
              />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-primary hover:text-primaryHover px-3 py-2 rounded-md text-sm font-medium"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('modules')}
              className="text-primary hover:text-primaryHover px-3 py-2 rounded-md text-sm font-medium"
            >
              {t('nav.modules')}
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-primary hover:text-primaryHover px-3 py-2 rounded-md text-sm font-medium"
            >
              {t('nav.solutions')}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center text-primary hover:text-primaryHover px-3 py-2 rounded-md text-sm font-medium"
            >
              <Globe className="h-5 w-5 mr-1" />
              {i18n.language === 'en' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primaryHover"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-primary hover:text-primaryHover p-2"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('modules')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary hover:text-gray-900 hover:bg-gray-50"
            >
              {t('nav.modules')}
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary hover:text-gray-900 hover:bg-gray-50"
            >
              {t('nav.solutions')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primaryHover"
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;