import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { modules } from '../../data/modules';

const moduleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const moduleItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const ModulesSection = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <section id="modules" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('modules.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('modules.subtitle')}
          </p>
        </motion.div>
        
        <motion.div
          variants={moduleContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {modules.map((module) => (
            <motion.div
              key={module.id}
              variants={moduleItemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col"
              onClick={() => navigate(`/modules/${module.id}`)}
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <module.icon className="h-8 w-8 text-blue-600" />
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {t(`modules.${module.id}.title`)}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {t(`modules.${module.id}.description`)}
                </p>
                <ul className="space-y-2">
                  {module.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <button className="w-full text-blue-600 font-medium hover:text-blue-700 focus:outline-none transition-colors duration-200">
                  {i18n.language === 'en' ? 'View details →' : 'Ver detalles →'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;