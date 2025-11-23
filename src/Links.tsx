import { useEffect, useRef } from 'react';
import Header from './components/Header';
import { Instagram, Github, Linkedin, File } from 'lucide-react';


function Links() {
    const terminalRef = useRef<HTMLDivElement>(null);
      useEffect(() => {
        if (!terminalRef.current) return;

        const text = "I build complete software and web applications.";
        let index = 0;
        const typeText = () => {
          if (terminalRef.current) {
            if (index < text.length) {
              terminalRef.current.innerHTML = text.slice(0, index + 1) + '<span class="cursor animate-ping">|</span>';
              index++;
              setTimeout(typeText, 100);
            } else {
                terminalRef.current.innerHTML = text + '<span class="cursor animate-ping">|</span>';
            }
          }
        };

        setTimeout(typeText, 1000);
      }, []);

      const links = [
        { name: 'GitHub', url: 'https://github.com/ju-lit-hein' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/julienferdinand' },
        { name: 'Instagram', url: 'https://www.instagram.com/julithein' },
        { name: 'My resume', url: '/src/assets/resume.pdf' },
      ];
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header toggleTerminal={() => {}} isLinksPage={true} />
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="min-h-screen pt-20 flex items-center pl-24">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="max-w-4xl">
              <div className="text-cyan-500 mb-4 font-mono">Hi, my name is</div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Julien FERDINAND
              </h1>
              <div className="text-2xl sm:text-3xl md:text-4xl text-slate-700 dark:text-slate-300 font-medium mb-6">
                <div ref={terminalRef} className="font-mono inline"></div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-2xl">
                I'm a fourth-year student at Epitech, specializing in software development.
                I have experience working with C++, Python, Rust, and C for building system-level and application software.
                I also develop modern web applications using frameworks and tools like React, Next.js, Vite, and Tailwind CSS, focusing on creating efficient and user-friendly interfaces.
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-screen pt-20 flex flex-col items-center justify-start">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 w-full max-w-md">
            <h2 className="text-3xl font-bold mb-8">Find me on</h2>
            <div className="space-y-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${link.name} in a new tab`}
                  className="group flex items-center justify-between w-full px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-10 h-10 flex items-center justify-center rounded-md bg-cyan-50 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300">
                      {link.name === 'GitHub' ? (
                        <Github className="w-5 h-5 text-cyan-500" aria-hidden="true" />
                      ) : link.name === 'LinkedIn' ? (
                        <Linkedin className="w-5 h-5 text-cyan-500" aria-hidden="true" />
                      ): link.name === 'Instagram' ? (
                        <Instagram className="w-5 h-5 text-cyan-500" aria-hidden="true" />
                      ) : link.name === 'My resume' ? (
                        <File className="w-5 h-5 text-cyan-500" aria-hidden="true" />
                      ) : null}
                    </span>

                    <div>
                      <div className="text-lg font-medium text-slate-900 dark:text-slate-100">{link.name}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 truncate">
                        {link.url.substring(0, 30)}
                        {link.url.length > 30 ? '...' : ''}
                        </div>
                    </div>
                  </div>

                  <div className="flex items-center ml-4 text-sm text-cyan-600 dark:text-cyan-300">
                    <span className="hidden sm:inline">Open</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;