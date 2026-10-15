import React from 'react';
import { 
  Briefcase, 
  Clock, 
  GraduationCap, 
  Edit3,
  Sparkles
} from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-blue-600 font-bold">
          <span>04 // EXPERIENCIA & FORMACIÓN ACADÉMICA</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display-title">
          Trayectoria profesional y rigor académico
        </h2>
        <p className="text-slate-600 max-w-2xl text-base">
          Experiencia operativa en soporte digital con habilidades transferibles directamente al desarrollo de software y rigor procedimental.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Work Experience */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-slate-600 font-bold mb-2">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span>Experiencia Laboral</span>
          </div>

          {WORK_EXPERIENCE.map((exp) => (
            <div 
              key={exp.id}
              className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm transition-all space-y-5"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  <div className="text-blue-600 font-bold text-sm mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono-code text-xs text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Context */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {exp.description}
              </p>

              {/* Transferable Skills Highlight */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Habilidades Transferibles a Ingeniería de Software</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium">
                  {exp.transferableSkills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Responsabilidades Operativas y Procedimentales:
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0 mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recruiter / Editable Note */}
              {exp.isEditableNote && (
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-600 font-mono-code">
                  <Edit3 className="w-3.5 h-3.5 text-slate-600" />
                  <span>{exp.isEditableNote}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Academic Formation */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-slate-600 font-bold mb-2">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span>Formación Académica</span>
          </div>

          <div className="space-y-4">
            {EDUCATION_DATA.map((edu) => (
              <div 
                key={edu.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm transition-all space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <div className="text-xs text-blue-600 font-bold">
                      {edu.institution}
                    </div>
                  </div>
                  {edu.isCurrent && (
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-code font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      En Curso
                    </span>
                  )}
                </div>

                <div className="text-xs text-slate-600 font-mono-code font-medium">
                  {edu.period}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}

            {/* Language Proficiency Badge Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs font-mono-code text-blue-600 font-bold uppercase">
                  Competencia Lingüística
                </div>
                <div className="text-base font-bold text-slate-900 mt-0.5">
                  Inglés B2 • Intermedio Alto
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Capacidad para documentación técnica, reuniones y chats en inglés.
                </div>
              </div>
              <div className="text-2xl font-bold font-mono-code text-blue-600 px-3.5 py-2 rounded-xl bg-blue-50 border border-blue-200 shadow-xs">
                B2
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
