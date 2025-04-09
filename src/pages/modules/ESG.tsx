import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Leaf, Check, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ESG = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReturn = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleReturn}
          className="mb-8 text-primary hover:text-primaryHover font-medium flex items-center"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          {t('modules.back')}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <Leaf className="h-12 w-12 text-primary" />
              <h1 className="ml-4 text-3xl font-bold text-gray-900">{t('modules.esg.title')}</h1>
            </div>

            <div className="prose max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                {t('modules.esg.subtitle')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-green-50 p-6 rounded-lg"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('modules.esg.environmental.title')}
                  </h2>
                  <ul className="space-y-3">
                    {t('modules.esg.environmental.list', { returnObjects: true }).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-blue-50 p-6 rounded-lg"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('modules.esg.social.title')}
                  </h2>
                  <ul className="space-y-3">
                    {t('modules.esg.social.list', { returnObjects: true }).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-purple-50 p-6 rounded-lg"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('modules.esg.governance.title')}
                  </h2>
                  <ul className="space-y-3">
                    {t('modules.esg.governance.list', { returnObjects: true }).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('modules.esg.technical.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t('modules.esg.technical.data.title')}
                    </h3>
                    <ul className="space-y-2">
                      {t('modules.esg.technical.data.list', { returnObjects: true }).map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t('modules.esg.technical.monitoring.title')}
                    </h3>
                    <ul className="space-y-2">
                      {t('modules.esg.technical.monitoring.list', { returnObjects: true }).map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {t('modules.esg.certificates.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <img
                      src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&q=80"
                      alt="Environmental Certificates"
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600">{t('modules.esg.certificates.environmental')}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <img
                      src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80"
                      alt="Anonymous Survey System"
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600">{t('modules.esg.certificates.surveys')}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <img
                      src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
                      alt="Gender Equity Analytics"
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600">{t('modules.esg.certificates.gender')}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <img
                      src="https://images.unsplash.com/photo-1553484771-047a44eee27a?auto=format&fit=crop&w=800&q=80"
                      alt="Anonymous Reporting System"
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600">{t('modules.esg.certificates.reporting')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-blue-50 p-8 rounded-lg"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('modules.esg.why.title')}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t('modules.esg.why.text')}
                </p>
                <Link
                  to="/"
                  state={{ scrollTo: 'contact' }}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primaryHover transition-colors duration-200"
                >
                  {t('modules.esg.why.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ESG;