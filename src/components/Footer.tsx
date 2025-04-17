import React from 'react';
import { Linkedin, Mail, Phone} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from "../public/logos/ReBaseLogo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <img
                src={logo}
                style={{ width: "35px", height: "auto" }}
              />
              <span className="ml-2 text-xl font-bold">Rebase Track & Trace</span>
            </div>
            <p className="mt-4 text-gray-400">
              {t('hero.subtitle')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <a href="mailto:sales@rebaseit.tech" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                sales@rebaseit.tech
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                +1 (302) 244-7907
              </a>
              <a href="https://www.linkedin.com/company/rebase-it/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rebase IT Track & Trace. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;