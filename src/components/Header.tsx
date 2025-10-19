import React from 'react';
import logoImage from '../assets/logo.webp';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img src={logoImage} alt="NETBIOS" className="logo" />
          <p className="tagline">Internet Fibra Óptica</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
