import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#1F2937] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12 max-w-lg w-full text-center shadow-xl space-y-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-[#EDE9FE] rounded-full blur-2xl pointer-events-none" />

        {/* Large Graphic Header */}
        <div className="relative inline-block">
          <span className="text-7xl sm:text-9xl font-black text-[#6D28D9] tracking-widest opacity-15 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center shadow-md">
              <FaExclamationTriangle size={32} />
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            Oops! The page you are looking for doesn't exist.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#6D28D9]/25 hover:shadow-lg transition-all active:scale-95"
          >
            <FaHome size={14} />
            <span>Back to Home</span>
          </Link>
        </div>

      </motion.div>
    </div>
  );
};

export default NotFound;
