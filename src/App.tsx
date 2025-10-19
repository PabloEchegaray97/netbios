import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import LaunchOffer from './components/LaunchOffer';
import GoogleMaps from './components/GoogleMaps';
import Neighborhoods from './components/Neighborhoods';
import CallToAction from './components/CallToAction';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <FeatureCards />
      <LaunchOffer />
      <GoogleMaps />
      <Neighborhoods />
      <CallToAction />
      <SocialMedia />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
