import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientsPartners from './components/ClientsPartners';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import AboutSection from './components/AboutSection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <ClientsPartners />
        <Capabilities />
        <Process />
        <AboutSection />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;