import { ArrowDownRight, ArrowUpRight, File, Github, Instagram, Linkedin, MapPin } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface MainProps {
  openResume: () => void;
}

const Main: React.FC<MainProps> = ({ openResume }) => {
  const { t } = useTranslation();
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    const text = t('hero.tagline');
    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    terminalRef.current.innerHTML = '';

    const typeText = () => {
      if (terminalRef.current) {
        if (index < text.length) {
          terminalRef.current.innerHTML = text.slice(0, index + 1) + '<span class="cursor animate-ping">|</span>';
          index++;
          timeoutId = setTimeout(typeText, 100);
        } else {
            terminalRef.current.innerHTML = text + '<span class="cursor animate-ping">|</span>';
        }
      }
    };

    timeoutId = setTimeout(typeText, 1000);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [t]);

  const links = [
        { name: t('hero.links.github'), url: 'https://github.com/ju-lit-hein', icon: Github },
        { name: t('hero.links.linkedin'), url: 'https://www.linkedin.com/in/julienferdinand', icon: Linkedin },
        { name: t('hero.links.instagram'), url: 'https://www.instagram.com/julithein', icon: Instagram },
        { name: t('hero.links.resume'), url: '#resume', icon: File, action: openResume },
      ];

  return (
    <section id="main" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-6xl w-full mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-end">
          <div className="max-w-3xl">
            <div className="reveal-up reveal-delay-1 flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.18em] text-[var(--signal-dark)]">
              <span className="h-px w-10 bg-[var(--signal)]" /> {t('hero.availability')}
            </div>
            <h1 className="reveal-up reveal-delay-1 display-title text-5xl sm:text-6xl md:text-8xl font-bold mb-8">
              Julien<br /><span className="text-[var(--signal)]">Ferdinand.</span>
            </h1>
            <div className="reveal-up reveal-delay-2 mb-7 text-xl sm:text-2xl md:text-3xl font-medium text-[var(--muted)]">
              <span ref={terminalRef} className="font-mono" />
            </div>
            <p className="reveal-up reveal-delay-2 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--muted)] mb-9">
              {t('hero.description')}
            </p>
            <div className="reveal-up reveal-delay-3 flex flex-wrap items-center gap-5">
              <a href="#projects" className="inline-flex items-center gap-3 bg-[var(--ink)] text-[var(--paper)] px-5 py-3 text-sm font-semibold hover:bg-[var(--signal)] transition-colors">
                {t('actions.selectedWork')} <ArrowDownRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--signal-dark)] hover:text-[var(--signal)] transition-colors">
                {t('actions.conversation')} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <aside className="reveal-up reveal-delay-3 lg:pb-2">
            <div className="border-t-2 border-[var(--ink)] pt-5 mb-7">
              <div className="flex justify-between font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] mb-7">
                <span>{t('hero.currentChapter')}</span><span>{t('hero.chapterDate')}</span>
              </div>
              <h2 className="text-2xl font-semibold leading-tight mb-3">{t('hero.chapterTitle')}</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{t('hero.chapterDescription')}</p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)] mb-8"><MapPin className="w-4 h-4 text-[var(--signal)]" /> {t('hero.location')}</div>
            <div className="grid grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
              <div className="bg-[var(--paper)] p-4"><span className="block text-2xl font-semibold">04+</span><span className="font-mono text-[10px] uppercase text-[var(--muted)]">{t('hero.yearsCoding')}</span></div>
              <div className="bg-[var(--paper)] p-4"><span className="block text-2xl font-semibold">C++</span><span className="font-mono text-[10px] uppercase text-[var(--muted)]">{t('hero.coreLanguage')}</span></div>
            </div>
          </aside>
        </div>

        <div className="mt-20 pt-6 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">{t('hero.findMe')}</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                onClick={link.action ? (event) => { event.preventDefault(); link.action?.(); } : undefined}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={t('actions.openNewTab', { name: link.name })}
                className="group inline-flex items-center gap-2 font-mono text-xs text-[var(--muted)] hover:text-[var(--signal)] transition-colors focus:outline-none focus:text-[var(--signal)]"
              >
                  <span className="text-[var(--signal)]"><link.icon className="w-4 h-4" aria-hidden="true" /></span>
                <span>{link.name}</span><ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;