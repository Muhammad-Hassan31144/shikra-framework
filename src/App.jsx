import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import JourneyMap from './components/JourneyMap';
import MitreMapping from './components/MitreMapping';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <div className="cyber-grid fixed inset-0 opacity-20 pointer-events-none"></div>
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <ProductShowcase />
                <JourneyMap />
                <MitreMapping />
                <Pricing />
                <Testimonials />
              </motion.div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

