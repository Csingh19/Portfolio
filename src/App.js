import React, { useState, useEffect } from 'react';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Welcome from './Welcome';
import Projects from './Projects';

import './App.css';

function App() {
  const [welcomeDone, setWelcomeDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setWelcomeDone(true), 6000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!welcomeDone && <Welcome onDone={() => setWelcomeDone(true)} />}
      <div className={`main ${welcomeDone ? 'main-content' : ''}`}>  {/* Conditionally apply animation class */}
        {welcomeDone && (
          <>
            <header>
              <h1>Chirayu Singh</h1>
            </header>
            <section><About /></section>
            <section><Contact /></section>
            <section><Projects /></section>
            {/*<section><Experience /></section>*/}
            {/*<section><Skills /></section>*/}
            
            <footer>
              © {new Date().getFullYear()} Chirayu Singh. All rights reserved.
            </footer>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
