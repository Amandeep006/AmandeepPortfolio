import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Trigger Confetti Celebration Effect
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#080D1C] border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Have a project or opportunity in mind?"
          subtitle="I'm open to internships, entry-level Data Analyst opportunities, freelance analytics projects, and meaningful collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information & Quick Connect Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 glass-panel rounded-3xl border border-slate-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {profileData.status}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Let's discuss how data can drive your goals.
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Feel free to reach out directly via email, connect on LinkedIn, or drop a message through the form. I typically respond within 24 hours.
              </p>

              {/* Direct Quick Action Buttons */}
              <div className="space-y-3">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-purple-950 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Direct Email</div>
                    <div className="text-sm font-semibold">{profileData.email}</div>
                  </div>
                </a>

                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-950 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">LinkedIn Profile</div>
                    <div className="text-sm font-semibold">Amandeep Saini</div>
                  </div>
                </a>

                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-slate-950 text-slate-300 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">GitHub Profile</div>
                    <div className="text-sm font-semibold">@Amandeep006</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 glass-panel rounded-3xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-200 text-sm focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-purple-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-200 text-sm focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-purple-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Data Analyst Opportunity / Project Query"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-200 text-sm focus:outline-none transition-colors ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-purple-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project, team, or role details..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-200 text-sm focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-purple-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-purple-900/40 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
