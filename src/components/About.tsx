import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  const interests = t('about.interests', { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-24 bg-[var(--paper-deep)]/60">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="section-rule pt-5 flex flex-col md:flex-row gap-14 items-start">
          <div className="md:w-5/12">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--signal-dark)] mb-5">{t('about.label')}</p>
            <h2 className="display-title whitespace-pre-line text-4xl md:text-6xl font-bold mb-7">{t('about.title')}</h2>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">{t('about.disciplines')}</p>
          </div>
          <div className="md:w-7/12 text-[var(--muted)] leading-relaxed">
            <div className="space-y-5 text-sm md:text-base">
              {[0, 1, 2, 3].map((index) => <p key={index}>{t(`about.paragraphs.${index}`)}</p>)}
            </div>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
          <div className="bg-[var(--paper)] p-6 md:p-8">
            <div className="flex justify-between gap-5 mb-8"><h3 className="font-semibold">{t('about.education')}</h3><span className="font-mono text-xs text-[var(--muted)]">2022 — 2027</span></div>
            <h4 className="text-lg font-semibold mb-1">Epitech Reunion</h4>
            <p className="text-sm text-[var(--muted)]">{t('about.epitechDegree')}</p>
            <div className="mt-6 pt-4 border-t border-[var(--line)] flex justify-between gap-5"><span className="text-sm">Inha University</span><span className="font-mono text-xs text-[var(--muted)]">2025 — 2026</span></div>
            <p className="text-sm text-[var(--muted)] mt-1">{t('about.exchange')}</p>
          </div>
          <div className="bg-[var(--ink)] text-[var(--paper)] p-6 md:p-8">
            <div className="flex justify-between gap-5 mb-8"><h3 className="font-semibold">{t('about.bring')}</h3><span className="font-mono text-xs text-[var(--paper)]/50">01—05</span></div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => <span key={interest} className="border border-[var(--paper)]/20 px-3 py-2 text-xs text-[var(--paper)]/80">{interest}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;