import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const testimonials = [
  {
    text: "La implementación de TNT ha revolucionado nuestra cadena de suministro. La trazabilidad es ahora más precisa que nunca.",
    author: "María González",
    company: "Farmacéutica Global S.A."
  },
  {
    text: "El módulo ESG nos ha ayudado enormemente a mejorar nuestro reporting de sostenibilidad y cumplimiento normativo.",
    author: "Carlos Rodríguez",
    company: "Industrias Sostenibles"
  },
  {
    text: "La facilidad de uso y la potencia de los dashboards de reporting han superado todas nuestras expectativas.",
    author: "Ana Martínez",
    company: "Logística Integral"
  }
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transformando la Trazabilidad Industrial
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Rebase IT T&T es una plataforma integral que revoluciona la forma en que las empresas 
            gestionan la trazabilidad, el cumplimiento normativo y la sostenibilidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Experiencia Global</h3>
            <p className="text-gray-600">
              Más de 10 años de experiencia implementando soluciones de trazabilidad en múltiples industrias.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tecnología Avanzada</h3>
            <p className="text-gray-600">
              Utilizamos las últimas tecnologías y estándares para garantizar soluciones robustas y escalables.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Soporte 24/7</h3>
            <p className="text-gray-600">
              Equipo de soporte dedicado disponible 24/7 para garantizar la continuidad de sus operaciones.
            </p>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Lo que dicen nuestros clientes</h3>
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
                  <Star className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                  <blockquote className="text-xl text-gray-600 italic mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.company}</div>
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