import { useState, useEffect } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Roadmap } from './components/Roadmap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { useScrollSpy } from './hooks/useScrollSpy';
import type { Project } from './types/portfolio';

export function App() {
  const [zenMode, setZenMode] = useState<boolean>(() => {
    return localStorage.getItem('portfolio_zen_mode') === 'true';
  });
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sectionIds = [
    'inicio',
    'sobre-mi',
    'habilidades',
    'proyectos',
    'experiencia',
    'trayectoria',
    'contacto',
  ];
  const activeSection = useScrollSpy(sectionIds, 120);

  const toggleZenMode = () => {
    setZenMode(prev => {
      const next = !prev;
      localStorage.setItem('portfolio_zen_mode', String(next));
      return next;
    });
  };

  // Keyboard shortcut listener (Ctrl+K or Cmd+K toggles the terminal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleExploreProjects = () => {
    const el = document.getElementById('proyectos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200 ${zenMode ? 'zen-mode' : ''}`}>
      {/* Ambient Grid & Background Lighting */}
      <BackgroundGrid zenMode={zenMode} />

      {/* Sticky Navigation Header */}
      <Navbar
        activeSection={activeSection}
        zenMode={zenMode}
        onToggleZenMode={toggleZenMode}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          onExploreProjects={handleExploreProjects}
        />
        <About />
        <Skills />
        <Projects onSelectProject={(proj) => setSelectedProject(proj)} />
        <Experience />
        <Roadmap />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Modals & Interactive Overlays */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
