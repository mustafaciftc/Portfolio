import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleStartProject = () => {
    // Contact bölümüne scroll yap
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    // Gerçek bir CV dosyası için
    const cvUrl = 'https://drive.google.com/uc?export=download&id=YOUR_CV_FILE_ID';
    window.open(cvUrl, '_blank');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6C63FF] to-[#36D1DC] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <img 
                  src="/logo-icon.svg" 
                  alt="Hawk Studio Logo"
                  className="w-6 h-6"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">HAWK</span>
              <span className="text-sm text-gray-400 tracking-widest">GRAPHIC STUDIO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider hover:text-gradient-primary">
              Home
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider hover:text-gradient-primary">
              Portfolio
            </Link>
            <button 
              onClick={handleStartProject}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider hover:text-gradient-primary"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleDownloadCV}
              className="px-5 py-2 border border-gray-700 text-gray-300 rounded-lg font-medium hover:border-[#6C63FF] hover:text-white transition-all duration-300 hover:scale-105"
            >
              Download CV
            </button>
            <button 
              onClick={handleStartProject}
              className="px-6 py-2.5 bg-gradient-to-r from-[#6C63FF] to-[#36D1DC] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#6C63FF]/20 transition-all duration-300 transform hover:scale-105"
            >
              Start Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl hover:text-[#6C63FF] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-up">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <button
                onClick={() => {
                  handleStartProject();
                  setIsMenuOpen(false);
                }}
                className="py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors text-center"
              >
                Contact
              </button>
              <button 
                onClick={() => {
                  handleDownloadCV();
                  setIsMenuOpen(false);
                }}
                className="py-3 px-4 border border-gray-700 text-gray-300 rounded-lg font-medium hover:border-[#6C63FF] hover:text-white transition-all mt-2"
              >
                Download CV
              </button>
              <button 
                onClick={() => {
                  handleStartProject();
                  setIsMenuOpen(false);
                }}
                className="py-3 px-4 bg-gradient-to-r from-[#6C63FF] to-[#36D1DC] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#6C63FF]/20 transition-all"
              >
                Start Project
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;