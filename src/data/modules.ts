import { QrCode, GitBranch, FileBarChart, Leaf, Scale, BarChart3 } from 'lucide-react';

export const modules = [
  {
    id: 'serialization',
    title: 'Serialización',
    icon: QrCode,
    description: 'Generación de códigos de series únicos y etiquetas bajo el estándar GS1.',
    features: [
      'Códigos seriales únicos',
      'Etiquetas GS1 compatibles',
      'Gestión de lotes',
      'Control de producción'
    ],
    details: {
      overview: 'Sistema avanzado de serialización que cumple con los estándares internacionales GS1.',
      benefits: [
        'Trazabilidad completa de productos',
        'Prevención de falsificaciones',
        'Optimización de inventario',
        'Cumplimiento normativo'
      ],
      specifications: [
        'Generación de códigos GS1-128',
        'Soporte para DataMatrix y QR',
        'Integración con sistemas ERP',
        'Gestión de agregación y desagregación'
      ]
    }
  },
  {
    id: 'traceability',
    title: 'Trazabilidad',
    icon: GitBranch,
    description: 'Seguimiento de productos desde el origen hasta su destino con EPCIS.',
    features: [
      'Integración EPCIS',
      'Seguimiento en tiempo real',
      'Historial completo',
      'Alertas automáticas'
    ],
    details: {
      overview: 'Sistema integral de trazabilidad basado en el estándar EPCIS para seguimiento end-to-end.',
      benefits: [
        'Visibilidad total de la cadena de suministro',
        'Detección temprana de problemas',
        'Mejora en la eficiencia logística',
        'Reducción de pérdidas'
      ],
      specifications: [
        'Compatible con EPCIS 2.0',
        'Captura de eventos en tiempo real',
        'Geolocalización de productos',
        'Análisis predictivo de rutas'
      ]
    }
  },
  {
    id: 'dpp',
    title: 'DPP',
    icon: FileBarChart,
    description: 'Digital Product Passport para análisis completo del ciclo de vida del producto.',
    features: [
      'Huella de carbono',
      'Origen de materiales',
      'Análisis de durabilidad',
      'Información de reciclaje'
    ],
    details: {
      overview: 'Pasaporte digital de productos que documenta todo el ciclo de vida y impacto ambiental.',
      benefits: [
        'Transparencia en la cadena de valor',
        'Cumplimiento de normativas ambientales',
        'Mejora en la sostenibilidad',
        'Información detallada para consumidores'
      ],
      specifications: [
        'Cálculo automático de huella de carbono',
        'Registro de materiales y componentes',
        'Evaluación de ciclo de vida',
        'Certificaciones ambientales'
      ]
    }
  },
  {
    id: 'esg',
    title: 'ESG',
    icon: Leaf,
    description: 'Gestión completa de Environmental, Social & Governance.',
    features: [
      'Certificados ambientales',
      'Métricas de equidad',
      'Sistema de denuncias',
      'Reportes personalizados'
    ],
    details: {
      overview: 'Solución integral para la gestión y reporte de indicadores ESG.',
      benefits: [
        'Mejora en la reputación corporativa',
        'Atracción de inversores responsables',
        'Cumplimiento regulatorio',
        'Gestión de riesgos ESG'
      ],
      specifications: [
        'Dashboard de métricas ESG',
        'Sistema de gestión documental',
        'Workflow de aprobaciones',
        'Generación automática de reportes'
      ]
    }
  },
  {
    id: 'compliance',
    title: 'Compliance',
    icon: Scale,
    description: 'Integración con EMVO para trazabilidad y normativas farmacéuticas.',
    features: [
      'Integración EMVO',
      'Normativas farmacéuticas',
      'Validación automática',
      'Alertas de cumplimiento'
    ],
    details: {
      overview: 'Sistema de compliance especializado en el sector farmacéutico y normativas EMVO.',
      benefits: [
        'Cumplimiento de FMD/DSCSA',
        'Reducción de riesgos regulatorios',
        'Automatización de procesos',
        'Gestión de excepciones'
      ],
      specifications: [
        'Verificación en tiempo real',
        'Gestión de repositorios',
        'Control de serialización',
        'Reportes regulatorios'
      ]
    }
  },
  {
    id: 'reporting',
    title: 'Reporting',
    icon: BarChart3,
    description: 'Métricas en tiempo real y sistema avanzado de alertas.',
    features: [
      'Dashboards personalizados',
      'Alertas en tiempo real',
      'Exportación de datos',
      'Análisis predictivo'
    ],
    details: {
      overview: 'Sistema avanzado de reporting y análisis de datos en tiempo real.',
      benefits: [
        'Toma de decisiones informada',
        'Optimización de procesos',
        'Identificación de tendencias',
        'Mejora continua'
      ],
      specifications: [
        'Dashboards personalizables',
        'Exportación en múltiples formatos',
        'Programación de reportes',
        'Análisis avanzado de datos'
      ]
    }
  }
];

export const solutions = [
  {
    name: 'T&T Light',
    description: 'Ideal para pequeñas industrias',
    price: 'Consultar precio',
    features: [
      'Hasta 5 millones de items/año',
      'Soporte por correo electrónico',
      '10 usuarios incluidos',
      'Acceso web básico',
      'Almacenamiento estándar',
      'Actualizaciones incluidas'
    ]
  },
  {
    name: 'T&T Full',
    description: 'Perfecto para empresas medianas',
    price: 'Consultar precio',
    features: [
      'Hasta 20 millones de items/año',
      'Soporte 24/7 por correo y teléfono',
      '20 usuarios incluidos',
      'Acceso web y API',
      'Gestión de permisos avanzados',
      'Infraestructura escalable',
      'Redundancia incluida'
    ]
  },
  {
    name: 'T&T Enterprise',
    description: 'Solución para grandes industrias',
    price: 'Consultar precio',
    features: [
      'Hasta 20.000 millones de items/año',
      'Soporte 24/7 prioritario',
      'Usuarios ilimitados',
      'API personalizada',
      'Personalización completa',
      'Infraestructura dedicada',
      'Alta disponibilidad',
      'Acuerdo de nivel de servicio (SLA)'
    ]
  }
];