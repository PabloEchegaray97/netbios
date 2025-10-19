import React from 'react';
import './Neighborhoods.css';

const Neighborhoods: React.FC = () => {
  const neighborhoods = [
    '8 de diciembre', 'Los Paraísos', 'Corredor Urbano 2', 'Los Tulipanes',
    'Gas del Estado 2', 'Jardín Victoria', 'Hipódromo', 'Covitedic',
    'El Labrador', 'San Vicente', 'Los Arrayanes', 'Cali',
    'Amei', 'El Ruiseñor', 'Eva Perón', 'Parque Oeste',
    'Bicentenario', 'La Estanzuela'
  ];

  return (
    <section className="neighborhoods">
      <div className="container">
        <h3 className="neighborhoods-title">Barrios</h3>
        <div className="neighborhoods-grid">
          {neighborhoods.map((neighborhood, index) => (
            <span key={index} className="neighborhood-item">
              {neighborhood}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Neighborhoods;
