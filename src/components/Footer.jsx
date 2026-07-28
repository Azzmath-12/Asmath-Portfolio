import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 pt-6 border-t border-[#E5E7EB] text-center space-y-3 pb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-5xl mx-auto px-2">
        <div>
          <p className="text-xs font-bold text-[#1F2937]">
            Designed & Developed by {personalDetails.name}
          </p>
          <p className="text-[11px] text-[#6B7280] font-medium mt-0.5">
            © 2026 Asmath Batcha S • All Rights Reserved
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-[#F8F9FC] hover:bg-[#6D28D9] text-[#6B7280] hover:text-white border border-[#E5E7EB] transition-all flex items-center gap-1.5 text-xs font-bold shadow-2xs"
          title="Back to Top"
        >
          <FaChevronUp size={12} />
          <span>Back to Top</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
