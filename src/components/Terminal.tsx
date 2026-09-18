import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TerminalProps {
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: string;
}

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    { command: '', output: t('terminal.welcome') }
  ]);
  const [position, setPosition] = useState({ x: '50%', y: '50%' });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Available commands
  const commands: Record<string, (args: string[]) => string> = {
    help: () => t('terminal.help'),
    about: () => t('terminal.about'),
    skills: () => t('terminal.skills'),
    projects: () => t('terminal.projects'),
    clear: () => {
      setHistory([]);
      return '';
    },
    exit: () => {
      onClose();
      return '';
    },
    goto: (args) => {
      if (args.length === 0) return t('terminal.missingDestination');

      const destinations: Record<string, string> = {
        main: 'main',
        home: 'main',
        top: 'main',
        about: 'about',
        contact: 'contact',
        projects: 'projects',
        skills: 'skills'
      };
      const destination = args[0].toLowerCase();
      if (Object.keys(destinations).includes(destination)) {
        setTimeout(() => {
          document.getElementById(destinations[destination])?.scrollIntoView({ behavior: 'smooth' });
          onClose();
        }, 500);
        return t('terminal.navigating', { section: destination });
      }
      return t('terminal.unknownDestination', { destination: args[0] });
    }
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const args = trimmedCmd.split(' ');
    const commandName = args.shift()?.toLowerCase() || '';

    let output = '';
    if (commandName in commands) {
      output = commands[commandName](args);
    } else {
      output = t('terminal.notFound', { command: commandName });
    }

    setHistory(prev => [...prev, { command: trimmedCmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && terminalRef.current) {
      const rect = terminalRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    setPosition({
      x: `${e.clientX - dragOffset.x}px`,
      y: `${e.clientY - dragOffset.y}px`
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Focus input on mount and setup dragging
  useEffect(() => {
    inputRef.current?.focus();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        ref={terminalRef}
        className="w-full max-w-2xl h-96 bg-slate-900 text-slate-100 rounded-md shadow-xl overflow-hidden"
        style={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          transform: position.x === '50%' ? 'translateX(-50%)' : 'none'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="bg-slate-800 px-4 py-2 flex justify-between items-center cursor-move"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center">
            <div className="flex space-x-2 mr-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm font-medium">{t('terminal.title')}</span>
          </div>
          <button
            className="text-slate-400 hover:text-slate-100 transition-colors"
            onClick={onClose}
            aria-label={t('actions.closeTerminal')}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div
          ref={outputRef}
          className="font-mono text-sm p-4 h-[calc(100%-6rem)] overflow-y-auto"
        >
          {history.map((item, index) => (
            <div key={index} className="mb-2">
              {item.command && (
                <div className="flex">
                  <span className="text-cyan-400 mr-2">λ</span>
                  <span className="text-white">{item.command}</span>
                </div>
              )}
              <div className="whitespace-pre-wrap ml-4">{item.output}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 px-4 py-2 flex items-center">
          <span className="text-cyan-400 mr-2">λ</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white font-mono"
            autoFocus
            aria-label={t('terminal.inputLabel')}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;