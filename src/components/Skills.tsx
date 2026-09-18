import React from 'react';
import { AppWindow, Braces, Check, Cpu, GitBranch, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Capability {
  number: string;
  key: 'systems' | 'graphics' | 'web' | 'practice';
  icon: React.ReactNode;
}

const capabilities: Capability[] = [
  {
    number: '01',
    key: 'systems',
    icon: <Braces className="h-5 w-5" />,
  },
  {
    number: '02',
    key: 'graphics',
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    number: '03',
    key: 'web',
    icon: <AppWindow className="h-5 w-5" />,
  },
  {
    number: '04',
    key: 'practice',
    icon: <GitBranch className="h-5 w-5" />,
  },
];

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const getTools = (key: Capability['key']) => t(`capabilities.rows.${key}.tools`, { returnObjects: true }) as string[];
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="section-rule pt-5 mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--signal-dark)] mb-5">{t('capabilities.label')}</p>
            <h2 className="display-title whitespace-pre-line text-4xl md:text-6xl font-bold">{t('capabilities.title')}</h2>
          </div>
          <p className="max-w-md text-sm md:text-base leading-relaxed text-[var(--muted)]">
            {t('capabilities.intro')}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.45fr_0.55fr] gap-10 lg:gap-16 items-start">
          <div className="border-t-2 border-[var(--ink)]">
            {capabilities.map((capability) => (
              <article key={capability.number} className="group grid grid-cols-[2.5rem_1fr] md:grid-cols-[3.5rem_1fr_auto] gap-4 md:gap-7 py-7 border-b border-[var(--line)] hover:bg-[var(--paper-deep)]/50 transition-colors">
                <span className="font-mono text-xs text-[var(--signal-dark)] pt-1">{capability.number}</span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[var(--signal)]">{capability.icon}</span>
                    <h3 className="text-lg md:text-xl font-semibold">{t(`capabilities.rows.${capability.key}.title`)}</h3>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">{t(`capabilities.rows.${capability.key}.description`)}</p>
                  <div className="flex flex-wrap gap-2 mt-4 md:hidden">
                    {getTools(capability.key).map((tool) => <span key={tool} className="font-mono text-[10px] border border-[var(--line)] px-2 py-1 text-[var(--muted)]">{tool}</span>)}
                  </div>
                </div>
                <div className="hidden md:flex flex-wrap justify-end gap-2 max-w-[14rem] pt-1">
                  {getTools(capability.key).map((tool) => <span key={tool} className="font-mono text-[10px] border border-[var(--line)] px-2 py-1 h-fit text-[var(--muted)] group-hover:border-[var(--signal)] transition-colors">{tool}</span>)}
                </div>
              </article>
            ))}
          </div>

          <aside className="bg-[var(--ink)] text-[var(--paper)] p-6 md:p-8 lg:sticky lg:top-28">
            <div className="flex items-center justify-between mb-10">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--paper)]/55">{t('capabilities.workingPrinciples')}</span>
              <Terminal className="w-4 h-4 text-[var(--signal)]" />
            </div>
            <ul className="space-y-5">
              {(t('capabilities.principles', { returnObjects: true }) as string[]).map((principle) => (
                <li key={principle} className="flex gap-3 text-sm leading-relaxed text-[var(--paper)]/80">
                  <Check className="w-4 h-4 shrink-0 text-[var(--signal)] mt-0.5" />
                  {principle}
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-5 border-t border-[var(--paper)]/15 flex items-end justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--paper)]/45">{t('capabilities.approach')}</span>
              <span className="text-2xl font-semibold text-[var(--signal)]">01—04</span>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)]">
          {[
            ['04+', t('capabilities.metrics.years')],
            ['05', t('capabilities.metrics.disciplines')],
            ['∞', t('capabilities.metrics.curiosity')],
            ['1', t('capabilities.metrics.detail')],
          ].map(([value, label]) => (
            <div key={label} className="bg-[var(--paper)] p-4 md:p-5">
              <strong className="block text-2xl md:text-3xl font-semibold">{value}</strong>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;