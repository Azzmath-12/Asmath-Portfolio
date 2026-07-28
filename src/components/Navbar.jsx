import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaFolderOpen, FaClock, FaPaperPlane } from 'react-icons/fa';

const navItems = [
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'skills', label: 'Skills', icon: FaCode },
  { id: 'projects', label: 'Projects', icon: FaFolderOpen },
  { id: 'timeline', label: 'Timeline', icon: FaClock },
  { id: 'contact', label: 'Contact', icon: FaPaperPlane },
];

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="sticky top-0 z-40 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E5E7EB] lg:rounded-t-2xl px-4 py-2 lg:py-0 shadow-sm">
      <ul className="flex items-center justify-around lg:justify-end gap-1 lg:gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <li key={item.id} className="relative">
              <button
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative flex flex-col lg:flex-row items-center gap-1 lg:gap-2 px-3 py-2.5 lg:px-5 lg:py-4 text-xs font-bold tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'text-[#6D28D9]' 
                    : 'text-[#6B7280] hover:text-[#1F2937]'
                }`}
                id={`nav-${item.id}`}
              >
                <Icon className={`text-base lg:text-sm ${isActive ? 'text-[#6D28D9]' : 'text-[#6B7280]'}`} />
                <span>{item.label}</span>

                {/* Animated purple indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#6D28D9] rounded-t-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
