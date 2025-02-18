import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Home theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Certificates theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;