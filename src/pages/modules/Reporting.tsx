import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BarChart3, Check, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Reporting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lineChartData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Productos Trazados',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Alertas Generadas',
        data: [1200, 1900, 1500, 2500, 2200, 3000],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ['Farmacéutico', 'Alimentario', 'Cosmético', 'Textil', 'Automotriz'],
    datasets: [
      {
        label: 'Cumplimiento por Sector (%)',
        data: [98, 92, 88, 95, 89],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(99, 102, 241, 0.8)',
          'rgba(236, 72, 153, 0.8)',
        ],
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Completo', 'En Proceso', 'Pendiente', 'Con Alertas'],
    datasets: [
      {
        data: [63, 22, 10, 5],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

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
              <BarChart3 className="h-12 w-12 text-blue-600" />
              <h1 className="ml-4 text-3xl font-bold text-gray-900">Reporting</h1>
            </div>

            <div className="prose max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Sistema avanzado de reporting y análisis de datos en tiempo real, 
                permitiendo la toma de decisiones informadas y la optimización de procesos.
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
                      <span className="text-gray-600">Dashboards personalizados</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Alertas en tiempo real</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Exportación de datos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Análisis predictivo</span>
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
                      <span className="text-gray-600">Toma de decisiones informada</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Optimización de procesos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Identificación de tendencias</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Mejora continua</span>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Visualización de Datos</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Gráficos interactivos
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Mapas de calor
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Tablas dinámicas
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        KPIs en tiempo real
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Integración y Exportación</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Conexión con bases de datos
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        API para integración
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Exportación en Excel, PDF, CSV
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Programación de reportes
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              
              {/* Charts Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">Dashboard de ejemplo</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tendencias de Trazabilidad</h3>
                    <Line data={lineChartData} options={chartOptions} />
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Cumplimiento por Sector</h3>
                    <Bar data={barChartData} options={chartOptions} />
                  </div>
                </div>
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Estado de Procesos</h3>
                  <Doughnut data={doughnutChartData} options={chartOptions} />
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
                  Nuestra solución de reporting proporciona una plataforma completa para analizar sus datos, 
                  identificar tendencias y optimizar sus procesos, permitiendo una mejora continua en su negocio.
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

export default Reporting;