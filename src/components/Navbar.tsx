import React, { useState } from 'react';
import { Terminal, FileText, Sparkles, Eye, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  zenMode: boolean;
  onToggleZenMode: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  zenMode,
  onToggleZenMode,
  onOpenTerminal,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'trayectoria', label: 'Trayectoria' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('inicio');
          }}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-1 py-0.5"
          aria-label="Ir al inicio"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 border border-blue-500 flex items-center justify-center font-mono-code text-white font-bold text-sm shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
            &gt;_
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors font-display-title">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="text-[10px] font-mono-code text-slate-600 -mt-0.5">
              Ingeniería de Sistemas
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1 rounded-full border border-slate-200/80 shadow-xs" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-blue-600 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Utilities */}
        <div className="flex items-center gap-2">
          {/* Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono-code transition-all shadow-sm"
            title="Abrir consola interactiva de comandos (Ctrl+K)"
            aria-label="Abrir terminal de comandos"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Terminal</span>
            <span className="text-[10px] px-1 py-0.2 rounded bg-slate-800 text-slate-300">CLI</span>
          </button>

          {/* CV / Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20"
            aria-label="Ver y descargar Hoja de Vida en PDF"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Hoja de Vida</span>
            <span className="xs:hidden">CV</span>
          </button>

          {/* Zen Mode / Effects Toggle */}
          <button
            onClick={onToggleZenMode}
            className={`p-2 rounded-lg border text-xs transition-colors ${
              zenMode
                ? 'bg-amber-50 border-amber-300 text-amber-700'
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 shadow-xs'
            }`}
            title={zenMode ? 'Modo Zen activo (efectos reducidos)' : 'Activar Modo Zen'}
            aria-label={zenMode ? 'Desactivar Modo Zen' : 'Activar Modo Zen'}
          >
            {zenMode ? <Eye className="w-4 h-4 text-amber-600" /> : <Sparkles className="w-4 h-4 text-blue-600" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-xs"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-6 animate-fade-in shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-left transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-200 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-mono-code shadow-sm"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Consola CLI</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
