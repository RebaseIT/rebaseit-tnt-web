import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { solutions } from '../../data/modules';

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

const SolutionsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="solutions" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gradient mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={moduleContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.name}
              variants={moduleItemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-gradient text-center mb-6">{solution.name}</h3>
                <p className="text-gray-600 mb-4">{t(`solutions.${solution.id}.description`)}</p>
                <p className="text-lg text-gray-700 mb-6">{t(`solutions.${solution.id}.price`)}</p>
                <ul className="space-y-4">
                  {t(`solutions.${solution.id}.features`, { returnObjects: true }).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block w-full bg-primary text-white text-center py-2 px-4 rounded-md hover:bg-primaryHover transition duration-200"
                >
                  {t('contact.cta')}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;