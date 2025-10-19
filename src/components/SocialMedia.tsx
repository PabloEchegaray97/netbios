import React from 'react';
import facebookIcon from '../assets/facebook.webp';
import instagramIcon from '../assets/instagram.webp';
import './SocialMedia.css';

const SocialMedia: React.FC = () => {
  const handleFacebookClick = () => {
    const facebookUrl = 'https://www.facebook.com/p/Netbios-Internet-100043336125568/?locale=es_LA';
    window.open(facebookUrl, '_blank');
  };

  const handleInstagramClick = () => {
    const instagramUrl = 'https://www.instagram.com/netbios.internet/';
    window.open(instagramUrl, '_blank');
  };

  return (
    <section className="social-media">
      <div className="container">
        <h3 className="social-title">Nuestras redes</h3>
        <div className="social-links">
          <button className="social-button facebook" onClick={handleFacebookClick} aria-label="Síguenos en Facebook">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </button>
          <button className="social-button instagram" onClick={handleInstagramClick} aria-label="Síguenos en Instagram">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
