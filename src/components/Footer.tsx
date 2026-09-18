import React from 'react';
import { Code, TerminalIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="py-8 bg-[var(--ink)] text-[var(--paper)]/70">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-mono text-xs">© {currentYear} Julien Ferdinand / {t('footer.intention')}</p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[var(--paper)]/50">
            <p>{t('footer.terminal')}</p>
            <TerminalIcon className="w-5 h-5" />
            <p>⌘ /</p>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-[var(--paper)]/10 text-xs text-[var(--paper)]/40">
          <p>{t('footer.built')} <Code className="inline-block w-3.5 h-3.5 text-[var(--signal)]" /> React + TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;