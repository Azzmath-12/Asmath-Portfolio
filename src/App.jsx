import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function MainPortfolioLayout() {
  const [activeTab, setActiveTab] = useState('about');

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'about':
        return <About key="about" />;
      case 'skills':
        return <Skills key="skills" />;
      case 'projects':
        return <Projects key="projects" />;
      case 'timeline':
        return <Timeline key="timeline" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <About key="about" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#1F2937] font-sans relative py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Main Container Layout */}
      <main className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative">
        
        {/* Left Sidebar (Fixed on Desktop) */}
        <Sidebar />

        {/* Right Main Content Panel */}
        <div className="flex-1 w-full bg-[#FFFFFF] rounded-2xl border border-[#E5E7EB] shadow-sm relative min-h-[600px] flex flex-col justify-between overflow-hidden">
          
          {/* Top Sticky Navbar */}
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Dynamic Content Area with Framer Motion transitions */}
          <div className="p-4 sm:p-6 lg:p-8 flex-1">
            <AnimatePresence mode="wait">
              {renderActiveSection()}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-6 lg:px-8">
            <Footer />
          </div>

        </div>

      </main>

    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPortfolioLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
