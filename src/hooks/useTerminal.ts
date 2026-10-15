import { useState, useCallback } from 'react';
import { 
  PERSONAL_INFO, 
  SKILLS_DATA, 
  PROJECTS_DATA, 
  WORK_EXPERIENCE, 
  EDUCATION_DATA, 
  CONTACT_INFO, 
  TERMINAL_COMMANDS_HELP 
} from '../data/portfolioData';

export interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'success' | 'info' | 'header';
  text: string;
  timestamp?: string;
}

export function useTerminal(onOpenResume?: () => void) {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'header',
      text: 'ALCENDRA-OS [Version 2.4.0-syseng]\nJoel David Alcendra Carballo | Sistemas & Desarrollo de Software\nBarranquilla, Colombia • Escribe "help" para ver la lista de comandos.',
    },
  ]);

  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const executeCommand = useCallback((rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    // Add command to history
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const inputLine: TerminalLine = {
      id: `input-${Date.now()}`,
      type: 'input',
      text: trimmed,
    };

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ').toLowerCase();

    let outputLines: TerminalLine[] = [];

    switch (cmd) {
      case 'help': {
        const helpText = TERMINAL_COMMANDS_HELP.map(
          item => `  \x1b[36m${item.cmd.padEnd(12)}\x1b[0m : ${item.desc}`
        ).join('\n');
        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'output',
            text: `Comandos del sistema disponibles:\n${helpText}\n\nTip: Usa las flechas ↑ y ↓ para navegar por el historial.`,
          },
        ];
        break;
      }

      case 'about': {
        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'info',
            text: `[PERFIL PROFESIONAL]\nNombre: ${PERSONAL_INFO.fullName}\nUbicación: ${PERSONAL_INFO.location}\nProfesión: ${PERSONAL_INFO.title}\nInstitución: Universidad Libre (${PERSONAL_INFO.currentSemester})\n\nFilosofía:\n"${PERSONAL_INFO.systemPhilosophy}"\n\nInglés: ${PERSONAL_INFO.englishLevel}\nEstado: ${PERSONAL_INFO.availabilityStatus}`,
          },
        ];
        break;
      }

      case 'skills': {
        let filtered = SKILLS_DATA;
        if (args) {
          filtered = SKILLS_DATA.filter(s => 
            s.category.toLowerCase().includes(args) || s.name.toLowerCase().includes(args)
          );
        }

        const formatted = filtered.map(s => {
          const badge = s.level === 'applied' ? '[PROYECTO]' : s.level === 'deepening' ? '[PROFUNDIZANDO]' : '[ESTUDIADO]';
          return `  • ${s.name.padEnd(26)} ${badge.padEnd(16)} (${s.category}) - ${s.description}`;
        }).join('\n');

        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'output',
            text: `MATRIZ DE HABILIDADES TÉCNICAS (Total: ${filtered.length}):\n${formatted}\n\nNota: Datos categorizados con transparencia técnica (no sobreestimados).`,
          },
        ];
        break;
      }

      case 'projects': {
        const formatted = PROJECTS_DATA.map((p, idx) => {
          return `[${idx + 1}] ${p.title} (${p.category})\n    Estado: ${p.statusLabel}\n    Problema: ${p.problem}\n    Solución: ${p.solution}\n    Tech: ${p.technologies.join(', ')}\n    Demo/Repo: ${p.isRepoPending ? 'Pendiente / Privado' : 'Disponible'}\n`;
        }).join('\n');

        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'output',
            text: `CATÁLOGO DE PROYECTOS:\n${formatted}`,
          },
        ];
        break;
      }

      case 'status': {
        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'success',
            text: `ESTADO OPERATIVO DEL SISTEMA:\n• Estado: Activo / Buscando Pasantía & Oportunidades Tech\n• Ubicación: ${PERSONAL_INFO.location}\n• Semestre: 8° Semestre (Universidad Libre)\n• Inglés: ${PERSONAL_INFO.englishLevel}\n• Stack Principal: React, Python/Flask, PostgreSQL, REST APIs, Git\n• Código fuente: React 19 + TypeScript + Tailwind CSS`,
          },
        ];
        break;
      }

      case 'experience': {
        const exp = WORK_EXPERIENCE[0];
        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'info',
            text: `TRAYECTORIA LABORAL:\nRol: ${exp.role}\nEmpresa: ${exp.company} (${exp.period})\nUbicación: ${exp.location}\n\nCompetencias Transferibles a Ingeniería:\n${exp.transferableSkills.map(s => `  ✓ ${s}`).join('\n')}\n\nResponsabilidades:\n${exp.responsibilities.map(r => `  - ${r}`).join('\n')}\n\n[Nota: ${exp.isEditableNote}]`,
          },
        ];
        break;
      }

      case 'education': {
        const eduText = EDUCATION_DATA.map(e => 
          `• ${e.degree}\n  Institución: ${e.institution}\n  Período: ${e.period}\n  Detalle: ${e.details}`
        ).join('\n\n');

        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'info',
            text: `FORMACIÓN ACADÉMICA:\n${eduText}`,
          },
        ];
        break;
      }

      case 'contact': {
        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'output',
            text: `CANALES DE CONTACTO:\n• Correo: ${CONTACT_INFO.email}\n• LinkedIn: ${CONTACT_INFO.linkedInUrl}\n• GitHub: ${CONTACT_INFO.githubUrl}\n• Ubicación: ${CONTACT_INFO.location}\n\nPara enviar un mensaje directo, usa el formulario interactivo en la sección #contacto.`,
          },
        ];
        break;
      }

      case 'cv':
      case 'resume': {
        if (onOpenResume) {
          onOpenResume();
        }
        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'success',
            text: `Abriendo visor de Hoja de Vida y modal de exportación PDF...`,
          },
        ];
        break;
      }

      case 'clear':
      case 'cls': {
        setHistory([]);
        return;
      }

      case 'whoami': {
        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'output',
            text: `guest@alcendra-workstation [UID: 1000] [Permisos: Lectura de Portafolio / Evaluación Técnica]`,
          },
        ];
        break;
      }

      case 'sudo': {
        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'error',
            text: `[sudo] Permiso denegado: El usuario ya posee privilegios de exploración completa en modo lectura.`,
          },
        ];
        break;
      }

      case 'date': {
        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'output',
            text: `Fecha del sistema: ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })} (Barranquilla, UTC-5)`,
          },
        ];
        break;
      }

      case 'echo': {
        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'output',
            text: parts.slice(1).join(' '),
          },
        ];
        break;
      }

      default: {
        outputLines = [
          {
            id: `out-${Date.now()}`,
            type: 'error',
            text: `Comando no reconocido: "${trimmed}". Escribe "help" para ver los comandos válidos.`,
          },
        ];
        break;
      }
    }

    setHistory(prev => [...prev, inputLine, ...outputLines]);
  }, [onOpenResume]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    history,
    commandHistory,
    historyIndex,
    setHistoryIndex,
    executeCommand,
    clearHistory,
  };
}
