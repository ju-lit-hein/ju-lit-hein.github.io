import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-cyan-500 font-mono mr-2">04.</span> Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
              I'll do my best to get back to you!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-500 mr-3" />
                <a
                  href="mailto:julien.ferdinand@epitech.eu"
                  className="text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  julien.ferdinand@epitech.eu
                </a>
              </div>
              <div className="flex items-center">
                <Github className="w-5 h-5 text-cyan-500 mr-3" />
                <a
                  href="https://github.com/ju-lit-hein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  github.com/ju-lit-hein (personal)
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-5 h-5 text-cyan-500 mr-3" />
                <a
                  href="https://linkedin.com/in/julienferdinand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  linkedin.com/in/julienferdinand
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="w-5 h-5 text-cyan-500 mr-3" />
                <a
                  href="https://instagram.com/julithein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  instagram.com/julithein
                </a>
              </div>
              <div className="flex items-center">
                <Github className="w-5 h-5 text-cyan-500 mr-3" />
                <a
                  href="https://github.com/etib-corp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  github.com/etib-corp (friends and I)
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-lg mb-2">Resume</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Download my resume for a detailed overview of my experience and skills.
              </p>
              <a
                href="/src/assets/resume.pdf"
                className="inline-flex items-center px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-md transition-colors duration-300 text-sm"
              >
                Download resume
              </a>
            </div>
          </div>

          <div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;