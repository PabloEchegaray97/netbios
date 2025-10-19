import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-title">
            La ultravelocidad que esperabas,{' '}
            <span className="highlight">ahora en tu hogar.</span>
          </h2>
          <p className="hero-subtitle">
            Navegá, jugá online, mirá series en 4K y trabajá sin interrupciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
