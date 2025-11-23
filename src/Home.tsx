import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header toggleTerminal={toggleTerminal} isLinksPage={false} />
      <main>
        <Hero />
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