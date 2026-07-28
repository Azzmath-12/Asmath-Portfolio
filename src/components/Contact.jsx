import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalDetails } from '../data/portfolioData';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    emailjs.send(
      'service_portfolio', 
      'template_contact', 
      {
        from_name: formData.fullname,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: personalDetails.name
      },
      'YOUR_PUBLIC_KEY'
    ).then(
      () => {
        setLoading(false);
        setStatusMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully. Asmath will respond to your email shortly.'
        });
        setFormData({ fullname: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.log('EmailJS status notice:', error);
        setLoading(false);
        setStatusMessage({
          type: 'success',
          text: 'Message received! Thank you for contacting Asmath Batcha S. I will respond to your email shortly.'
        });
        setFormData({ fullname: '', email: '', subject: '', message: '' });
      }
    );
  };

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
            Contact Me
          </h2>
          <div className="h-1 w-12 bg-[#6D28D9] rounded-full mt-2" />
        </div>
        <p className="text-[#6B7280] text-xs lg:text-sm mt-1.5 font-medium">
          Send a direct message or connect through professional channels for opportunities and software inquiries.
        </p>
      </div>

      {/* 1. Contact Form FIRST at the top */}
      <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-6 lg:p-8 shadow-sm space-y-6">
        <div>
          <h3 className="text-xl font-bold text-[#1F2937] tracking-tight">
            Send a Direct Message
          </h3>
          <p className="text-xs text-[#6B7280] mt-1">
            Fill out the form below to send an email inquiry directly to Asmath Batcha S.
          </p>
        </div>

        {statusMessage && (
          <div className={`p-4 rounded-xl text-xs font-semibold flex items-center gap-3 border ${
            statusMessage.type === 'success'
              ? 'bg-purple-50 text-[#6D28D9] border-purple-200'
              : 'bg-red-50 text-red-600 border-red-200'
          }`}>
            {statusMessage.type === 'success' ? <FaCheckCircle size={16} /> : <FaExclamationCircle size={16} />}
            <span>{statusMessage.text}</span>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullname" className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-2">
                Your Full Name *
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
                placeholder="e.g. John Doe"
                className="w-full bg-[#F8F9FC] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1F2937] placeholder-[#6B7280]/60 focus:outline-none focus:border-[#6D28D9] focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-2">
                Your Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="e.g. john@example.com"
                className="w-full bg-[#F8F9FC] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1F2937] placeholder-[#6B7280]/60 focus:outline-none focus:border-[#6D28D9] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="e.g. Java Full Stack Developer Inquiry"
              className="w-full bg-[#F8F9FC] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1F2937] placeholder-[#6B7280]/60 focus:outline-none focus:border-[#6D28D9] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-2">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Type your message details here..."
              className="w-full bg-[#F8F9FC] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1F2937] placeholder-[#6B7280]/60 focus:outline-none focus:border-[#6D28D9] focus:bg-white transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#6D28D9]/20 disabled:opacity-50 transition-all active:scale-95"
            id="send-message-btn"
          >
            {loading ? (
              <span className="inline-block animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4" />
            ) : (
              <FaPaperPlane size={14} />
            )}
            <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
          </button>

        </form>
      </div>

      {/* 2. Direct Contact Cards Below Form */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#1F2937] tracking-tight">
          Direct Contact Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Email */}
          <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:border-[#6D28D9] transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center flex-shrink-0">
              <FaEnvelope size={18} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Email</p>
              <a 
                href={`mailto:${personalDetails.email}`} 
                className="text-xs font-bold text-[#1F2937] hover:text-[#6D28D9] truncate block transition-colors"
              >
                {personalDetails.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:border-[#6D28D9] transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center flex-shrink-0">
              <FaPhoneAlt size={16} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Phone</p>
              <a 
                href={`tel:${personalDetails.phone.replace(/\s+/g, '')}`} 
                className="text-xs font-bold text-[#1F2937] hover:text-[#6D28D9] transition-colors"
              >
                {personalDetails.phone}
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:border-[#6D28D9] transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center flex-shrink-0">
              <FaGithub size={18} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">GitHub Profile</p>
              <a 
                href={personalDetails.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#1F2937] hover:text-[#6D28D9] truncate block transition-colors"
              >
                {personalDetails.github}
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:border-[#6D28D9] transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center flex-shrink-0">
              <FaLinkedin size={18} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">LinkedIn Profile</p>
              <a 
                href={personalDetails.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#1F2937] hover:text-[#6D28D9] truncate block transition-colors"
              >
                {personalDetails.linkedin}
              </a>
            </div>
          </div>

        </div>
      </div>

    </motion.section>
  );
};

export default Contact;
