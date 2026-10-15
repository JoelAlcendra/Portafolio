import React, { useState } from 'react';
import { 
  GitBranch, 
  ArrowUpRight, 
  Clock, 
  Sparkles,
  UtensilsCrossed,
  ShoppingBag
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../types/portfolio';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos los proyectos (2)' },
    { id: 'Fullstack', label: 'Fullstack' },
    { id: 'Backend & DB', label: 'Backend & DB' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedFilter === 'all') return true;
    return proj.category === selectedFilter;
  });

  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-blue-600 font-bold">
          <span>03 // CATÁLOGO DE SOLUCIONES Y PROYECTOS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display-title">
          Arquitectura aplicada a problemas reales
        </h2>
        <p className="text-slate-600 max-w-2xl text-base">
          Mis proyectos actuales: <strong>FoodMatch</strong> como solución principal en desarrollo y <strong>WebMiel</strong> como plataforma e-commerce con backend relacional en PostgreSQL.
        </p>
      </div>

      {/* Progressive Growth Callout */}
      <div className="mb-8 p-4 rounded-2xl bg-blue-50/80 border border-blue-200 flex items-start sm:items-center gap-3 shadow-xs">
        <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-xs sm:text-sm text-blue-950 leading-relaxed font-medium">
          <strong>Enfoque de calidad:</strong> Priorizo la profundidad técnica y robustez de estos dos proyectos centrales, iterando su código, base de datos y arquitectura de forma continua.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Filtrar proyectos">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedFilter(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedFilter === cat.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 group relative overflow-hidden"
          >
            {/* Top Bar with Status and Category */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                {project.status === 'active' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {project.statusLabel}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    {project.statusLabel}
                  </span>
                )}

                <span className="text-xs font-mono-code font-bold text-slate-600 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Visual Architectural Simulation Preview */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-code text-slate-600 pb-2 border-b border-slate-200">
                  <span className="flex items-center gap-1.5 font-bold text-slate-800">
                    {project.id === 'foodmatch' ? (
                      <UtensilsCrossed className="w-4 h-4 text-orange-500" />
                    ) : (
                      <ShoppingBag className="w-4 h-4 text-amber-500" />
                    )}
                    <span>{project.id === 'foodmatch' ? 'foodmatch_engine.core' : 'webmiel_backend.pg'}</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white text-blue-600 font-bold border border-slate-200">
                    {project.category}
                  </span>
                </div>

                <div className="text-xs text-slate-600 font-sans space-y-1 pt-1">
                  {project.id === 'foodmatch' ? (
                    <div className="flex items-center justify-between font-mono-code text-[11px] text-slate-600">
                      <span>Frontend: React UI</span>
                      <span>⇄</span>
                      <span className="text-blue-600 font-semibold">REST API</span>
                      <span>⇄</span>
                      <span>Filtro Ingredientes</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between font-mono-code text-[11px] text-slate-600">
                      <span>Flask Blueprints</span>
                      <span>⇄</span>
                      <span className="text-blue-600 font-semibold">SQLAlchemy</span>
                      <span>⇄</span>
                      <span>PostgreSQL DB</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="p-2 rounded-xl text-slate-600 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors"
                    aria-label={`Ver detalles técnicos de ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </h3>
                <p className="text-sm text-slate-700 font-semibold mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Problem & Solution Snippet */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 py-3 border-y border-slate-100">
                <p>
                  <strong className="text-slate-900 font-semibold">Problema:</strong> {project.problem}
                </p>
                <p>
                  <strong className="text-blue-600 font-semibold">Solución:</strong> {project.solution}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono-code font-medium bg-slate-100 text-slate-800 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Card Footer Actions */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => onSelectProject(project)}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
              >
                <span>Explorar arquitectura completa</span>
                <span>▸</span>
              </button>

              <div className="flex items-center gap-2 text-xs">
                {project.isRepoPending ? (
                  <span className="text-slate-600 font-mono-code flex items-center gap-1 text-[11px] font-medium">
                    <GitBranch className="w-3.5 h-3.5 text-slate-600" />
                    Repo en preparación
                  </span>
                ) : (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-700 hover:text-blue-600 font-mono-code flex items-center gap-1 font-semibold"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                )}
              </div>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
};
