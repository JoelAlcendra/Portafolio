export type SkillLevel = 'applied' | 'deepening' | 'studied';

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'specialized';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  levelLabel: string;
  description: string;
  iconName: string;
  projectsUsedIn: string[]; // Project IDs
}

export type ProjectStatus = 
  | 'active' // Activo / Proyecto principal
  | 'in_development' // En desarrollo
  | 'research_planning' // Investigación académica en planificación
  | 'concept'; // Concepto / Especificación

export interface Project {
  id: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  statusLabel: string;
  category: 'Fullstack' | 'Backend & DB' | 'Ciberseguridad' | 'Arquitectura';
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  repoUrl?: string;
  isRepoPending?: boolean;
  demoUrl?: string;
  isDemoPending?: boolean;
  featured: boolean;
  architectureNotes?: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  transferableSkills: string[];
  isEditableNote?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  details: string;
  isCurrent?: boolean;
}

export interface ContactInfo {
  email: string;
  location: string;
  linkedInUrl: string;
  githubUrl: string;
  englishLevel: string;
  availability: string;
}

export interface Milestone {
  period: string;
  title: string;
  description: string;
  status: 'completed' | 'in_progress' | 'planned';
}
