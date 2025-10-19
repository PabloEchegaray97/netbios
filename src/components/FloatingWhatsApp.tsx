import React from 'react';
import whatsappIcon from '../assets/whatsapp.webp';
import './FloatingWhatsApp.css';

const FloatingWhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+5492613661040'; // Número de NETBIOS
    const message = 'Hola! Quiero conocer los planes de NETBIOS, soy del barrio: ';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button className="floating-whatsapp" onClick={handleWhatsAppClick} aria-label="Contactar por WhatsApp">
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </button>
  );
};

export default FloatingWhatsApp;
