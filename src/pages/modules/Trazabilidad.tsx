import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, Check, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Trazabilidad = () => {
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
              <GitBranch className="h-12 w-12 text-primary" />
              <h1 className="ml-4 text-3xl font-bold text-gray-900">{t('modules.traceability.title')}</h1>
            </div>

            <div className="prose max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                {t('modules.traceability.subtitle')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {t('modules.traceability.features.title')}
                  </h2>
                  <ul className="space-y-3">
                    {t('modules.traceability.features.list', { returnObjects: true }).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {t('modules.traceability.benefits.title')}
                  </h2>
                  <ul className="space-y-3">
                    {t('modules.traceability.benefits.list', { returnObjects: true }).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
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
                  {t('modules.traceability.technical.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t('modules.traceability.technical.epcis.title')}
                    </h3>
                    <ul className="space-y-2">
                      {t('modules.traceability.technical.epcis.list', { returnObjects: true }).map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t('modules.traceability.technical.analysis.title')}
                    </h3>
                    <ul className="space-y-2">
                      {t('modules.traceability.technical.analysis.list', { returnObjects: true }).map((item, index) => (
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('modules.traceability.visualization.title')}
                </h2>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img
                    src="https://images.unsplash.com/photo-1524669796045-89e93d33c20f?auto=format&fit=crop&w=1200&q=80"
                    alt="Supply Chain Map"
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-sm text-gray-600">{t('modules.traceability.visualization.map')}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-blue-50 p-8 rounded-lg"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('modules.traceability.why.title')}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t('modules.traceability.why.text')}
                </p>
                <Link
                  to="/"
                  state={{ scrollTo: 'contact' }}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primaryHover transition-colors duration-200"
                >
                  {t('modules.traceability.why.cta')}
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

export default Trazabilidad;