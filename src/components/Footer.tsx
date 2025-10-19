import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          <a href="https://netbios-internet.netlify.app/" target="_blank" rel="noopener noreferrer" className="footer-link">
            Netbios
          </a>
          {' | '}
          <a href="https://www.instagram.com/netbios.internet/" target="_blank" rel="noopener noreferrer" className="footer-link">
            @netbios.internet
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
