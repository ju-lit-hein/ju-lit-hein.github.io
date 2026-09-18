import React, { useState, useEffect } from 'react';
import { Sun, Moon, Terminal as TerminalIcon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  toggleTerminal: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTerminal }) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
      { name: t('nav.home'), href: '#main' },
      { name: t('nav.about'), href: '#about' },
      { name: t('nav.skills'), href: '#skills' },
      { name: t('nav.projects'), href: '#projects' },
      { name: t('nav.contact'), href: '#contact' },
    ];

  const toggleLanguage = () => {
    void i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--paper)]/90 backdrop-blur-md border-b border-[var(--line)]' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex justify-between items-center h-20">
        <a href="#main" className="group flex items-center gap-3 text-sm font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center bg-[var(--signal)] text-white font-mono text-xs">JF</span>
          <span>JULIEN FERDINAND</span>
          <span className="hidden sm:inline font-mono text-xs text-[var(--muted)]">/ SOFTWARE ENGINEER</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-mono text-xs uppercase tracking-wide text-[var(--muted)] hover:text-[var(--signal)] transition-colors"
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={toggleTerminal}
            className="p-2 text-[var(--muted)] hover:text-[var(--signal)] transition-colors"
            aria-label={t('actions.openTerminal')}
          >
            <TerminalIcon className="w-5 h-5" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--muted)] hover:text-[var(--signal)] transition-colors"
            aria-label={theme === 'light' ? t('actions.switchToDark') : t('actions.switchToLight')}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <button onClick={toggleLanguage} className="font-mono text-[10px] text-[var(--muted)] hover:text-[var(--signal)] transition-colors" aria-label={t('language.switch')}>
            {t('language.current')}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTerminal}
            className="p-2 text-[var(--muted)] hover:text-[var(--signal)] transition-colors"
            aria-label={t('actions.openTerminal')}
          >
            <TerminalIcon className="w-5 h-5" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--muted)] hover:text-[var(--signal)] transition-colors"
            aria-label={theme === 'light' ? t('actions.switchToDark') : t('actions.switchToLight')}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <button onClick={toggleLanguage} className="font-mono text-[10px] text-[var(--muted)] hover:text-[var(--signal)] transition-colors" aria-label={t('language.switch')}>
            {t('language.current')}
          </button>

          <button
            onClick={toggleMobileMenu}
            className="p-2 text-[var(--muted)] hover:text-[var(--signal)] transition-colors"
            aria-label={mobileMenuOpen ? t('actions.closeMenu') : t('actions.openMenu')}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 border-b border-[var(--line)] bg-[var(--paper)] py-5 md:hidden">
            <nav className="flex flex-col gap-4 px-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-wide text-[var(--muted)] hover:text-[var(--signal)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-1 text-sm font-semibold text-[var(--signal-dark)]">{t('nav.letsTalk')} <ArrowUpRight className="w-4 h-4" /></a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;