import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
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
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="ml-3 text-3xl font-bold text-gray-900">
              {t('privacy.title')}
            </h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              {t('privacy.intro')}
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {t('privacy.collection.title')}
            </h2>
            <p className="text-gray-600 mb-4">
              {t('privacy.collection.description')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>{t('privacy.collection.items.register')}</li>
              <li>{t('privacy.collection.items.use')}</li>
              <li>{t('privacy.collection.items.support')}</li>
              <li>{t('privacy.collection.items.research')}</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {t('privacy.usage.title')}
            </h2>
            <p className="text-gray-600 mb-4">
              {t('privacy.usage.description')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>{t('privacy.usage.items.provide')}</li>
              <li>{t('privacy.usage.items.improve')}</li>
              <li>{t('privacy.usage.items.communicate')}</li>
              <li>{t('privacy.usage.items.security')}</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              {t('privacy.protection.title')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('privacy.protection.description')}
            </p>

            <p className="text-sm text-gray-500 mt-8">
              {t('privacy.lastUpdated')}: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
