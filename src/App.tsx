import React from 'react';
import TopNavBar from './components/TopNavBar';
import HeroSection from './components/HeroSection';
import SensorialSection from './components/SensorialSection';
import ComparisonSection from './components/ComparisonSection';
import EvolutionSection from './components/EvolutionSection';
import TechnicalSection from './components/TechnicalSection';
import ProofSection from './components/ProofSection';
import ApplicationsSection from './components/ApplicationsSection';
import CatalogSection from './components/CatalogSection';
import SustainabilitySection from './components/SustainabilitySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-inverse-surface selection:text-surface">
      <TopNavBar />
      <main>
        <HeroSection />
        <SensorialSection />
        <ComparisonSection />
        <EvolutionSection />
        <TechnicalSection />
        <ProofSection />
        <ApplicationsSection />
        <CatalogSection />
        <SustainabilitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

