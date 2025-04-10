import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { Globe, Cpu, AlarmClockCheck} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const About = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      text: t('clients.comments.mariaGonzalez'),
      author: "María González",
      company: "Farmacéutica Global S.A."
    },
    {
      text: t('clients.comments.carlosRodriguez'),
      author: "Carlos Rodríguez",
      company: "Industrias Sostenibles"
    },
    {
      text: t('clients.comments.anaMartinez'),
      author: "Ana Martínez",
      company: "Logística Integral"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gradient mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 mr-2 text-primary" />
              <h3 className="text-xl font-semibold text-gradient">{t('about.experience.title')}</h3>
            </div>
            <p className="text-gray-600">
              {t('about.experience.text')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <Cpu className="h-6 w-6 mr-2 text-primary" />
              <h3 className="text-xl font-semibold text-gradient">{t('about.technology.title')}</h3>
            </div>
            <p className="text-gray-600">
              {t('about.technology.text')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <AlarmClockCheck className="h-6 w-6 mr-2 text-primary" />
              <h3 className="text-xl font-semibold text-gradient">{t('about.support.title')}</h3>
            </div>
            <p className="text-gray-600">
              {t('about.support.text')}
            </p>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="bg-secondaryHover px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-2xl font-bold text-gradient text-center mb-8">{t('clients.title')}</h3>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="max-w-3xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="text-center px-4 py-8">
                  <Star className="h-8 w-8 text-primary mx-auto mb-4" />
                  <blockquote className="text-xl text-gray-600 italic mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500 mb-2">{testimonial.company}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;