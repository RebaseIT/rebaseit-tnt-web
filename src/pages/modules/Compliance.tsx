import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, Check, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Compliance = () => {
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
              <Scale className="h-12 w-12 text-blue-600" />
              <h1 className="ml-4 text-3xl font-bold text-gray-900">Compliance</h1>
            </div>

            <div className="prose max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Sistema especializado de compliance para el sector farmacéutico con integración EMVO, 
                garantizando el cumplimiento normativo y la trazabilidad completa de productos.
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
                      <span className="text-gray-600">Integración completa con EMVO</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Cumplimiento de normativas farmacéuticas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Validación automática de procesos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Sistema de alertas de cumplimiento</span>
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
                      <span className="text-gray-600">Cumplimiento de FMD/DSCSA</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Reducción de riesgos regulatorios</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Automatización de procesos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Gestión eficiente de excepciones</span>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Verificación y Control</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Verificación en tiempo real
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Gestión de repositorios
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Control de serialización
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Reportes regulatorios
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Gestión de Cumplimiento</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Auditoría de procesos
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Trazabilidad de cambios
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Gestión de documentación
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Control de accesos
                      </li>
                    </ul>
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
                  Nuestra solución de compliance farmacéutico proporciona una plataforma robusta y 
                  confiable para garantizar el cumplimiento normativo, la trazabilidad y la seguridad 
                  en toda la cadena de suministro farmacéutica.
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

export default Compliance;