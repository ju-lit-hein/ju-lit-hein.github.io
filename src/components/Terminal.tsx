import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface TerminalProps {
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: string;
}

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    { command: '', output: 'Welcome to Julien\'s terminal! Type "help" to see available commands.' }
  ]);
  const [position, setPosition] = useState({ x: '50%', y: '50%' });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Available commands
  const commands: Record<string, (args: string[]) => string> = {
    help: () => `
Available commands:
  help                Show this help message
  about               About me
  skills              List my technical skills
  projects            View my projects
  clear               Clear the terminal
  exit                Close this terminal
`,
    about: () => `
Julien FERDINAND
-----------------
Third-year IT student at Epitech
Passionate about systems programming and software development
Proficient in C, C++, Rust, and comfortable in Linux/macOS environments
`,
    skills: () => `
Technical Skills:
-----------------
Languages: C, C++, Rust, Bash/Shell, Python
Systems: Linux, macOS, Memory Management, Concurrency
Tools: Git & GitHub, Bash Scripting, Debugging Tools, VS Code, Make/CMake
Other: Algorithms, Data Structures, Software Architecture, Unit Testing
`,
    projects: () => `
Projects:
-----------------
1. Custom Shell Implementation - A fully functional Unix shell written in C
2. Mini Compiler - A compiler for a simplified programming language
3. Game Engine Components - Modular game engine components in Rust
4. Linux System Monitor - Terminal-based system monitoring tool

Type "goto projects" to view detailed project information.
`,
    clear: () => {
      setHistory([]);
      return '';
    },
    exit: () => {
      onClose();
      return '';
    },
    goto: (args) => {
      if (args.length === 0) return 'Error: Please specify a destination. Try "goto projects"';

      const destination = args[0].toLowerCase();
      if (destination === 'projects') {
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          onClose();
        }, 500);
        return 'Navigating to projects section...';
      } else if (destination === 'about') {
        setTimeout(() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          onClose();
        }, 500);
        return 'Navigating to about section...';
      } else if (destination === 'skills') {
        setTimeout(() => {
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
          onClose();
        }, 500);
        return 'Navigating to skills section...';
      } else if (destination === 'contact') {
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          onClose();
        }, 500);
        return 'Navigating to contact section...';
      }

      return `Error: Unknown destination "${args[0]}"`;
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
      output = `Command not found: ${commandName}. Type "help" for available commands.`;
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
            <span className="text-sm font-medium">Terminal</span>
          </div>
          <button
            className="text-slate-400 hover:text-slate-100 transition-colors"
            onClick={onClose}
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
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;