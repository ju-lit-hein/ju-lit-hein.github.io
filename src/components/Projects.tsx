import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  features: string[];
}

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projectIds = ['gameengine1', 'gameengine2', 'raytracer', 'guillaume'];
  const projects = projectIds.map((id) => {
    const item = t(`projects.items.${id}`, { returnObjects: true });
    if (!item || typeof item !== 'object' || Array.isArray(item)) return null;

    const project = item as Record<string, unknown>;
    return {
      id,
      title: typeof project.title === 'string' ? project.title : id,
      description: typeof project.description === 'string' ? project.description : '',
      tags: Array.isArray(project.tags) ? project.tags.filter((tag): tag is string => typeof tag === 'string') : [],
      github: typeof project.github === 'string' ? project.github : undefined,
      demo: typeof project.demo === 'string' ? project.demo : undefined,
      features: Array.isArray(project.features) ? project.features.filter((feature): feature is string => typeof feature === 'string') : [],
    } satisfies Project;
  }).filter((project): project is Project => project !== null);

  const handleProjectClick = (id: string) => {
    setActiveProject(id === activeProject ? null : id);
  };

  return (
    <section id="projects" className="py-24 bg-[var(--paper-deep)]/60">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="section-rule pt-5 mb-12 flex items-end justify-between gap-5">
          <div><p className="font-mono text-xs uppercase tracking-wider text-[var(--signal-dark)] mb-5">{t('projects.label')}</p><h2 className="display-title whitespace-pre-line text-4xl md:text-6xl font-bold">{t('projects.title')}</h2></div>
          <span className="hidden sm:block font-mono text-xs text-[var(--muted)]">{t('projects.period')}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-[var(--paper)] overflow-hidden transition-all duration-300 ${activeProject === project.id ? 'bg-[var(--ink)] text-[var(--paper)]' : ''}`}
            >
              <div
                className="p-6 md:p-8 cursor-pointer h-full"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{t(`projects.items.${project.id}.title`)}</h3>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-[var(--muted)] hover:text-[var(--signal)] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-[var(--muted)] hover:text-[var(--signal)] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-mono px-2 py-1 border border-[var(--line)] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${activeProject === project.id ? 'max-h-96 mt-6' : 'max-h-0'}`}>
                  <h4 className="font-mono text-[10px] uppercase text-[var(--muted)] mb-3">{t('projects.keyFeatures')}</h4>
                  <ul className="list-disc list-inside space-y-2 text-[var(--muted)] text-sm">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center gap-4">
          <span className="font-mono text-xs text-[var(--muted)]">{t('projects.inspect')}</span>
          <a
            href="https://github.com/etib-corp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--signal-dark)] hover:text-[var(--signal)] transition-colors"
          >
            <Github className="w-4 h-4" /> {t('projects.viewMore')} <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;