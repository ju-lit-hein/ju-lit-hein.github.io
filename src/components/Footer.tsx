import React from 'react';
import { Code, TerminalIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {currentYear} Julien FERDINAND. All rights reserved.</p>
          </div>

          <div className="flex space-x-2 text-slate-300 text-sm">
            <p>
              Hey! You thought it was already the end?
            </p>
            <p>
              Did you click on the
            </p>
            <TerminalIcon className="w-5 h-5" />
            <p>
              icon on top?
            </p>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-500">
          <p>Built with <Code className="inline-block w-3.5 h-3.5 text-cyan-400" /> in React + TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;