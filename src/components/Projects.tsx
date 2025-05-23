import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

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
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'gameengine1',
      title: 'Low-level Game Engine',
      description: 'A simple (but complete) game engine built in C++ with OpenGL and OpenAL, focusing on modularity and ease-of-use.',
      tags: ['C++', 'Game Development', 'OpenGL', 'OpenAL', 'ImGui'],
      github: 'https://github.com/etib-corp/etib-game-engine',
      features: [
        '3D model loading and rendering',
        'Full encapsulation of OpenGL and OpenAL API',
        'Shader management and compilation',
        'GUI engine integration with ImGui encapsulation'
      ]
    },
    {
      id: 'gameengine2',
      title: 'Game Engine',
      description: 'A complete game engine built in C++ with a focus on integrated features. (see <a class="text-cyan-500" target="_blank" href="https://github.com/etib-corp/r-type">the game</a> we made with it)',
      tags: ['C++', 'Game Development', 'ECS', 'SFML', 'OpenAL', 'Scripting'],
      github: 'https://github.com/etib-corp/lion-engine',
      features: [
        'Entity Component System (ECS) architecture',
        'Integrating Sound and Math engines',
        'Memory-efficient data structures',
        'Event system with observer pattern',
        'Log system for debugging',
      ]
    },
    {
      id: 'raytracer',
      title: 'Raytracer',
      description: 'A simple raytracer written in C++.',
      tags: ['C++', 'Raytracing', 'SFML', 'Math'],
      github: 'https:/github.com/etib-corp/raytracer',
      features: [
        'Ray-object intersection algorithms',
        'Basic shading models (diffuse, specular)',
        'Camera and scene management using config files',
        'Multi-threaded rendering for performance',
        'Camera movement and scene manipulation at runtime',
        'Image output in PNG'
      ]
    },
    {
      id: 'maverik',
      title: 'Maverik',
      description: 'This project isn\'t done yet, but it\'s a complete library for creating 3D software in C++ and Vulkan. This is my end-of-study project, and I\'m working on it with three friends of mine. (features below may be ready yet)',
      tags: ['C++', 'Vulkan', 'Software Development', '3D'],
      github: 'https://github.com/etib-corp/maverik',
      features: [
        '3D model loading and rendering',
        'Shader management and compilation',
        'Vulkan API encapsulation',
        'Multi-threaded rendering for performance'
      ]
    },
  ];

  const handleProjectClick = (id: string) => {
    setActiveProject(id === activeProject ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-cyan-500 font-mono mr-2">03.</span> Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 ${
                activeProject === project.id ? 'ring-2 ring-cyan-500' : ''
              }`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-slate-600 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
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
                        className="text-slate-600 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-4 text-slate-600 dark:text-slate-300">
                    <span dangerouslySetInnerHTML={{ __html: project.description }} />
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-mono px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${activeProject === project.id ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                  <h4 className="font-bold text-sm uppercase text-slate-500 dark:text-slate-400 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/etib-corp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium rounded-md transition-colors duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;