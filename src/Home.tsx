import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import ResumeChooser from './components/ResumeChooser';

function Home() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const toggleTerminal = () => {
    setShowTerminal(!showTerminal);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '/' || e.code === 'Slash')) {
        e.preventDefault();
        setShowTerminal((s) => !s);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
  return (
    <div className="site-shell min-h-screen bg-[var(--paper)] text-[var(--ink)] transition-colors duration-300">
      <Header toggleTerminal={toggleTerminal} />
      <main>
        <Main openResume={() => setShowResume(true)} />
        <About />
        <Skills />
        <Projects />
        <Contact openResume={() => setShowResume(true)} />
        {showTerminal && <Terminal onClose={toggleTerminal} />}
        {showResume && <ResumeChooser onClose={() => setShowResume(false)} />}
      </main>
      <Footer />
    </div>
  );
}

export default Home;