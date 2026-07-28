import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaGraduationCap, 
  FaBullseye, 
  FaUserCheck,
  FaCheckCircle
} from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

const specializations = [
  {
    icon: FaLaptopCode,
    title: "Full Stack Web Development",
    desc: "Developing modern, responsive frontend interfaces with React.js and connecting them seamlessly with Java backends."
  },
  {
    icon: FaServer,
    title: "RESTful API & Backend Engineering",
    desc: "Designing RESTful web services, controller layers, and business logic using Core Java, Servlets, and Spring Boot."
  },
  {
    icon: FaDatabase,
    title: "Database Design & JDBC Integration",
    desc: "Structuring MySQL database tables, writing optimized SQL queries, and implementing persistent data manipulation via JDBC."
  }
];

const About = () => {
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
            About Me
          </h2>
          <div className="h-1 w-12 bg-[#6D28D9] rounded-full mt-2" />
        </div>
        <p className="text-[#6B7280] text-xs lg:text-sm mt-1.5 font-medium">
          Java Full Stack Developer based in Chennai, Tamil Nadu, India
        </p>
      </div>

      {/* Main Professional Objective Banner */}
      <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-6 lg:p-8 space-y-6 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#EDE9FE] rounded-full blur-2xl pointer-events-none" />
        
        <div className="space-y-3 relative z-10">
          <h3 className="text-lg font-bold text-[#1F2937] flex items-center gap-2">
            <span className="text-[#6D28D9]">👋</span> Professional Summary
          </h3>
          <p className="text-xs lg:text-sm text-[#1F2937] leading-relaxed">
            {personalDetails.objective}
          </p>
        </div>

        {/* Detailed 4 Sub-sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#E5E7EB] relative z-10">
          
          {/* a) Who I am */}
          <div className="bg-[#F8F9FC] p-4 rounded-xl border border-[#E5E7EB] flex items-start gap-3">
            <div className="p-2.5 bg-[#EDE9FE] text-[#6D28D9] rounded-lg mt-0.5">
              <FaUserCheck size={18} />
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold text-[#1F2937] tracking-wider">a) Who I Am</h4>
              <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                {personalDetails.about.whoIAm}
              </p>
            </div>
          </div>

          {/* b) Education */}
          <div className="bg-[#F8F9FC] p-4 rounded-xl border border-[#E5E7EB] flex items-start gap-3">
            <div className="p-2.5 bg-[#EDE9FE] text-[#6D28D9] rounded-lg mt-0.5">
              <FaGraduationCap size={18} />
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold text-[#1F2937] tracking-wider">b) Education Background</h4>
              <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                {personalDetails.about.education}
              </p>
            </div>
          </div>

          {/* c) Technologies */}
          <div className="bg-[#F8F9FC] p-4 rounded-xl border border-[#E5E7EB] flex items-start gap-3">
            <div className="p-2.5 bg-[#EDE9FE] text-[#6D28D9] rounded-lg mt-0.5">
              <FaLaptopCode size={18} />
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold text-[#1F2937] tracking-wider">c) What Technologies I Know</h4>
              <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                {personalDetails.about.technologies}
              </p>
            </div>
          </div>

          {/* d) Career Goal */}
          <div className="bg-[#F8F9FC] p-4 rounded-xl border border-[#E5E7EB] flex items-start gap-3">
            <div className="p-2.5 bg-[#EDE9FE] text-[#6D28D9] rounded-lg mt-0.5">
              <FaBullseye size={18} />
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold text-[#1F2937] tracking-wider">d) Career Goal</h4>
              <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                {personalDetails.about.careerGoal}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* What I Do / Core Specializations (Strictly 3 Cards) */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#1F2937] tracking-tight">
          What I Do / Core Specializations
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {specializations.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-[#FFFFFF] border border-[#E5E7EB] p-5 rounded-2xl shadow-sm hover:border-[#6D28D9] hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center mb-3 group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                  <Icon size={20} />
                </div>
                <h4 className="text-sm font-bold text-[#1F2937] group-hover:text-[#6D28D9] transition-colors">
                  {spec.title}
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed mt-2">
                  {spec.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

    </motion.section>
  );
};

export default About;
