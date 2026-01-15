const Process = () => {
  const handleContactClick = (type) => {
    if (type === 'be-in-touch') {
      // Email aç
      window.location.href = 'mailto:contact@hawkgraphicstudio.com?subject=Project Inquiry&body=Hello! I would like to discuss a project...';
    } else {
      // Contact formuna scroll yap
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto">
        {/* ... mevcut process içeriği ... */}

        {/* İletişim Bölümü - Görsellerdekine uygun */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12 mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                Ready to Build Your Next<br />Visual Experience?
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => handleContactClick('be-in-touch')}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#6C63FF] to-[#36D1DC] text-white rounded-xl font-medium hover:shadow-xl hover:shadow-[#6C63FF]/20 transition-all duration-300 transform hover:scale-105"
                >
                  Be in Touch
                </button>
                <button 
                  onClick={() => handleContactClick('get-in-touch')}
                  className="px-8 py-3.5 border border-gray-700 text-white rounded-xl font-medium hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6">What You Get</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#6C63FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-[#6C63FF] rounded-full"></div>
                  </div>
                  <p className="text-gray-400">Free initial consultation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#36D1DC]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-[#36D1DC] rounded-full"></div>
                  </div>
                  <p className="text-gray-400">Customized design solutions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FF6B8B]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-[#FF6B8B] rounded-full"></div>
                  </div>
                  <p className="text-gray-400">Timely project delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;