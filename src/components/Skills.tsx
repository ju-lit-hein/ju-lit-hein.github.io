import React, { useState } from 'react';
import { Terminal, Cpu, Code, Server, Github, GitBranch } from 'lucide-react';
import { C, CPlusPlus, GitHubDark, GitHubLight, Python, RustDark, RustLight, VisualStudioCode } from 'developer-icons';
import { ThemeContext } from '../context/ThemeContext';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    logo?: React.ReactNode;
  }[];
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('software');

  const theme = React.useContext(ThemeContext)!;
  const isDarkMode = theme.theme === 'dark';

  const skillCategories: SkillCategory[] = [
    {
      id: 'software',
      name: 'Software Development',
      icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
      skills: [
        { name: 'C', logo: <C className="w-14 h-14" /> },
        { name: 'C++', logo: <CPlusPlus className="w-14 h-14" /> },
        { name: 'Rust', logo: <>{isDarkMode ? <RustLight className="w-14 h-14" /> : <RustDark className="w-14 h-14" />}</>},
        { name: 'Python', logo: <Python className="w-14 h-14" /> },
      ],
    },
    {
      id: 'graphical',
      name: 'Graphical Programming',
      icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />,
      skills: [
        { name: 'OpenGL', logo: <p>OpenGL</p> },
        { name: 'Vulkan', logo: <p>Vulkan</p> },
        { name: 'SDL', logo: <p>SDL</p> },
        { name: 'Cuda', logo: <p>CUDA</p> },
        { name: 'OpenGL ES', logo: <p>OpenGL ES</p> },
        { name: 'OpenXR', logo: <p>OpenXR</p> },
      ],
    },
    {
      id: 'tools',
      name: 'Dev Tools',
      icon: <Terminal className="w-5 h-5 md:w-6 md:h-6" />,
      skills: [
        { name: 'Git & GitHub', logo: <>{isDarkMode ? <GitHubLight className="w-14 h-14" /> : <GitHubDark className="w-14 h-14" />}</> },
        { name: 'Debugging Tools', logo: <p>Debugging Tools</p> },
        { name: 'VS Code', logo: <VisualStudioCode className="w-14 h-14" /> },
        { name: 'Make/CMake', logo: <p>Make/CMake</p> },
      ],
    },
    {
      id: 'other',
      name: 'Other',
      icon: <Server className="w-5 h-5 md:w-6 md:h-6" />,
      skills: [
        { name: 'Algorithms', logo: <p>Algorithms</p> },
        { name: 'Data Structures', logo: <p>Data Structures</p> },
        { name: 'Software Architecture', logo: <p>Software Architecture</p> },
        { name: 'Unit Testing', logo: <p>Unit Testing</p> },
        { name: 'Documentation', logo: <p>Documentation</p> },
      ],
    },
  ];

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-cyan-500 font-mono mr-2">02.</span> Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 border border-slate-200 dark:border-slate-700">
              <nav className="space-y-2">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`w-full flex items-center p-3 rounded-md transition-colors text-left ${
                      activeCategory === category.id
                        ? 'bg-cyan-500/10 text-cyan-500'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-700/50'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="mr-3">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-6">
                {skillCategories.find(cat => cat.id === activeCategory)?.name}
              </h3>

              <div className="space-y-6">
                {activeSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      {skill.logo}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;