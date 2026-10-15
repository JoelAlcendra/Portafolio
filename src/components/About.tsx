import React from 'react';
import {
  Brain,
  Users,
  Zap,
  BookOpen,
  ShieldCheck,
  GitBranch,
  CheckCircle,
  GraduationCap,
  Languages,
  MapPin
} from 'lucide-react';
import { SOFT_SKILLS } from '../data/portfolioData';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-5 h-5 text-blue-600" />,
    Users: <Users className="w-5 h-5 text-indigo-600" />,
    Zap: <Zap className="w-5 h-5 text-amber-600" />,
    BookOpen: <BookOpen className="w-5 h-5 text-emerald-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-purple-600" />,
    GitBranch: <GitBranch className="w-5 h-5 text-sky-600" />,
  };

  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-blue-600 font-bold">
          <span>01 // FILOSOFÍA Y PERFIL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display-title">
          De la abstracción analítica a soluciones estructuradas
        </h2>
        <p className="text-slate-600 max-w-2xl text-base">
          Cómo entiendo la ingeniería de sistemas, cómo resuelvo problemas técnicos y qué valor aporto a los equipos de desarrollo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* Narrative & Engineering Mindset */}
        <div className="lg:col-span-7 space-y-6 text-slate-700 text-base leading-relaxed">
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900 font-display-title flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              ¿Quién soy y cuál es mi perspectiva?
            </h3>
            <p>
              Soy <strong className="text-slate-900">Joel David Alcendra Carballo</strong>, estudiante de <strong className="text-slate-900">octavo semestre de Ingeniería de Sistemas</strong> en la <strong className="text-slate-900">Universidad Libre</strong> (Barranquilla, Colombia).
            </p>
            <p>
              Para mí, la ingeniería de sistemas trasciende la escritura apresurada de código: consiste en <strong className="text-slate-900">comprender la naturaleza del problema antes de plantear una arquitectura</strong>. Me enfoco especialmente en la lógica backend escalable, el modelado relacional consistente en bases de datos y la creación de interfaces web modernas y accesibles.
            </p>
            <p className="text-[14px] text-blue-600 ">
              Mi objetivo profesional es aportar soluciones de valor en equipos de desarrollo de software, resolviendo incidencias reales y evolucionando continuamente hacia la arquitectura de sistemas distribuidos y la ciberseguridad aplicada.
            </p>

          </div>

          {/* Context Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <GraduationCap className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <div className="text-xs text-slate-600 font-mono-code">Universidad</div>
                <div className="text-sm font-bold text-slate-900">Universidad Libre</div>
                <div className="text-[11px] text-blue-600 font-semibold">8° Semestre</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <Languages className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <div className="text-xs text-slate-600 font-mono-code">Inglés</div>
                <div className="text-sm font-bold text-slate-900">Nivel B2</div>
                <div className="text-[11px] text-emerald-600 font-semibold">Intermedio Alto</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                <MapPin className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <div className="text-xs text-slate-600 font-mono-code">Ubicación</div>
                <div className="text-sm font-bold text-slate-900">Barranquilla</div>
                <div className="text-[11px] text-purple-600 font-semibold">Colombia (UTC-5)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills & Principles Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono-code uppercase tracking-wider text-slate-600 font-bold mb-2">
            Competencias de Trabajo & Enfoque
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {SOFT_SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors">
                    {iconMap[skill.icon] || <CheckCircle className="w-5 h-5 text-blue-600" />}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {skill.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-11">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
