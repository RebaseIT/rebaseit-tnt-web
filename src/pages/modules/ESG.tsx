import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Leaf, Check, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ESG = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="mb-8 text-blue-600 hover:text-blue-700 font-medium flex items-center"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver al inicio
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <Leaf className="h-12 w-12 text-blue-600" />
              <h1 className="ml-4 text-3xl font-bold text-gray-900">ESG (Environmental, Social & Governance)</h1>
            </div>

            <div className="prose max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Solución integral para la gestión y reporte de indicadores ESG, permitiendo a las empresas 
                medir y gestionar su impacto ambiental, social y de gobernanza con transparencia y eficacia.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-green-50 p-6 rounded-lg"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Environmental</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Certificación Deforestation Free</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Gestión de certificados de reciclaje</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Medición de huella de carbono</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Reportes de impacto ambiental</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-blue-50 p-6 rounded-lg"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Social</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Sistema de encuestas anónimas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Métricas de equidad de género</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Indicadores de accesibilidad</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Análisis de inclusión laboral</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-purple-50 p-6 rounded-lg"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Governance</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Sistema de denuncias anónimas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Reportes personalizados</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Gestión de políticas corporativas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Seguimiento de cumplimiento</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Especificaciones Técnicas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Gestión de Datos ESG</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Dashboard de métricas ESG
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Sistema de gestión documental
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Workflow de aprobaciones
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Generación automática de reportes
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Monitoreo y Cumplimiento</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Alertas de cumplimiento ESG
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Seguimiento de objetivos
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Análisis de tendencias
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Benchmarking sectorial
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Employee Surveys and Certificates Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Certificaciones y Encuestas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <img
                      src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&q=80"
                      alt="Environmental Certificates"
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600">Gestión de certificados ambientales y de sostenibilidad</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <img
                      src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80"
                      alt="Anonymous Survey System"
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600">Sistema de encuestas anónimas para empleados</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <img
                      src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
                      alt="Gender Equity Analytics"
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600">Dashboard de métricas de equidad de género</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <img
                      src="https://images.unsplash.com/photo-1553484771-047a44eee27a?auto=format&fit=crop&w=800&q=80"
                      alt="Anonymous Reporting System"
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600">Sistema seguro de denuncias anónimas</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-blue-50 p-8 rounded-lg"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">¿Por qué elegir nuestra solución?</h2>
                <p className="text-gray-600 mb-6">
                  Nuestra solución ESG proporciona una plataforma integral para gestionar y reportar sus 
                  indicadores ambientales, sociales y de gobernanza, facilitando la transparencia y el 
                  cumplimiento de las expectativas de todos los stakeholders.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Solicitar una demo
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