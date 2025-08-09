import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductsSection from './components/ProductsSection';
import UsageSection from './components/UsageSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import SecuritySection from './components/SecuritySection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsSection />
      <UsageSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <SecuritySection />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;