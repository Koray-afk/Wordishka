import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div>
          <h2>WORDISHKA</h2>
          <p>Master new languages with our platform.</p>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <h4>Platform</h4>
          <ul>
            <li>Dictionary</li>
            <li>Lessons</li>
            <li>Quizzes</li>
            <li>Progress</li>
          </ul>
        </div>
        <div>
          <h4>Languages</h4>
          <ul>
            <li>Spanish</li>
            <li>French</li>
            <li>German</li>
            <li>View All</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
          </ul>
        </div>
      </div>
    </footer>
    
  );
}

export default Footer;