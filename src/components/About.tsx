import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-cyan-500 font-mono mr-2">01.</span> About Me
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Hi! I'm Julien, a passionate software developer currently in my fourth year at Epitech,
                 where I'm honing my skills in systems programming, software architecture, and full-stack web development.
              </p>
              <p>
                My programming foundation started with C, which gave me strong expertise in memory management
                 and algorithmic thinking. Since then, I've expanded to include C++, Python, and Rust, embracing
                 modern paradigms while maintaining a deep appreciation for efficient, performant code.
              </p>
              <p>
                I'm particularly fascinated by graphics programming—my early projects with OpenGL led me to
                 develop a 3D game engine in C++ with my friends, and in my second year, we built a native
                 Android VR application using OpenGL ES for Meta Quest.
              </p>
              <p>
                More recently, I've been working on a Vulkan-based 3D software engine from scratch,
                 developing open-source libraries for both the 3D rendering engine and GUI.
              </p>
              <p>
                Beyond systems programming, I'm passionate about modern web development.
                I build web applications using React, Next.js, Vite, and Tailwind CSS, creating
                 efficient and user-friendly interfaces. I'm also experienced with development tools
                  including Git, GitHub, CMake, and various build systems for collaborative, maintainable projects.
              </p>
                <p>
                When I'm not coding, you might find me exploring roads on my motorcycle, I&nbsp;drive&nbsp;an&nbsp;MT09&nbsp;by&nbsp;the&nbsp;way✌️.
                </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-cyan-500">Education</h3>
              <div className="mb-8">
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold">Inha University | 인하대학교 🇰🇷</h4>
                  <span className="text-sm text-slate-500 dark:text-slate-400">2025 - 2026</span>
                </div>
                <p className="text-sm mb-2">Exchange year in Computer Science</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  During my exchange year at Inha University in South Korea, I strengthened my software development and
                   algorithm skills through intensive, project-based and theoretical courses, gaining practical
                    experience in a dynamic academic environment.
                </p>
              </div>
              <div className="mb-8">
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold">Epitech Reunion</h4>
                  <span className="text-sm text-slate-500 dark:text-slate-400">2022 - 2027</span>
                </div>
                <p className="text-sm mb-2">Master in Computer Science</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Rigorous training in software development, algorithms, and project management through
                  practical, project-based learning.
                </p>
              </div>
              <h3 className="text-xl font-bold mb-4 text-cyan-500">Interests</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Low-level Programming</li>
                <li>Graphical Programming</li>
                <li>Fullstack Web Development</li>
                <li>Performance Optimization</li>
                <li>Open Source Contribution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;