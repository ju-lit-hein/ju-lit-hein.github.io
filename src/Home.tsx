import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';

function Home() {
  const [showTerminal, setShowTerminal] = useState(false);

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
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header toggleTerminal={toggleTerminal} />
      <main>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {showTerminal && <Terminal onClose={toggleTerminal} />}
      </main>
      <Footer />
    </div>
  );
}

export default Home;