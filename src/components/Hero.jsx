const Hero = () => {
  const handleStartProject = () => {
    // Contact bölümüne scroll yap
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Contact section bulunamazsa en alta scroll yap
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleCareerOverview = () => {
    // Services bölümüne scroll yap
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Alternatif olarak sayfanın ortasına scroll
      window.scrollTo({
        top: window.innerHeight * 1.5,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollDown = () => {
    // Bir sonraki bölüme scroll
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Arkaplan Efektleri */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-[#1A1A1A]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C63FF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#36D1DC] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - Görsel */}
          <div className="relative animate-slide-in">
            <div className="relative group">
              <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 overflow-hidden">
                {/* Gerçek proje görseli */}
                <img 
                  src="https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Graphic Design Project"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23111111'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='48' fill='%236C63FF' text-anchor='middle' dy='.3em'%3EGraphic Design%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              {/* Küçük overlay görsel */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-[#FF6B8B] to-[#FFD166] rounded-2xl border border-gray-800 transform rotate-12 overflow-hidden group-hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="3D Design"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Sağ Taraf - İçerik */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 mb-6">
              <div className="w-2 h-2 bg-[#6C63FF] rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-400">Visual Designer & 3D Artist</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="block text-white">Hey! I'm</span>
              <span className="block text-gradient-primary mt-2">Taha</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8 leading-relaxed">
              Where Visuals Evolve<br />Into Experiences
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
              A multidisciplinary visual designer specializing in graphic design, 3D motion graphics, dedicated to helping professionals and brands transform ideas into impactful visuals.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={handleStartProject}
                className="px-8 py-3.5 bg-gradient-to-r from-[#6C63FF] to-[#36D1DC] text-white rounded-xl font-medium hover:shadow-xl hover:shadow-[#6C63FF]/20 transition-all duration-300 transform hover:scale-105 hover-lift active:scale-95"
              >
                Start Your Project
              </button>
              <button 
                onClick={handleCareerOverview}
                className="px-8 py-3.5 border border-gray-700 text-white rounded-xl font-medium hover:bg-gray-800/50 hover:border-[#6C63FF] transition-all duration-300 hover-lift active:scale-95"
              >
                Career Overview
              </button>
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800">
              <div className="text-center p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-[#6C63FF] transition-colors duration-300">
                <div className="text-3xl font-bold text-gradient-primary">50+</div>
                <div className="text-sm text-gray-500 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-[#36D1DC] transition-colors duration-300">
                <div className="text-3xl font-bold text-gradient-primary">100%</div>
                <div className="text-sm text-gray-500 mt-1">Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-[#FF6B8B] transition-colors duration-300">
                <div className="text-3xl font-bold text-gradient-primary">3+</div>
                <div className="text-sm text-gray-500 mt-1">Years Exp</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aşağı Ok */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={handleScrollDown}
          className="text-gray-500 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;