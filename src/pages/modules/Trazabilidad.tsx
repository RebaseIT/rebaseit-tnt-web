import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, GitBranch, Check, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Trazabilidad = () => {
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
              <GitBranch className="h-12 w-12 text-blue-600" />
              <h1 className="ml-4 text-3xl font-bold text-gray-900">Trazabilidad</h1>
            </div>

            <div className="prose max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Sistema integral de trazabilidad basado en el estándar EPCIS para seguimiento end-to-end 
                de productos en toda la cadena de suministro.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Características Principales</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Integración completa con EPCIS 2.0</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Seguimiento en tiempo real de productos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Historial completo de movimientos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Sistema de alertas automáticas</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Beneficios</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Visibilidad total de la cadena de suministro</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Detección temprana de problemas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Mejora en la eficiencia logística</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Reducción de pérdidas y mermas</span>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Capacidades EPCIS</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Captura de eventos en tiempo real
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Consultas avanzadas de eventos
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Integración con sensores IoT
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Geolocalización en tiempo real
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Análisis y Reportes</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Dashboards personalizables
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Análisis predictivo de rutas
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Reportes automatizados
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Exportación de datos
                      </li>
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Visualización de Trazabilidad</h2>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img
                    src="https://images.unsplash.com/photo-1524669796045-89e93d33c20f?auto=format&fit=crop&w=1200&q=80"
                    alt="Supply Chain Map"
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-sm text-gray-600">Mapa interactivo de la cadena de suministro con tracking en tiempo real</p>
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
                  Nuestra solución de trazabilidad EPCIS proporciona una visibilidad sin precedentes 
                  de su cadena de suministro, permitiendo decisiones informadas y mejoras operativas continuas.
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

export default Trazabilidad;