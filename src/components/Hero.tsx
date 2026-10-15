import React from 'react';
import {
  Terminal,
  ArrowRight,
  FileText,
  MapPin,
  GraduationCap,
  Sparkles,
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Interactive3DCore } from './Interactive3DCore';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenTerminal,
  onOpenResume,
  onExploreProjects,
}) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column: Hero Content & Identity */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">

          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.availabilityStatus}</span>
          </div>

          {/* Creative Concept & Name */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-blue-600 font-bold">
              <span className="w-8 h-[2px] bg-blue-600" />
              <span>{PERSONAL_INFO.heroTagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-display-title leading-[1.1]">
              Joel David <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Alcendra Carballo
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-slate-700 mt-1 flex items-center gap-2 flex-wrap">
              <span>{PERSONAL_INFO.title}</span>
              <span className="text-slate-300">•</span>
              <span className="text-blue-600 font-mono-code text-sm px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                Universidad Libre ({PERSONAL_INFO.currentSemester})
              </span>
            </p>
          </div>

          {/* Professional Narrative */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
            Concibo el desarrollo de software desde el rigor de la ingeniería de sistemas: analizando problemas de negocio, diseñando arquitecturas limpias y programando soluciones web robustas con <strong className="text-slate-900 font-semibold">React</strong>, <strong className="text-slate-900 font-semibold">Python/Flask</strong> y <strong className="text-slate-900 font-semibold">PostgreSQL</strong>.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-lg py-3 border-y border-slate-200">
            <div>
              <div className="text-xs font-mono-code text-slate-600">Ubicación</div>
              <div className="text-sm font-bold text-slate-800 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                Barranquilla
              </div>
            </div>
            <div>
              <div className="text-xs font-mono-code text-slate-600">Semestre</div>
              <div className="text-sm font-bold text-slate-800 mt-0.5 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                8° Semestre
              </div>
            </div>
            <div>
              <div className="text-xs font-mono-code text-slate-600">Idioma</div>
              <div className="text-sm font-bold text-slate-800 mt-0.5 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Inglés B2
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2 w-full">
            <button
              onClick={onExploreProjects}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/25 group"
            >
              <Layers className="w-4 h-4" />
              <span>Ver Proyectos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono-code text-sm transition-all shadow-md group"
            >
              <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>Abrir Terminal CLI</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-sm font-semibold transition-all shadow-xs"
            >
              <FileText className="w-4 h-4 text-slate-600" />
              <span>Hoja de Vida (PDF)</span>
            </button>
          </div>

        </div>

        {/* Right Column: Interactive 3D WebGL Architectural Core */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="w-full relative flex items-center justify-center">
            {/* Real Three.js 3D Core with mouse tracking */}
            <Interactive3DCore />
          </div>

          {/* Micro Interactive Hint */}
          <div className="mt-4 flex items-center gap-2 text-xs font-mono-code text-slate-600 bg-white/80 px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
            <span>Modelo 3D interactivo • Pasa el cursor para interactuar</span>
          </div>
        </div>

      </div>
    </section>
  );
};
