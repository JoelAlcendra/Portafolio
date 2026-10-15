import React, { useState } from 'react';
import { 
  Code, 
  FileCode, 
  Layout, 
  Smartphone, 
  Terminal, 
  Server, 
  Globe, 
  Database, 
  Layers, 
  GitBranch, 
  Box, 
  Send, 
  Shield, 
  CheckCircle, 
  Compass,
  Filter,
  Sparkles,
  Link2
} from 'lucide-react';
import { SKILLS_DATA, PROJECTS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [highlightedSkillId, setHighlightedSkillId] = useState<string | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-5 h-5" />,
    FileCode: <FileCode className="w-5 h-5" />,
    Layout: <Layout className="w-5 h-5" />,
    Smartphone: <Smartphone className="w-5 h-5" />,
    Terminal: <Terminal className="w-5 h-5" />,
    Server: <Server className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    GitBranch: <GitBranch className="w-5 h-5" />,
    Box: <Box className="w-5 h-5" />,
    Send: <Send className="w-5 h-5" />,
    Shield: <Shield className="w-5 h-5" />,
    CheckCircle: <CheckCircle className="w-5 h-5" />,
    Compass: <Compass className="w-5 h-5" />,
  };

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'Todas las áreas' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Bases de Datos' },
    { id: 'tools', label: 'Herramientas' },
    { id: 'specialized', label: 'Ciberseguridad & Otras' },
  ];

  const levels: { id: string; label: string; badgeColor: string }[] = [
    { id: 'all', label: 'Todos los niveles', badgeColor: '' },
    { id: 'applied', label: 'Aplicada en proyectos', badgeColor: 'border-blue-200 text-blue-700 bg-blue-50' },
    { id: 'deepening', label: 'En profundización', badgeColor: 'border-purple-200 text-purple-700 bg-purple-50' },
    { id: 'studied', label: 'Estudiada / Fundamentos', badgeColor: 'border-slate-200 text-slate-700 bg-slate-50' },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchLevel = selectedLevel === 'all' || skill.level === selectedLevel;
    return matchCategory && matchLevel;
  });

  const getRelatedProjects = (projectIdList: string[]) => {
    return PROJECTS_DATA.filter(p => projectIdList.includes(p.id));
  };

  return (
    <section id="habilidades" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-2 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-blue-600 font-bold">
          <span>02 // MATRIZ TÉCNICA Y HERRAMIENTAS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display-title">
          Habilidades clasificadas con rigor técnico
        </h2>
        <p className="text-slate-600 max-w-2xl text-base">
          Diferenciación honesta entre tecnologías aplicadas en mis proyectos (FoodMatch y WebMiel), aquellas en las que estoy profundizando y conocimientos teóricos estudiados.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 mb-8 shadow-xs">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5" role="toolbar" aria-label="Filtrar por categoría">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-500/20'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Level Filters */}
        <div className="flex items-center gap-2 border-t md:border-t-0 pt-3 md:pt-0 border-slate-200">
          <Filter className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <span className="text-xs text-slate-600 font-mono-code hidden sm:inline">Nivel:</span>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="bg-slate-50 text-slate-800 text-xs font-medium rounded-lg px-2.5 py-1.5 border border-slate-300 outline-none focus:border-blue-600"
          >
            {levels.map(lvl => (
              <option key={lvl.id} value={lvl.id}>
                {lvl.label}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => {
          const isSelected = highlightedSkillId === skill.id;
          const relatedProjects = getRelatedProjects(skill.projectsUsedIn);

          let levelBadgeClass = 'border-slate-200 text-slate-700 bg-slate-50';
          if (skill.level === 'applied') {
            levelBadgeClass = 'border-blue-200 text-blue-700 bg-blue-50';
          } else if (skill.level === 'deepening') {
            levelBadgeClass = 'border-purple-200 text-purple-700 bg-purple-50';
          }

          return (
            <div
              key={skill.id}
              onClick={() => setHighlightedSkillId(isSelected ? null : skill.id)}
              className={`p-5 rounded-2xl transition-all cursor-pointer relative overflow-hidden group ${
                isSelected
                  ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 -translate-y-1'
                  : 'bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${
                    skill.level === 'applied' 
                      ? 'bg-blue-50 text-blue-600' 
                      : skill.level === 'deepening' 
                        ? 'bg-purple-50 text-purple-600' 
                        : 'bg-slate-100 text-slate-600'
                  }`}>
                    {iconMap[skill.iconName] || <Code className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono-code uppercase font-semibold text-slate-600">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <span className={`px-2 py-0.5 rounded text-[10px] font-mono-code font-bold border ${levelBadgeClass}`}>
                  {skill.levelLabel}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {skill.description}
              </p>

              {/* Connected Projects Indicator */}
              {relatedProjects.length > 0 ? (
                <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-blue-600 font-medium">
                  <Link2 className="w-3.5 h-3.5" />
                  <span>En proyectos: </span>
                  <span className="text-slate-900 font-bold font-mono-code">
                    {relatedProjects.map(p => p.title).join(', ')}
                  </span>
                </div>
              ) : (
                <div className="pt-2.5 border-t border-slate-100 text-[10px] text-slate-600 font-mono-code">
                  Formación teórica / Pruebas de laboratorio
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend / Transparency Note */}
      <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span><strong>Transparencia técnica:</strong> Matriz estructurada sin inflar competencias. Datos centralizados en <code>portfolioData.ts</code>.</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-mono-code font-semibold">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Aplicada en proyectos ({SKILLS_DATA.filter(s => s.level === 'applied').length})
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            En profundización ({SKILLS_DATA.filter(s => s.level === 'deepening').length})
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            Estudiada ({SKILLS_DATA.filter(s => s.level === 'studied').length})
          </span>
        </div>
      </div>

    </section>
  );
};
