import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi - API endpoint'inize göre güncelleyin
    console.log('Form submitted:', formData);
    // Burada API çağrısı yapabilirsiniz
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 mb-6">
            <div className="w-2 h-2 bg-[#FF6B8B] rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-gray-400">Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Start Your Project</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss how we can transform your vision into a powerful visual identity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-gray-400 mb-2">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition-colors"
                >
                  <option value="">Select project type</option>
                  <option value="logo">Logo Design</option>
                  <option value="branding">Brand Identity</option>
                  <option value="web">Web Design</option>
                  <option value="3d">3D Animation</option>
                  <option value="motion">Motion Graphics</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#6C63FF] to-[#36D1DC] text-white rounded-xl font-medium hover:shadow-xl hover:shadow-[#6C63FF]/20 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#6C63FF]/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#6C63FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-400">Email</div>
                    <a href="mailto:contact@hawkgraphicstudio.com" className="text-white hover:text-[#6C63FF] transition-colors">
                      contact@hawkgraphicstudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#36D1DC]/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#36D1DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-400">Response Time</div>
                    <div className="text-white">Within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF6B8B]/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FF6B8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-400">Availability</div>
                    <div className="text-white">Monday - Friday, 9AM - 6PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Ready to Start?</h3>
              <p className="text-gray-400 mb-6">
                Book a free 30-minute consultation to discuss your project requirements and get a customized proposal.
              </p>
              <a 
                href="https://calendly.com/hawkgraphicstudio/consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full py-3 text-center bg-gradient-to-r from-[#FF6B8B] to-[#FFD166] text-white rounded-lg font-medium hover:shadow-xl hover:shadow-[#FF6B8B]/20 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;