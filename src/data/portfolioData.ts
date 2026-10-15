import type { Skill, Project, WorkExperience, Education, ContactInfo, Milestone } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: 'Joel David Alcendra Carballo',
  shortName: 'Joel Alcendra',
  title: 'Ingeniero de Sistemas',
  subTitle: 'Desarrollo de Software • Backend & APIs • Arquitectura de Soluciones',
  heroTagline: 'ENGINEERED TO CREATE',
  bioBrief: 'Estudiante de octavo semestre de Ingeniería de Sistemas en la Universidad Libre. Enfocado en construir software escalable, modular y confiable, uniendo pensamiento analítico con criterio de ingeniería.',
  location: 'Barranquilla, Colombia',
  englishLevel: 'B2 (Intermedio Alto)',
  currentSemester: '8° Semestre',
  availabilityStatus: 'Disponible para pasantías y proyectos tech',
  availabilityColor: 'emerald',
  systemPhilosophy: 'Concibo el código como la materialización de un diseño arquitectónico riguroso: cada estructura de datos, cada endpoint y cada interfaz responde a una necesidad analítica real.',
};

export const CONTACT_INFO: ContactInfo = {
  email: 'joelalcendra11@gmail.com', // [CAMPO EDITABLE: Reemplazar con correo definitivo]
  location: 'Barranquilla, Colombia',
  linkedInUrl: 'https://www.linkedin.com/in/joel-alcendra-4601102b4', // [CAMPO EDITABLE: Reemplazar con URL de perfil]
  githubUrl: 'https://github.com/joelalcendra', // [CAMPO EDITABLE: Reemplazar con usuario de GitHub]
  englishLevel: 'B2 (Marco Común Europeo)',
  availability: 'Pasantías / Roles Junior / Desarrollo Colaborativo',
};

export const SOFT_SKILLS = [
  {
    title: 'Resolución Analítica',
    description: 'Descomposición sistemática de problemas complejos en requerimientos técnicos viables y medibles.',
    icon: 'Brain',
  },
  {
    title: 'Trabajo en Equipo',
    description: 'Comunicación transparente, sincronización de flujos con control de versiones y empatía técnica.',
    icon: 'Users',
  },
  {
    title: 'Adaptabilidad & Agilidad',
    description: 'Rápida asimilación de nuevos frameworks, estándares de industria y dinámicas operativas.',
    icon: 'Zap',
  },
  {
    title: 'Aprendizaje Continuo',
    description: 'Curiosidad activa orientada a profundizar en arquitectura, ciberseguridad y buenas prácticas.',
    icon: 'BookOpen',
  },
  {
    title: 'Compromiso con la Calidad',
    description: 'Atención al detalle en la estructura del código, seguridad de datos y experiencia de usuario.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Pensamiento Crítico',
    description: 'Evaluación consciente de compensaciones técnicas (trade-offs) entre rendimiento, mantenibilidad y tiempo.',
    icon: 'GitBranch',
  },
];

export const SKILLS_DATA: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 'applied',
    levelLabel: 'Aplicada en proyectos',
    description: 'Desarrollo de interfaces declarativas basadas en componentes, manejo de estado y consumo de APIs.',
    iconName: 'Code',
    projectsUsedIn: ['foodmatch'],
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 'applied',
    levelLabel: 'Aplicada en proyectos',
    description: 'Fundamentos sólidos de asincronía, manipulación del DOM, programación funcional y estándares modernos.',
    iconName: 'FileCode',
    projectsUsedIn: ['foodmatch', 'webmiel'],
  },
  {
    id: 'html-css',
    name: 'HTML5 & CSS3',
    category: 'frontend',
    level: 'applied',
    levelLabel: 'Aplicada en proyectos',
    description: 'Maquetación semántica, diseño responsivo, Flexbox, CSS Grid y accesibilidad web.',
    iconName: 'Layout',
    projectsUsedIn: ['foodmatch', 'webmiel'],
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'frontend',
    level: 'studied',
    levelLabel: 'Estudiada / Fundamentos',
    description: 'Conceptos de desarrollo multiplataforma, widgets reactivos y patrones de diseño móvil.',
    iconName: 'Smartphone',
    projectsUsedIn: [],
  },

  // Backend
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 'applied',
    levelLabel: 'Aplicada en proyectos',
    description: 'Lenguaje principal para scripts, lógica de negocio en backend y manipulación estructurada de datos.',
    iconName: 'Terminal',
    projectsUsedIn: ['webmiel', 'foodmatch'],
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'backend',
    level: 'applied',
    levelLabel: 'Aplicada en proyectos',
    description: 'Creación de microservicios, enrutamiento ligero, middleware y arquitectura modular con Blueprints.',
    iconName: 'Server',
    projectsUsedIn: ['webmiel'],
  },
  {
    id: 'rest-api',
    name: 'Diseño de API REST',
    category: 'backend',
    level: 'deepening',
    levelLabel: 'En profundización',
    description: 'Construcción y consumo de servicios HTTP, serialización JSON, códigos de estado y autenticación.',
    iconName: 'Globe',
    projectsUsedIn: ['webmiel', 'foodmatch'],
  },

  // Bases de datos
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'applied',
    levelLabel: 'Aplicada en proyectos',
    description: 'Modelado relacional, consultas SQL, integridad referencial y restricciones de datos.',
    iconName: 'Database',
    projectsUsedIn: ['webmiel'],
  },
  {
    id: 'sqlalchemy',
    name: 'SQLAlchemy',
    category: 'database',
    level: 'applied',
    levelLabel: 'Aplicada en proyectos',
    description: 'Mapeo objeto-relacional (ORM), migraciones de esquemas y optimización de consultas en Python.',
    iconName: 'Layers',
    projectsUsedIn: ['webmiel'],
  },

  // Herramientas
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'tools',
    level: 'applied',
    levelLabel: 'Aplicada en proyectos',
    description: 'Control de versiones distribuido, ramas, pull requests y flujo colaborativo de desarrollo.',
    iconName: 'GitBranch',
    projectsUsedIn: ['foodmatch', 'webmiel'],
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'tools',
    level: 'studied',
    levelLabel: 'Estudiada / Fundamentos',
    description: 'Conceptos de contenedores, Dockerfiles, imágenes y aislamiento de entornos de ejecución.',
    iconName: 'Box',
    projectsUsedIn: [],
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    level: 'applied',
    levelLabel: 'Aplicada en proyectos',
    description: 'Pruebas de endpoints REST, inspección de payloads, variables de entorno y documentación de APIs.',
    iconName: 'Send',
    projectsUsedIn: ['webmiel', 'foodmatch'],
  },

  // Áreas especializadas
  {
    id: 'cybersecurity',
    name: 'Fundamentos de Ciberseguridad',
    category: 'specialized',
    level: 'deepening',
    levelLabel: 'En profundización',
    description: 'Análisis de vulnerabilidades, higiene digital, principios OWASP y evaluación de riesgos.',
    iconName: 'Shield',
    projectsUsedIn: [],
  },
  {
    id: 'testing',
    name: 'Pruebas de Software',
    category: 'specialized',
    level: 'studied',
    levelLabel: 'Estudiada / Fundamentos',
    description: 'Pruebas unitarias, validación de reglas de negocio y detección temprana de regresiones.',
    iconName: 'CheckCircle',
    projectsUsedIn: [],
  },
  {
    id: 'project-mgmt',
    name: 'Gestión de Proyectos',
    category: 'specialized',
    level: 'studied',
    levelLabel: 'Estudiada / Fundamentos',
    description: 'Metodologías ágiles, estimación de requerimientos técnicos y seguimiento de hitos de entrega.',
    iconName: 'Compass',
    projectsUsedIn: [],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'foodmatch',
    title: 'FoodMatch',
    tagline: 'Plataforma inteligente de recetas y coincidencias por ingredientes',
    status: 'active',
    statusLabel: 'En desarrollo activo (Proyecto principal)',
    category: 'Fullstack',
    featured: true,
    description: 'Aplicación fullstack concebida para simplificar la cocina diaria mediante un algoritmo de coincidencia de ingredientes disponibles, filtros nutricionales y almacenamiento de favoritos.',
    problem: 'El desperdicio recurrente de alimentos en hogares y la fricción que experimentan los usuarios al no saber qué preparar con los ingredientes que ya tienen a la mano.',
    solution: 'Un motor de búsqueda inversa basado en ingredientes disponibles, con filtros por tiempo de preparación y preferencias, respaldado por un catálogo relacional y persistencia de favoritos.',
    technologies: ['React', 'JavaScript', 'Python / REST API', 'CSS Modular', 'Postman'],
    features: [
      'Búsqueda y filtrado dinámico de recetas por ingredientes en despensa',
      'Gestión de recetas favoritas del usuario',
      'Diseño responsivo centrado en la usabilidad en cocina móvil',
      'Arquitectura desacoplada frontend/backend mediante API REST',
    ],
    architectureNotes: 'Frontend reactivo desacoplado que consume servicios REST organizados por endpoints de catálogo y preferencias.',
    isRepoPending: true,
    repoUrl: '#',
    isDemoPending: true,
    demoUrl: '#',
  },
  {
    id: 'webmiel',
    title: 'WebMiel',
    tagline: 'Plataforma e-commerce especializada en productos apícolas naturales',
    status: 'in_development',
    statusLabel: 'Prototipo / En desarrollo',
    category: 'Backend & DB',
    featured: true,
    description: 'Solución web de comercio electrónico orientada a la comercialización directa de miel y derivados apícolas, con arquitectura backend robusta basada en microframework y base de datos relacional.',
    problem: 'Productores locales de miel con canales de venta desarticulados, falta de control digital de inventario y pedidos.',
    solution: 'Plataforma web con catálogo estructurado, modelado relacional en PostgreSQL para productos, variantes y pedidos gestionados mediante SQLAlchemy.',
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'HTML5/CSS3'],
    features: [
      'Modelado de base de datos relacional para catálogo y órdenes',
      'Operaciones CRUD completas mediante ORM SQLAlchemy',
      'Enrutamiento modular con Flask Blueprints',
      'Integridad referencial y validación de tipos de datos',
    ],
    architectureNotes: 'Backend estructurado bajo patrón MVC con Flask y SQLAlchemy interactuando con PostgreSQL para persistencia consistente.',
    isRepoPending: true,
    repoUrl: '#',
    isDemoPending: true,
    demoUrl: '#',
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'hgs-chat-rep',
    role: 'Chat and Phone Agent Representative',
    company: 'Hinduja Global Solutions (HGS)',
    period: '2025 – 2026',
    location: 'Barranquilla, Colombia (Modalidad en sitio)',
    type: 'Jornada Completa / Aprox. 1 año',
    description: 'Atención y soporte operativo a través de canales digitales en tiempo real, resolviendo requerimientos de usuarios bajo rigurosos acuerdos de nivel de servicio (SLAs) e interactuando con plataformas corporativas.',
    responsibilities: [
      'Resolución de casos y consultas técnicas/operativas en tiempo real mediante chat multisesión.',
      'Documentación precisa de incidencias en sistemas de tickets y bases de conocimiento internas.',
      'Aplicación estricta de protocolos de seguridad de la información y privacidad de datos del cliente.',
      'Trabajo bajo métricas operativas de calidad (CSAT), tiempo de respuesta (FCR) y adherencia a procesos.',
    ],
    transferableSkills: [
      'Resolución sistemática de problemas bajo presión y tiempo acotado.',
      'Comunicación técnica asertiva y empatía con el usuario final.',
      'Adaptabilidad ágil a flujos operativos y cambios en sistemas corporativos.',
      'Rigor en el cumplimiento de políticas de seguridad y procedimientos estándar.',
    ],
    isEditableNote: 'Responsabilidades y métricas específicas sujetas a complementación o edición conforme avance la trayectoria.',
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'unilibre-systems',
    degree: 'Ingeniería de Sistemas',
    institution: 'Universidad Libre - Seccional Barranquilla',
    period: '2022 – En curso (Actualmente 8° Semestre)',
    status: 'En formación académica avanzada',
    details: 'Formación integral en ciencias de la computación, arquitectura de software, bases de datos relacionales y no relacionales, redes, sistemas operativos, ingeniería de requisitos y ciberseguridad.',
    isCurrent: true,
  },
  {
    id: 'jesus-maestro-tech',
    degree: 'Bachiller Técnico',
    institution: 'Institución Educativa Jesús Maestro',
    period: 'Culminado con formación técnica',
    status: 'Completado',
    details: 'Bases técnicas tempranas en lógica computacional, razonamiento matemático y proyectos formativos aplicados.',
    isCurrent: false,
  },
];

export const ROADMAP_DATA: Milestone[] = [
  {
    period: 'Etapa Inicial',
    title: 'Fundamentos Técnicos & Lógica',
    description: 'Graduación como Bachiller Técnico y consolidación de pensamiento matemático y algorítmico.',
    status: 'completed',
  },
  {
    period: '2022 – 2024',
    title: 'Ingeniería de Sistemas & Proyectos Base',
    description: 'Ciclo básico e intermedio universitario: estructuras de datos, programación orientada a objetos, bases de datos relacionales y primeros prototipos web.',
    status: 'completed',
  },
  {
    period: '2025 – 2026',
    title: 'Desempeño Operativo & Experiencia HGS',
    description: 'Fortalecimiento de habilidades blandas, resolución de incidencias en tiempo real y comunicación corporativa en Hinduja Global Solutions.',
    status: 'completed',
  },
  {
    period: 'Presente (8° Semestre)',
    title: 'Especialización Práctica & Portafolio',
    description: 'Profundización en desarrollo fullstack (React, Python/Flask), diseño de APIs REST, buenas prácticas de ciberseguridad y construcción de proyectos modulares.',
    status: 'in_progress',
  },
  {
    period: 'Siguiente Paso',
    title: 'Pasantía Profesional & Soluciones Cloud',
    description: 'Inserción en equipo de ingeniería de software para aplicar conocimientos en entornos de producción, arquitecturas distribuidas y CI/CD.',
    status: 'planned',
  },
];

export const TERMINAL_COMMANDS_HELP = [
  { cmd: 'help', desc: 'Muestra la lista de comandos disponibles' },
  { cmd: 'about', desc: 'Resumen del perfil y filosofía de ingeniería' },
  { cmd: 'skills', desc: 'Despliega la matriz de habilidades técnicas' },
  { cmd: 'projects', desc: 'Lista los proyectos y su estado real' },
  { cmd: 'experience', desc: 'Detalla la trayectoria en HGS y habilidades transferibles' },
  { cmd: 'education', desc: 'Información académica (Universidad Libre & bachiller)' },
  { cmd: 'contact', desc: 'Muestra canales de contacto y redes' },
  { cmd: 'status', desc: 'Estado del sistema y disponibilidad' },
  { cmd: 'cv', desc: 'Abre el visualizador de Hoja de Vida / Currículum' },
  { cmd: 'clear', desc: 'Limpia la pantalla de la terminal' },
];
