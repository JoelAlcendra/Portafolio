import React, { useEffect } from 'react';
import { Printer, Download, X, Mail, MapPin, Globe } from 'lucide-react';
import { 
  PERSONAL_INFO, 
  CONTACT_INFO, 
  WORK_EXPERIENCE, 
  EDUCATION_DATA, 
  PROJECTS_DATA,
  SOFT_SKILLS 
} from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Hoja de Vida y Currículum Vitae"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Action Header (No-print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <h2 className="text-sm font-bold text-slate-800 font-display-title">
              Curriculum Vitae • Joel David Alcendra Carballo
            </h2>
            <span className="hidden sm:inline-block px-2.5 py-0.5 text-[11px] rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold font-mono-code">
              Formato ATS & Impresión
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-md shadow-blue-500/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-800 text-sm leading-relaxed">
          
          {/* Print Tip Notice (Only on screen) */}
          <div className="no-print mb-6 p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs text-blue-950 flex items-start gap-3 shadow-xs">
            <Download className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Exportación a PDF en alta resolución:</p>
              <p className="text-slate-600 text-[11px] mt-0.5">
                Haz clic en <strong>"Imprimir / Guardar PDF"</strong> y en el destino de tu navegador selecciona <strong>"Guardar como PDF"</strong>. El documento está optimizado con tipografía limpia y sin elementos decorativos pesados.
              </p>
            </div>
          </div>

          {/* CV Header */}
          <header className="border-b border-slate-200 pb-6 mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display-title">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-base font-bold text-blue-600 mt-1">
              Ingeniero de Sistemas en Formación • Universidad Libre (8° Semestre)
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                {CONTACT_INFO.email}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                Inglés: {PERSONAL_INFO.englishLevel}
              </span>
              <a 
                href={CONTACT_INFO.linkedInUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-blue-600 underline font-medium"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                LinkedIn
              </a>
              <a 
                href={CONTACT_INFO.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-blue-600 underline font-medium"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
                GitHub
              </a>
            </div>
          </header>

          {/* Perfil Profesional */}
          <section className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-2">
              Perfil Profesional
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Estudiante de octavo semestre de Ingeniería de Sistemas en la Universidad Libre (Barranquilla) con perfil orientado al desarrollo de software, backend, bases de datos relacionales y diseño de APIs REST. Enfoque analítico para la descomposición de problemas complejos, adaptación ágil a requerimientos y aplicación de buenas prácticas de código. Con experiencia laboral en atención digital y soporte operativo bajo estrictos acuerdos de nivel de servicio (SLAs), aportando disciplina procedimental, comunicación asertiva y resolución estructurada de incidentes.
            </p>
          </section>

          {/* Formación Académica */}
          <section className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
              Formación Académica
            </h3>
            <div className="space-y-3">
              {EDUCATION_DATA.map(edu => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div className="text-slate-600 font-medium">{edu.institution}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{edu.details}</div>
                  </div>
                  <div className="text-xs text-blue-600 mt-1 sm:mt-0 font-mono-code font-bold sm:text-right shrink-0">
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experiencia Laboral */}
          <section className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
              Experiencia Laboral
            </h3>
            {WORK_EXPERIENCE.map(exp => (
              <div key={exp.id} className="text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <span className="font-bold text-slate-900">{exp.role}</span>
                    <span className="text-slate-600"> • {exp.company}</span>
                  </div>
                  <span className="text-xs text-blue-600 font-mono-code font-bold">{exp.period}</span>
                </div>
                <p className="text-slate-500 text-xs mt-1 italic">
                  {exp.description}
                </p>
                <div className="mt-2.5">
                  <div className="text-xs font-bold text-slate-800 mb-1">
                    Habilidades Transferibles a Ingeniería:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                    {exp.transferableSkills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>

          {/* Proyectos Seleccionados */}
          <section className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
              Proyectos Seleccionados
            </h3>
            <div className="space-y-3">
              {PROJECTS_DATA.map(proj => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-baseline">
                    <span className="font-bold text-slate-900">
                      {proj.title} <span className="font-normal text-slate-600">({proj.category})</span>
                    </span>
                    <span className="text-[11px] text-blue-600 font-mono-code font-bold">
                      [{proj.statusLabel}]
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs mt-0.5">
                    {proj.description}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    <strong>Tecnologías:</strong> {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Habilidades Técnicas y Competencias */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-2">
                Habilidades Técnicas
              </h3>
              <div className="space-y-1.5 text-xs text-slate-700">
                <p><strong>Frontend:</strong> React, JavaScript (ES6+), HTML5, CSS3, Flutter (Básico)</p>
                <p><strong>Backend:</strong> Python, Flask, Diseño de API REST</p>
                <p><strong>Bases de Datos:</strong> PostgreSQL, SQLAlchemy (ORM)</p>
                <p><strong>Herramientas:</strong> Git, GitHub, Docker (Fundamentos), Postman</p>
                <p><strong>Otras Áreas:</strong> Ciberseguridad aplicada, Pruebas de Software</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-2">
                Competencias Profesionales
              </h3>
              <div className="space-y-1 text-xs text-slate-700">
                {SOFT_SKILLS.map((sk, idx) => (
                  <p key={idx}>• <strong>{sk.title}:</strong> {sk.description}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Footer note */}
          <div className="mt-8 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-600">
            Documento generado digitalmente desde el portafolio profesional de {PERSONAL_INFO.fullName}. Barranquilla, Colombia.
          </div>
        </div>

      </div>
    </div>
  );
};
