import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Trash2, CornerDownLeft } from 'lucide-react';
import { useTerminal } from '../hooks/useTerminal';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [inputVal, setInputVal] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    history,
    commandHistory,
    historyIndex,
    setHistoryIndex,
    executeCommand,
    clearHistory,
  } = useTerminal(onOpenResume);

  const quickCommands = ['help', 'about', 'skills', 'projects', 'status', 'cv', 'clear'];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Handle keyboard events (Up/Down history, Tab completion)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = quickCommands.find(c => c.startsWith(inputVal.trim().toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Terminal interactiva del desarrollador"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className={`w-full bg-[#080c14] border border-cyan-500/30 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-200 ${
          isFullScreen ? 'h-[95vh] max-w-[95vw]' : 'max-w-3xl h-[560px]'
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-cyan-500/20 select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <button 
                onClick={onClose}
                aria-label="Cerrar terminal"
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors" 
              />
              <button 
                onClick={() => setIsFullScreen(prev => !prev)}
                aria-label="Alternar tamaño"
                className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors" 
              />
              <button 
                onClick={clearHistory}
                aria-label="Limpiar terminal"
                className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors" 
              />
            </div>
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono-code text-slate-300 font-medium">
              joel@alcendra-box:~ (bash)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={clearHistory}
              title="Limpiar terminal"
              aria-label="Limpiar terminal"
              className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              title={isFullScreen ? "Restaurar" : "Pantalla completa"}
              aria-label={isFullScreen ? "Restaurar tamaño" : "Pantalla completa"}
              className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            >
              {isFullScreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              aria-label="Cerrar terminal"
              className="p-1 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Toolbar */}
        <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 bg-[#0a0f1d] border-b border-slate-800/80 text-xs font-mono-code">
          <span className="text-slate-500 text-[11px] mr-1">Atajos:</span>
          {quickCommands.map(cmd => (
            <button
              key={cmd}
              onClick={() => {
                executeCommand(cmd);
                inputRef.current?.focus();
              }}
              className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-950/60 text-slate-300 hover:text-cyan-300 border border-slate-700/50 hover:border-cyan-500/40 text-[11px] transition-all"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Output area */}
        <div 
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 font-mono-code text-xs sm:text-sm overflow-y-auto space-y-2 select-text"
        >
          {history.map((line) => {
            if (line.type === 'input') {
              return (
                <div key={line.id} className="flex items-start gap-2 text-slate-300">
                  <span className="text-emerald-400 select-none">joel@sys:~$</span>
                  <span className="text-cyan-200 font-semibold">{line.text}</span>
                </div>
              );
            }
            if (line.type === 'error') {
              return (
                <div key={line.id} className="text-red-400 whitespace-pre-wrap pl-4 border-l-2 border-red-500/40">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'success') {
              return (
                <div key={line.id} className="text-emerald-400 whitespace-pre-wrap pl-4 border-l-2 border-emerald-500/40">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'info') {
              return (
                <div key={line.id} className="text-purple-300 whitespace-pre-wrap pl-4 border-l-2 border-purple-500/40">
                  {line.text}
                </div>
              );
            }
            return (
              <div key={line.id} className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                {line.text}
              </div>
            );
          })}
        </div>

        {/* Input prompt */}
        <form 
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-4 py-3 bg-[#0d1424] border-t border-cyan-500/20"
        >
          <span className="text-emerald-400 font-mono-code text-xs sm:text-sm font-semibold select-none flex items-center">
            joel@sys:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe 'help' o presiona Tab para autocompletar..."
            className="flex-1 bg-transparent text-cyan-200 font-mono-code text-xs sm:text-sm outline-none placeholder:text-slate-600"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            aria-label="Ejecutar comando"
            className="p-1.5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
