import React, { useState } from 'react';
import './About.css';

function Contact() {
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
        <h1>Contact</h1>
      </button>

      <div className="content" style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="container">
          <div className="left-column">
            <img src="IMG_0992.jpg" alt="Your Name" className="profile-pic" />
          </div>
          <div className="right-column">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> Chirayu.singh12@gmail.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a href="www.linkedin.com/in/chirayu-singh-9b58ab234">LinkedIn</a>
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/yourusername">GitHub</a>
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Contact;
