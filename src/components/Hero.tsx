import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
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

  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center">
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
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-md transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 font-medium rounded-md transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;