import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, FileText, Languages, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type ResumeFormat = 'pretty' | 'ats';
type ResumeLanguage = 'fr' | 'en';

interface ResumeChooserProps {
  onClose: () => void;
}

const ResumeChooser: React.FC<ResumeChooserProps> = ({ onClose }) => {
  const { t, i18n } = useTranslation();
  const [format, setFormat] = useState<ResumeFormat>('pretty');
  const [language, setLanguage] = useState<ResumeLanguage>(i18n.language === 'en' ? 'en' : 'fr');
  const [isOpen, setIsOpen] = useState(false);
  const resumePath = `/assets/cv_${format}_${language}.pdf`;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--ink)]/75 p-4 md:p-8" role="dialog" aria-modal="true" aria-labelledby="resume-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden bg-[var(--paper)] text-[var(--ink)] shadow-2xl">
        <header className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4 md:px-7">
          <div className="flex items-center gap-3"><FileText className="h-5 w-5 text-[var(--signal)]" /><span className="font-mono text-xs uppercase tracking-wider">{isOpen ? t('resume.preview') : t('resume.label')}</span></div>
          <button type="button" onClick={onClose} className="p-2 text-[var(--muted)] hover:text-[var(--signal)]" aria-label={t('actions.closeResume')}><X className="h-5 w-5" /></button>
        </header>

        {!isOpen ? (
          <div className="overflow-y-auto p-6 md:p-10">
            <div className="max-w-2xl"><h2 id="resume-title" className="display-title whitespace-pre-line text-4xl font-bold md:text-6xl">{t('resume.title')}</h2><p className="mt-5 text-sm leading-relaxed text-[var(--muted)] md:text-base">{t('resume.intro')}</p></div>
            <div className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
              <section className="bg-[var(--paper)] p-6 md:p-8"><div className="mb-7 flex items-center justify-between"><div><p className="font-mono text-xs text-[var(--signal-dark)]">01</p><h3 className="mt-2 text-xl font-semibold">{t('resume.formatTitle')}</h3></div><FileText className="h-5 w-5 text-[var(--signal)]" /></div><div className="grid gap-3 sm:grid-cols-2">{(['pretty', 'ats'] as ResumeFormat[]).map((option) => <button key={option} type="button" onClick={() => setFormat(option)} className={`p-4 text-left border transition-colors ${format === option ? 'border-[var(--signal)] bg-[var(--signal)]/10' : 'border-[var(--line)] hover:border-[var(--signal)]'}`}><span className="flex items-center justify-between gap-3 font-semibold">{t(`resume.formats.${option}.title`)}{format === option && <Check className="h-4 w-4 text-[var(--signal)]" />}</span><span className="mt-5 block text-xs leading-relaxed text-[var(--muted)]">{t(`resume.formats.${option}.description`)}</span></button>)}</div></section>
              <section className="bg-[var(--ink)] p-6 text-[var(--paper)] md:p-8"><div className="mb-7 flex items-center justify-between"><div><p className="font-mono text-xs text-[var(--signal)]">02</p><h3 className="mt-2 text-xl font-semibold">{t('resume.languageTitle')}</h3></div><Languages className="h-5 w-5 text-[var(--signal)]" /></div><div className="grid grid-cols-2 gap-3">{(['fr', 'en'] as ResumeLanguage[]).map((option) => <button key={option} type="button" onClick={() => setLanguage(option)} className={`p-4 text-left border transition-colors ${language === option ? 'border-[var(--signal)] bg-[var(--signal)]/15' : 'border-[var(--paper)]/20 hover:border-[var(--signal)]'}`}><span className="flex items-center justify-between font-mono text-sm uppercase">{option}{language === option && <Check className="h-4 w-4 text-[var(--signal)]" />}</span><span className="mt-5 block text-xs text-[var(--paper)]/65">{t(`resume.languages.${option}`)}</span></button>)}</div></section>
            </div>
            <div className="mt-7 flex justify-end"><button type="button" onClick={() => setIsOpen(true)} className="inline-flex items-center gap-2 bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--paper)] hover:bg-[var(--signal)]">{t('resume.open')} <ArrowUpRight className="h-4 w-4" /></button></div>
          </div>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] px-5 py-3 md:px-7"><button type="button" onClick={() => setIsOpen(false)} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--muted)] hover:text-[var(--signal)]"><ArrowLeft className="h-4 w-4" /> {t('resume.changeSelection')}</button><a href={resumePath} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs text-[var(--signal-dark)] hover:text-[var(--signal)]">{t('resume.openNewTab')} <ArrowUpRight className="h-3 w-3" /></a></div><iframe title={`${t(`resume.formats.${format}.title`)} - ${t(`resume.languages.${language}`)}`} src={resumePath} className="min-h-[70vh] w-full flex-1 bg-white" /></div>
        )}
      </div>
    </div>
  );
};

export default ResumeChooser;
