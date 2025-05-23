import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

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
                href="/resume.pdfca"
                className="inline-flex items-center px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-md transition-colors duration-300 text-sm"
              >
                Download CV
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

              {submitSuccess && (
                <div className="mb-6 p-3 bg-green-100 text-green-800 dark:bg-green-200 rounded-md">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-md transition-colors duration-300 flex justify-center items-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;