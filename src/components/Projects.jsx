import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaInfoCircle, FaStar } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const categories = ['All', 'Full Stack', 'Java', 'React.js', 'Static Web'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

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
            Featured Portfolio Projects
          </h2>
          <div className="h-1 w-12 bg-[#6D28D9] rounded-full mt-2" />
        </div>
        <p className="text-[#6B7280] text-xs lg:text-sm mt-1.5 font-medium">
          Demonstrating software development capabilities across Full Stack Spring Boot + React, Core Java JDBC applications, and HTML5/CSS3 static web sites.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#E5E7EB] pb-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-[#6D28D9] text-white shadow-md shadow-[#6D28D9]/25'
                : 'bg-[#F8F9FC] text-[#6B7280] hover:text-[#1F2937] hover:bg-[#EDE9FE] border border-[#E5E7EB]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#6D28D9] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                
                {/* Thumbnail Image / Header Graphic */}
                <div 
                  onClick={() => setActiveModalProject(project)}
                  className="w-full h-44 rounded-xl bg-[#EDE9FE] relative overflow-hidden cursor-pointer group/img border border-[#E5E7EB]"
                >
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    onError={(e) => {
                      // Fallback gradient thumbnail if image missing
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback Graphic (hidden if image loads) */}
                  <div className="w-full h-full bg-gradient-to-br from-[#6D28D9] to-purple-800 p-5 hidden flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/20 text-white rounded-md backdrop-blur-sm">
                        {project.badge}
                      </span>
                      <FaInfoCircle size={16} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Badge & Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent p-4 flex flex-col justify-between pointer-events-none">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-900/80 text-white rounded-md backdrop-blur-sm border border-white/10">
                        {project.badge}
                      </span>
                      <span className="w-7 h-7 rounded-full bg-slate-900/70 text-white flex items-center justify-center backdrop-blur-sm">
                        <FaInfoCircle size={12} />
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#6B7280] leading-relaxed mt-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="mt-3.5 space-y-1.5">
                  <p className="text-[11px] uppercase font-bold text-[#1F2937] tracking-wider mb-1">
                    Key Features:
                  </p>
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#6B7280]">
                      <FaCheckCircle className="text-[#6D28D9] mt-0.5 flex-shrink-0" size={12} />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Key Highlights (for Projects 4, 5, 6) */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mt-3 space-y-1">
                    <p className="text-[11px] uppercase font-bold text-[#6D28D9] tracking-wider mb-1">
                      Source Highlights:
                    </p>
                    {project.highlights.slice(0, 2).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-[11px] text-[#6B7280]">
                        <FaStar className="text-amber-500 mt-0.5 flex-shrink-0" size={10} />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#EDE9FE] text-[#6D28D9] border border-[#6D28D9]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-[#E5E7EB]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#F8F9FC] hover:bg-[#EDE9FE] border border-[#E5E7EB] text-[#1F2937] hover:text-[#6D28D9] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <FaGithub size={14} />
                  Source Code
                </a>
                
                {project.hasLiveDemo && project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-[#6D28D9] hover:bg-[#7C3AED] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <FaExternalLinkAlt size={11} />
                    Live Demo
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Popup */}
      <ProjectModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />
    </motion.section>
  );
};

export default Projects;
