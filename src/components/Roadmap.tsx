import React from 'react';
import { ROADMAP_DATA } from '../data/portfolioData';
import { CheckCircle2, Clock, Target } from 'lucide-react';

export const Roadmap: React.FC = () => {
  return (
    <section id="trayectoria" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-blue-600 font-bold">
          <span>05 // EVOLUCIÓN & METAS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display-title">
          Trayectoria y visión de crecimiento
        </h2>
        <p className="text-slate-600 max-w-2xl text-base">
          Cómo ha evolucionado mi aprendizaje técnico, dónde me encuentro hoy y cuáles son mis siguientes metas en la ingeniería de software.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {ROADMAP_DATA.map((item, idx) => {
          let badgeColor = 'bg-slate-100 text-slate-700 border-slate-200';
          let icon = <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
          let circleColor = 'bg-emerald-500 border-white shadow-md';

          if (item.status === 'in_progress') {
            badgeColor = 'bg-blue-50 text-blue-700 border-blue-200';
            icon = <Clock className="w-4 h-4 text-blue-600" />;
            circleColor = 'bg-blue-600 border-white shadow-lg shadow-blue-500/50 animate-pulse';
          } else if (item.status === 'planned') {
            badgeColor = 'bg-purple-50 text-purple-700 border-purple-200';
            icon = <Target className="w-4 h-4 text-purple-600" />;
            circleColor = 'bg-purple-500 border-white shadow-md';
          }

          return (
            <div key={idx} className="relative group">
              {/* Dot on the timeline line */}
              <div 
                className={`absolute -left-[32px] sm:-left-[48px] top-1.5 w-4 h-4 rounded-full border-2 ${circleColor}`} 
              />

              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 group-hover:border-blue-300 shadow-sm transition-all space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono-code font-bold text-blue-600">
                    {item.period}
                  </span>
                  <span className={`px-3 py-0.5 rounded-full text-[11px] font-mono-code font-bold border flex items-center gap-1.5 ${badgeColor}`}>
                    {icon}
                    <span>{item.status === 'completed' ? 'Completado' : item.status === 'in_progress' ? 'Etapa Actual' : 'Objetivo'}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
