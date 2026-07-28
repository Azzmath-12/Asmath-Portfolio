import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiJavascript, 
  SiReact, 
  SiSpringboot, 
  SiPostman, 
  SiMysql, 
  SiGit, 
  SiGithub, 
  SiIntellijidea, 
  SiEclipseide 
} from 'react-icons/si';
import { FaJava, FaDatabase, FaServer, FaCode, FaTools, FaCss3Alt } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';
import { skillsData } from '../data/portfolioData';

// Icon Map Resolver
const getSkillIcon = (iconName) => {
  switch (iconName) {
    case 'SiHtml5': return <SiHtml5 className="text-[#E34F26]" size={26} />;
    case 'FaCss3Alt': return <FaCss3Alt className="text-[#1572B6]" size={26} />;
    case 'SiJavascript': return <SiJavascript className="text-[#F7DF1E]" size={26} />;
    case 'SiReact': return <SiReact className="text-[#61DAFB]" size={26} />;
    case 'FaJava': return <FaJava className="text-[#007396]" size={26} />;
    case 'FaDatabase': return <FaDatabase className="text-[#6D28D9]" size={26} />;
    case 'FaServer': return <FaServer className="text-[#7C3AED]" size={26} />;
    case 'SiSpringboot': return <SiSpringboot className="text-[#6DB33F]" size={26} />;
    case 'SiMysql': return <SiMysql className="text-[#4479A1]" size={26} />;
    case 'SiGit': return <SiGit className="text-[#F05032]" size={26} />;
    case 'SiGithub': return <SiGithub className="text-[#1F2937]" size={26} />;
    case 'SiIntellijidea': return <SiIntellijidea className="text-[#FE315D]" size={26} />;
    case 'SiEclipseide': return <SiEclipseide className="text-[#2C2255]" size={26} />;
    case 'TbBrandVscode': return <TbBrandVscode className="text-[#007ACC]" size={26} />;
    case 'SiPostman': return <SiPostman className="text-[#FF6C37]" size={26} />;
    default: return <FaCode className="text-[#6D28D9]" size={26} />;
  }
};

const categoryIcons = {
  "Frontend Development": FaCode,
  "Backend Development": FaServer,
  "Database": FaDatabase,
  "Tools & IDEs": FaTools,
};

const Skills = () => {
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
            Technical Skills & Tools
          </h2>
          <div className="h-1 w-12 bg-[#6D28D9] rounded-full mt-2" />
        </div>
        <p className="text-[#6B7280] text-xs lg:text-sm mt-1.5 font-medium">
          Strictly verified technical competencies from resume across Frontend, Backend, Database, and Developer Tooling.
        </p>
      </div>

      {/* Skills Categories */}
      <div className="grid grid-cols-1 gap-6">
        {skillsData.map((categoryGroup, idx) => {
          const CategoryHeaderIcon = categoryIcons[categoryGroup.category] || FaCode;

          return (
            <div 
              key={idx}
              className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-6 shadow-sm space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center">
                    <CategoryHeaderIcon size={16} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2937]">
                      {categoryGroup.category}
                    </h3>
                    <p className="text-xs text-[#6B7280]">
                      {categoryGroup.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EDE9FE] text-[#6D28D9]">
                  {categoryGroup.skills.length} Items
                </span>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-[#F8F9FC] border border-[#E5E7EB] hover:border-[#6D28D9]/40 p-3.5 rounded-xl flex flex-col items-center justify-center text-center space-y-2.5 transition-all group shadow-2xs"
                  >
                    <div className="p-2 rounded-xl bg-white border border-[#E5E7EB] group-hover:border-[#6D28D9]/30 transition-colors shadow-xs">
                      {getSkillIcon(skill.icon)}
                    </div>
                    <h4 className="text-xs font-bold text-[#1F2937] group-hover:text-[#6D28D9] transition-colors">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>

            </div>
          );
        })}
      </div>

    </motion.section>
  );
};

export default Skills;
