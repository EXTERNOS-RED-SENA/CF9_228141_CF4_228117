export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción al <i>Big Data</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y características del <i>Big Data</i>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia en el mundo actual',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Procesos asociados al <i>Big Data</i>',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de algoritmo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Variables y tipos de datos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Operadores',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Estructuras de control de flujo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Arreglos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Ficheros',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Funciones',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Lenguajes de Programación para analítica de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Introducción a R y Python',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Antecedentes y evolución',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Entornos de desarrollo integrado (IDE)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Sintaxis y estructura general',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Estándares de código',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Aplicaciones en analítica de datos',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Generación de reportes',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Analítica de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Introducción y conceptos básicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de análisis de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Procesos en la analítica de datos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Bases de Datos y SQL',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de bases de datos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Sentencias SQL fundamentales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Procesos ETL (Extracción, Transformación y Carga)',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Optimización de bases de datos',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Herramientas informáticas para analítica de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Instalación y configuración',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Clasificación y conversión de datos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Transformación y ordenamiento',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Importación y exportación de datos',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Uso de expresiones regulares',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Manejo de funciones avanzadas',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Limpieza basada en similitudes',
            hash: 't_6_7',
          },
          {
            numero: '6.8',
            titulo:
              'Licencias: <i>software</i> comercial vs. <i>software</i> libre',
            hash: 't_6_8',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Conclusiones y perspectivas futuras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Reflexiones finales y perspectivas futuras',
            hash: 't_7_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228117_CF04_DU_V2.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: '<i>Big Data</i>: conceptos, técnicas y herramientas',
    Description:
      'Este componente ofrece una introducción al mundo del <i>Big Data</i>, abarcando desde los fundamentos de programación hasta técnicas de análisis. Explora lenguajes como R y Python, analítica de datos, bases de datos relacionales y NoSQL, y herramientas informáticas esenciales. Dirigido a principiantes y técnicos, proporciona una fuente inicial en conceptos, métodos y aplicaciones prácticas del <i>Big Data</i>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
}
