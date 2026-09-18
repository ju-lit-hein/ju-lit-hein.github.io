import React from 'react';
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ContactProps {
  openResume: () => void;
}

const Contact: React.FC<ContactProps> = ({ openResume }) => {
  const { t } = useTranslation();
  const links = [
    { label: 'julien.ferdinand@epitech.eu', href: 'mailto:julien.ferdinand@epitech.eu', icon: Mail },
    { label: 'github.com/ju-lit-hein', href: 'https://github.com/ju-lit-hein', icon: Github },
    { label: 'linkedin.com/in/julienferdinand', href: 'https://linkedin.com/in/julienferdinand', icon: Linkedin },
    { label: 'instagram.com/julithein', href: 'https://instagram.com/julithein', icon: Instagram },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="section-rule pt-5 mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--signal-dark)] mb-5">{t('contact.label')}</p>
          <h2 className="display-title whitespace-pre-line text-5xl md:text-8xl font-bold">{t('contact.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr] gap-12">
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)] mb-8">{t('contact.description')}</p>

            <div className="space-y-4 mb-9">{links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center text-[var(--ink)] hover:text-[var(--signal)] transition-colors"><Icon className="w-5 h-5 text-[var(--signal)] mr-3" />{label}</a>)}</div>

            <div className="border-t border-[var(--line)] pt-5 flex flex-wrap items-center justify-between gap-4">
              <div><h4 className="font-semibold mb-1">{t('contact.shortVersion')}</h4><p className="text-sm text-[var(--muted)]">{t('contact.shortDescription')}</p></div>
              <button type="button" onClick={openResume} className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--ink)] text-[var(--paper)] text-sm font-semibold hover:bg-[var(--signal)] transition-colors">{t('actions.downloadResume')} <ArrowUpRight className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="md:border-l md:border-[var(--line)] md:pl-10"><p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-5">{t('contact.noteLabel')}</p><p className="text-2xl md:text-3xl font-semibold leading-tight">{t('contact.note')}</p></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;