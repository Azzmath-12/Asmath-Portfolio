import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaBriefcase, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { timelineData } from '../data/portfolioData';

const getTypeDetails = (type) => {
  switch (type) {
    case 'internship':
      return {
        icon: FaBriefcase,
        color: 'text-[#6D28D9]',
        bg: 'bg-[#EDE9FE]',
        borderColor: 'border-[#6D28D9]/30',
        badge: 'Internship'
      };
    case 'course':
      return {
        icon: FaCertificate,
        color: 'text-purple-700',
        bg: 'bg-purple-100',
        borderColor: 'border-purple-300',
        badge: 'Course & Cert'
      };
    case 'education':
      return {
        icon: FaGraduationCap,
        color: 'text-indigo-700',
        bg: 'bg-indigo-100',
        borderColor: 'border-indigo-300',
        badge: 'Education'
      };
    default:
      return {
        icon: FaBriefcase,
        color: 'text-[#6D28D9]',
        bg: 'bg-[#EDE9FE]',
        borderColor: 'border-[#6D28D9]/30',
        badge: 'Experience'
      };
  }
};

const Timeline = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1F2937] tracking-tight">
            Journey & Qualifications
          </h2>
          <div className="h-1 w-12 bg-[#6D28D9] rounded-full mt-2" />
        </div>
        <p className="text-[#6B7280] text-xs lg:text-sm mt-1.5 font-medium">
          A clean unified vertical timeline of Internship Experience, Professional Certification Courses, and Academic Qualifications.
        </p>
      </div>

      {/* Vertical Timeline Wrapper */}
      <div className="relative pl-6 md:pl-10 space-y-6 before:absolute before:left-3 md:before:left-5 before:top-3 before:bottom-3 before:w-[2px] before:bg-[#6D28D9]">
        {timelineData.map((item, idx) => {
          const typeMeta = getTypeDetails(item.type);
          const Icon = typeMeta.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Node Marker */}
              <div className={`absolute -left-6 md:-left-10 top-2 w-7 h-7 md:w-9 md:h-9 rounded-full ${typeMeta.bg} ${typeMeta.color} border-2 border-white group-hover:border-[#6D28D9] flex items-center justify-center shadow-sm transition-colors z-10`}>
                <Icon size={14} />
              </div>

              {/* Timeline Card */}
              <div className="bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#6D28D9]/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 space-y-3">
                
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E7EB] pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full ${typeMeta.bg} ${typeMeta.color} border ${typeMeta.borderColor}`}>
                        {typeMeta.badge}
                      </span>
                      <span className="text-xs text-[#6B7280] font-semibold">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1F2937] mt-1.5 group-hover:text-[#6D28D9] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6D28D9] font-semibold">
                      {item.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#6B7280] font-semibold bg-[#F8F9FC] px-3 py-1.5 rounded-lg border border-[#E5E7EB] self-start sm:self-center">
                    <FaCalendarAlt size={12} className="text-[#6D28D9]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Highlights List */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2 pt-1">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#6B7280] leading-relaxed">
                        <FaCheckCircle className="text-[#6D28D9] mt-0.5 flex-shrink-0" size={12} />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Timeline;
