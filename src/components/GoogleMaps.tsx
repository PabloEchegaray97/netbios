import React from 'react';
import './GoogleMaps.css';

const GoogleMaps: React.FC = () => {
  return (
    <section className="google-maps-section">
      <div className="container">
        <div className="maps-container">
          <h3 className="maps-title">Nuestra Cobertura</h3>
          <div className="maps-embed">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1xCbxyWyuRdFD_YaFQMw9WJAx1-Cfbio"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cobertura NETBIOS"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMaps;
