import React from 'react';
import './CallToAction.css';

const CallToAction: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+5492613661040'; // Número de NETBIOS
    const message = 'Hola! Quiero conocer los planes de NETBIOS, soy del barrio: ';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="call-to-action">
      <div className="container">
        <div className="cta-content">
          <p className="cta-text">¡Consultá por nuestros planes y cobertura!</p>
          <button className="whatsapp-button" onClick={handleWhatsAppClick}>
            Contactanos por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
