import React from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheck, FaCode, FaStar } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Modal Header Bar */}
        <div className="p-4 border-b border-[#E5E7EB] bg-[#F8F9FC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EDE9FE] text-[#6D28D9] border border-[#6D28D9]/20">
              {project.badge}
            </span>
            <h3 className="text-base font-bold text-[#1F2937] truncate max-w-md">
              {project.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#1F2937] hover:bg-[#E5E7EB] transition-colors"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 bg-[#FFFFFF]">
          
          {/* Header Image / Thumbnail Graphic */}
          <div className="w-full h-52 rounded-xl bg-[#EDE9FE] relative overflow-hidden shadow-inner border border-[#E5E7EB]">
            <img
              src={project.imagePath}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-to-r from-[#6D28D9] to-purple-800 p-6 hidden flex-col justify-between text-white">
              <span className="text-xs font-bold px-3 py-1 bg-white/20 text-white rounded-full w-max">
                {project.category}
              </span>
              <h2 className="text-2xl font-bold tracking-wide text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Project Overview */}
          <div>
            <h4 className="text-xs uppercase font-bold text-[#1F2937] tracking-wider mb-2 border-l-2 border-[#6D28D9] pl-2">
              Project Overview
            </h4>
            <p className="text-xs lg:text-sm text-[#6B7280] leading-relaxed bg-[#F8F9FC] p-4 rounded-xl border border-[#E5E7EB]">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs uppercase font-bold text-[#1F2937] tracking-wider mb-3 border-l-2 border-[#6D28D9] pl-2">
              Key Features & Implementation Details
            </h4>
            <div className="space-y-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#F8F9FC] p-3 rounded-xl border border-[#E5E7EB]">
                  <div className="w-5 h-5 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck size={10} />
                  </div>
                  <p className="text-xs text-[#1F2937] font-medium leading-relaxed">
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights (if available) */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-bold text-[#1F2937] tracking-wider mb-3 border-l-2 border-[#6D28D9] pl-2">
                Technical & Design Highlights
              </h4>
              <div className="space-y-2">
                {project.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#EDE9FE]/50 p-3 rounded-xl border border-[#6D28D9]/20">
                    <div className="w-5 h-5 rounded-full bg-[#6D28D9] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaStar size={10} />
                    </div>
                    <p className="text-xs text-[#1F2937] font-medium leading-relaxed">
                      {hl}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs uppercase font-bold text-[#1F2937] tracking-wider mb-3 border-l-2 border-[#6D28D9] pl-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#EDE9FE] text-[#6D28D9] border border-[#6D28D9]/20 flex items-center gap-1.5"
                >
                  <FaCode size={10} />
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-[#E5E7EB] bg-[#F8F9FC] flex items-center justify-between">
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-[#6B7280] hover:text-[#1F2937] bg-[#E5E7EB] transition-colors"
          >
            Close Details
          </button>
          
          <div className="flex items-center gap-3">
            <a 
              href={project.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#1F2937] bg-white hover:bg-[#EDE9FE] border border-[#E5E7EB] flex items-center gap-2 transition-all shadow-xs"
            >
              <FaGithub size={14} />
              Source Code
            </a>
            {project.hasLiveDemo && project.liveDemo && (
              <a 
                href={project.liveDemo}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#6D28D9] hover:bg-[#7C3AED] flex items-center gap-2 shadow-md shadow-[#6D28D9]/20 transition-all"
              >
                <FaExternalLinkAlt size={12} />
                Live Demo
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
