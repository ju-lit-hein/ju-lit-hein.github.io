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
                Hello! I'm Julien, a passionate software developer currently in my third year at Epitech La Réunion,
                where I'm honing my skills in systems programming and software architecture.
              </p>
              <p>
                My journey in programming began with C, which gave me a strong foundation in memory management
                and algorithmic thinking. Since then, I've expanded my expertise to include C++ and Rust,
                embracing modern programming paradigms while maintaining a deep appreciation for efficient,
                performant code.
              </p>
              <p>
                I'm particularly fascinated by graphical programming, which has led me to learn OpenGL for
                a project in my first year at Epitech. After working hard to display a simple cube on the screen led me to
                develop my own 3d game engine (not alone of course) in C++ and OpenGL, which was a challenging yet rewarding experience.
                In second year, we even developed a VR project - a native android application - in C++ using OpenGL ES that runs
                on Meta Quest.
              </p>
              <p>
                From now on, I'm doing an end-of-study project in C++ and Vulkan, starting a 3D software engine from scratch. We're first
                doing two libraries, one for the 3D engine and one for the GUI, both of which will be open source.
              </p>
              <p>
                Beyond coding, I'm enthusiastic about development tools and workflows. I'm experienced with Git,
                GitHub, and various build systems that help create maintainable, collaborative projects.
              </p>
                <p>
                When I'm not coding, you might find me exploring roads on my motorcycle, I&nbsp;drive&nbsp;an&nbsp;MT09&nbsp;by&nbsp;the&nbsp;way&nbsp;✌️.
                </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-cyan-500">Education</h3>
              <div className="mb-8">
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold">Epitech</h4>
                  <span className="text-sm text-slate-500 dark:text-slate-400">2022 - Present</span>
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