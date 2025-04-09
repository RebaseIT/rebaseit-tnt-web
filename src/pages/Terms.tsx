import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';

const Terms = () => {
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
            <h1 className="ml-3 text-3xl font-bold text-gray-900">Términos y Condiciones</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Al utilizar los servicios de Rebase T&T, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Uso del Servicio</h2>
            <p className="text-gray-600 mb-4">
              Nuestros servicios están diseñados para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Proporcionar soluciones de trazabilidad empresarial</li>
              <li>Facilitar el cumplimiento normativo</li>
              <li>Mejorar la visibilidad de la cadena de suministro</li>
              <li>Optimizar procesos operativos</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Responsabilidades del Usuario</h2>
            <p className="text-gray-600 mb-4">
              Como usuario de nuestros servicios, usted se compromete a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Proporcionar información precisa y actualizada</li>
              <li>Mantener la confidencialidad de sus credenciales</li>
              <li>Utilizar el servicio de manera ética y legal</li>
              <li>Respetar los derechos de propiedad intelectual</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Limitación de Responsabilidad</h2>
            <p className="text-gray-600 mb-6">
              Rebase IT T&T no será responsable por daños indirectos, incidentales o consecuentes que surjan del uso 
              o la imposibilidad de usar nuestros servicios.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;