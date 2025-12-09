import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import StickyCTA from './components/StickyCTA';
import AIJobGenerator from './components/AIJobGenerator';
import ProposalSection from './components/ProposalSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <ProposalSection />
        <AIJobGenerator />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
               <img src="/logo.png" alt="Resto Jobs Premium Brand" className="h-16 w-auto object-contain" />
            </div>
            <div className="mt-8 md:mt-0 text-center md:text-right">
              <p className="text-base text-gray-400">
                &copy; 2024 Resto Jobs India. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                📍 Koramangala, Bengaluru | PAN-India Operations
              </p>
            </div>
          </div>
        </div>
      </footer>

      <StickyCTA />
    </div>
  );
}

export default App;