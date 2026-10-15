import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Concept */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm font-display-title">
            <span className="text-blue-600 font-mono-code font-bold">&gt;_</span>
            <span>{PERSONAL_INFO.fullName}</span>
          </div>
          <p className="text-[11px] text-slate-600">
            {PERSONAL_INFO.heroTagline} • {PERSONAL_INFO.location}
          </p>
        </div>

        {/* Portfolio Architecture Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono-code font-semibold text-slate-700">
          <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-blue-700">
            React 19
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-indigo-700">
            TypeScript
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-sky-700">
            Tailwind CSS
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-emerald-700">
            Three.js 3D
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-purple-700">
            Vite 8
          </span>
        </div>

        {/* Back to top & Terminal Quick Link */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-mono-code transition-colors"
            aria-label="Abrir terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
            <span>CLI</span>
          </button>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-sm"
            aria-label="Volver al inicio de la página"
          >
            <span>Subir</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Copyright line */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-2">
        <div>
          © {new Date().getFullYear()} Joel David Alcendra Carballo. Todos los derechos reservados.
        </div>
        <div className="flex items-center gap-1.5 text-emerald-700 font-mono-code font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Sistemas operativos en línea (Barranquilla, Colombia)</span>
        </div>
      </div>
    </footer>
  );
};
