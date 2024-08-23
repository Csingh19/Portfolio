import React from 'react';
import { useState } from 'react';
import './About.css';

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
    <button 
      type="button" 
      className={`collapsible ${isOpen ? 'active' : ''}`} 
      onClick={toggleContent}
    >
      <h1>About Me</h1>
    </button>
    <div className="content" style={{ display: isOpen ? 'block' : 'none' }}>
    <p>
    I am Chirayu Singh, a computer science student at the University of Nebraska-Lincoln, graduating in May 2025. My passion lies in artificial intelligence and machine learning, which I've honed through internships at Invontec LLC and Reltino LLC, where I contributed to software development and data analysis projects.
  </p>
  <p>
    I’ve developed a range of personal projects, including a resume website and a Zillow Zestimate analysis using machine learning. My technical skills span languages like Java, C++, Python, and SQL, alongside experience with AI/ML models, data structures, and algorithms.
  </p>
  <p>
    Beyond academics, I’ve led fundraising initiatives to support educational opportunities for underprivileged youth. I’m eager to apply my skills to innovative projects in AI/ML and am always open to new opportunities.
  </p>
  </div>
  </div>
);

}

export default About;
