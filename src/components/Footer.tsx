import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          <a href="https://netbios-internet.netlify.app/" target="_blank" rel="noopener noreferrer" className="footer-link">
            netbios.com.ar
          </a>
          {' | '}
          <a href="https://www.facebook.com/p/Netbios-Internet-100043336125568/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="footer-link">
            @Netbiosinternet
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
