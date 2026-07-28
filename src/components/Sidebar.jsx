import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaDownload, 
  FaChevronDown, 
  FaChevronUp,
  FaFileAlt,
  FaTimes
} from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [imgSrc, setImgSrc] = useState(personalDetails.avatar || personalDetails.avatarUrl || "/avatar.png");

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalDetails.resumeUrl || "/resume.pdf";
    link.download = 'Asmath_Batcha_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAvatarError = () => {
    if (imgSrc === "/avatar.png") {
      setImgSrc("/avatar.jpeg");
    } else if (imgSrc === "/avatar.jpeg") {
      setImgSrc("/avatar.jpg");
    } else {
      setImgSrc("https://api.dicebear.com/7.x/avataaars/svg?seed=AsmathBatchaS&backgroundColor=EDE9FE");
    }
  };

  return (
    <>
      {/* Sticky / Fixed Sidebar Container for Desktop */}
      <aside className="w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-6 lg:self-start z-30">
        <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-6 shadow-xl relative transition-all duration-300">
          
          {/* Mobile Collapse Header */}
          <div className="flex items-center justify-between lg:block">
            <div className="flex items-center gap-4 lg:flex-col lg:text-center">
              
              {/* Avatar Box */}
              <div className="relative group">
                <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-[#6D28D9] to-purple-600 p-1 shadow-md shadow-[#6D28D9]/20 transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                  <img 
                    src={imgSrc} 
                    alt={personalDetails.name} 
                    onError={handleAvatarError}
                    className="w-full h-full object-cover rounded-xl bg-[#EDE9FE]"
                  />
                </div>
                {/* Status Dot */}
                <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full border border-[#E5E7EB]">
                  <span className="flex h-3.5 w-3.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#6D28D9]" title="Open to Opportunities"></span>
                  </span>
                </div>
              </div>

              {/* Title & Role Info */}
              <div className="lg:mt-4">
                <h1 className="text-xl lg:text-2xl font-bold text-[#1F2937] tracking-tight">
                  {personalDetails.name}
                </h1>
                <p className="text-xs font-semibold px-3 py-1 mt-1.5 bg-[#EDE9FE] text-[#6D28D9] rounded-full inline-block">
                  {personalDetails.title}
                </p>
                <p className="text-xs text-[#6B7280] mt-1 lg:hidden">
                  📍 Chennai, Tamil Nadu, India
                </p>
              </div>

            </div>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#6B7280] hover:text-[#6D28D9] bg-[#F8F9FC] border border-[#E5E7EB] rounded-xl transition-colors"
              aria-label="Toggle contact details"
            >
              {isOpen ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
            </button>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[#E5E7EB] my-5 hidden lg:block" />

          {/* Contact Details List */}
          <div className={`space-y-3.5 lg:block ${isOpen ? 'block mt-5 pt-5 border-t border-[#E5E7EB]' : 'hidden'}`}>
            
            {/* Phone */}
            <a 
              href={`tel:${personalDetails.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F8F9FC] border border-[#E5E7EB] hover:border-[#6D28D9]/40 hover:bg-[#EDE9FE]/50 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                <FaPhoneAlt size={14} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider">Phone</p>
                <p className="text-xs font-semibold text-[#1F2937] group-hover:text-[#6D28D9] transition-colors">
                  {personalDetails.phone}
                </p>
              </div>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${personalDetails.email}`}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F8F9FC] border border-[#E5E7EB] hover:border-[#6D28D9]/40 hover:bg-[#EDE9FE]/50 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                <FaEnvelope size={14} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider">Email</p>
                <p className="text-xs font-semibold text-[#1F2937] truncate group-hover:text-[#6D28D9] transition-colors">
                  {personalDetails.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F8F9FC] border border-[#E5E7EB]">
              <div className="w-9 h-9 rounded-lg bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center">
                <FaMapMarkerAlt size={14} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider">Location</p>
                <p className="text-xs font-semibold text-[#1F2937]">
                  {personalDetails.location}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider mb-2 text-center lg:text-left">
                Profiles & Links
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <a 
                  href={personalDetails.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#6B7280] hover:text-white hover:border-[#6D28D9] hover:bg-[#6D28D9] flex items-center justify-center transition-all"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin size={18} />
                </a>
                <a 
                  href={personalDetails.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#6B7280] hover:text-white hover:border-[#6D28D9] hover:bg-[#6D28D9] flex items-center justify-center transition-all"
                  title="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a 
                  href={`mailto:${personalDetails.email}`}
                  className="w-10 h-10 rounded-xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#6B7280] hover:text-white hover:border-[#6D28D9] hover:bg-[#6D28D9] flex items-center justify-center transition-all"
                  title="Send Email"
                >
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>

            {/* Download Resume Action */}
            <div className="pt-3 space-y-2">
              <button 
                onClick={handleDownloadResume}
                className="w-full py-3 px-4 rounded-xl bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md shadow-[#6D28D9]/25 hover:shadow-lg active:scale-95 transition-all"
                id="download-resume-btn"
              >
                <FaDownload size={14} />
                Download Resume
              </button>
              
              <button 
                onClick={() => setShowResumeModal(true)}
                className="w-full py-2 px-4 rounded-xl bg-[#F8F9FC] hover:bg-[#EDE9FE] border border-[#E5E7EB] text-[#6B7280] hover:text-[#6D28D9] text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <FaFileAlt size={12} />
                Preview Resume
              </button>
            </div>

          </div>

        </div>
      </aside>

      {/* Resume Quick Preview Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-fadeIn">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between bg-[#F8F9FC]">
              <div className="flex items-center gap-2 text-[#1F2937] font-bold text-sm">
                <FaFileAlt className="text-[#6D28D9]" />
                {personalDetails.name} - Resume
              </div>
              <button 
                onClick={() => setShowResumeModal(false)}
                className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#1F2937] hover:bg-[#E5E7EB] transition-colors"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs text-[#6B7280]">
              
              <div className="border-b border-[#E5E7EB] pb-4 text-center">
                <h2 className="text-xl font-bold text-[#1F2937]">{personalDetails.name}</h2>
                <p className="text-[#6D28D9] font-semibold">{personalDetails.title}</p>
                <p className="text-[11px] text-[#6B7280] mt-1">
                  {personalDetails.location} | {personalDetails.email} | {personalDetails.phone}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase font-bold text-[#1F2937] mb-1.5 border-l-2 border-[#6D28D9] pl-2">
                  Objective
                </h3>
                <p className="leading-relaxed text-[#1F2937]">
                  {personalDetails.objective}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase font-bold text-[#1F2937] mb-1.5 border-l-2 border-[#6D28D9] pl-2">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-[#F8F9FC] p-2 rounded-lg border border-[#E5E7EB]">
                    <strong className="text-[#1F2937]">Frontend:</strong> HTML5, CSS3, JavaScript, React.js
                  </div>
                  <div className="bg-[#F8F9FC] p-2 rounded-lg border border-[#E5E7EB]">
                    <strong className="text-[#1F2937]">Backend:</strong> Core Java, JDBC, Java Servlets, Spring Boot
                  </div>
                  <div className="bg-[#F8F9FC] p-2 rounded-lg border border-[#E5E7EB]">
                    <strong className="text-[#1F2937]">Database:</strong> MySQL
                  </div>
                  <div className="bg-[#F8F9FC] p-2 rounded-lg border border-[#E5E7EB]">
                    <strong className="text-[#1F2937]">Tools:</strong> STS, IntelliJ IDEA, VS Code, Eclipse, Postman, Workbench, Git, GitHub
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase font-bold text-[#1F2937] mb-1.5 border-l-2 border-[#6D28D9] pl-2">
                  Education & Internship
                </h3>
                <div className="space-y-1.5 text-[11px]">
                  <p><strong className="text-[#1F2937]">Internship:</strong> Java Full Stack Developer Intern, Keyan Technologies, Chennai (Jan 2026 – Apr 2026)</p>
                  <p><strong className="text-[#1F2937]">Degree:</strong> B.Sc. Computer Science, The New College, Chennai (2022 – 2025)</p>
                  <p><strong className="text-[#1F2937]">Course:</strong> Frontend Development, Inetz Technologies, Chennai (Jul 2025 – Dec 2025)</p>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#E5E7EB] bg-[#F8F9FC] flex justify-end gap-3">
              <button 
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#6B7280] hover:text-[#1F2937] bg-[#E5E7EB] transition-colors"
              >
                Close Preview
              </button>
              <button 
                onClick={handleDownloadResume}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#6D28D9] hover:bg-[#7C3AED] flex items-center gap-2 shadow-md transition-all"
              >
                <FaDownload size={12} />
                Download PDF
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
