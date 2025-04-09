import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Privacy = () => {
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
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-3xl font-bold text-gray-900">Política de Privacidad</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              En Rebase IT T&T, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política describe cómo recopilamos, 
              usamos y protegemos su información personal.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Recopilación de Información</h2>
            <p className="text-gray-600 mb-4">
              Recopilamos información que usted nos proporciona directamente cuando:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Se registra en nuestra plataforma</li>
              <li>Utiliza nuestros servicios</li>
              <li>Se comunica con nuestro equipo de soporte</li>
              <li>Participa en encuestas o investigaciones</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Uso de la Información</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos su información para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Proporcionar y mantener nuestros servicios</li>
              <li>Mejorar y personalizar su experiencia</li>
              <li>Comunicarnos con usted sobre actualizaciones o cambios</li>
              <li>Proteger la seguridad de nuestros usuarios</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Protección de Datos</h2>
            <p className="text-gray-600 mb-6">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales 
              contra el acceso no autorizado, la modificación, divulgación o destrucción.
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

export default Privacy;