import React from 'react';
import { Bolt, Security, FastForward } from '@mui/icons-material';
import './FeatureCards.css';

const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: <Bolt sx={{ fontSize: { xs: 36, sm: 40, md: 48 } }} />,
      title: 'Máxima Velocidad',
      description: 'Planes con velocidad simétrica. Misma velocidad de subida y bajada.'
    },
    {
      icon: <Security sx={{ fontSize: { xs: 36, sm: 40, md: 48 } }} />,
      title: 'Conexión Estable',
      description: 'La fibra óptica directa a tu casa garantiza una conexión sin microcortes.'
    },
    {
      icon: <FastForward sx={{ fontSize: { xs: 36, sm: 40, md: 48 } }} />,
      title: 'Instalación Rápida',
      description: 'Coordinamos la instalación en menos de 72hs para que navegues al instante.'
    }
  ];

  return (
    <section className="feature-cards">
      <div className="container">
        <div className="cards-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="card-icon">{feature.icon}</div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
