import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="flex items-center mb-8">
            <ScrollText className="h-8 w-8 text-primary" />
            <h1 className="ml-3 text-3xl font-bold text-gray-900">
              {t('terms.title')}
            </h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              {t('terms.intro')}
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {t('terms.usage.title')}
            </h2>
            <p className="text-gray-600 mb-4">
              {t('terms.usage.description')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>{t('terms.usage.items.traceability')}</li>
              <li>{t('terms.usage.items.compliance')}</li>
              <li>{t('terms.usage.items.visibility')}</li>
              <li>{t('terms.usage.items.optimization')}</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {t('terms.responsibilities.title')}
            </h2>
            <p className="text-gray-600 mb-4">
              {t('terms.responsibilities.description')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>{t('terms.responsibilities.items.accurateInfo')}</li>
              <li>{t('terms.responsibilities.items.confidentiality')}</li>
              <li>{t('terms.responsibilities.items.ethicalUse')}</li>
              <li>{t('terms.responsibilities.items.intellectualProperty')}</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {t('terms.limitation.title')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('terms.limitation.description')}
            </p>

            <p className="text-sm text-gray-500 mt-8">
              {t('terms.lastUpdated')}: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;