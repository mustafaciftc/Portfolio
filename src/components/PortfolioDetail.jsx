import { useParams, Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolioData';

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = portfolioItems.find(item => item.id === parseInt(id)) || portfolioItems[0];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Geri Butonu */}
        <Link 
          to="/portfolio" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Portfolio
        </Link>

        {/* Proje Başlığı */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 mb-4">
                <div className="w-2 h-2 bg-[#FF6B8B] rounded-full mr-2"></div>
                <span className="text-sm text-gray-400">Logo Design</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-2xl text-gray-400">{project.subtitle}</p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Client</div>
                <div className="text-xl font-bold">{project.client}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Year</div>
                <div className="text-xl font-bold">{project.year}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Görsel */}
        <div className={`relative h-[500px] bg-gradient-to-br ${project.imageColor} rounded-3xl mb-16 overflow-hidden border border-gray-800`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-9xl font-bold mb-8 opacity-90">{project.title.split(' ')[0].charAt(0)}</div>
              <p className="text-2xl font-medium">Urban Fashion Streetwear</p>
            </div>
          </div>
        </div>

        {/* Proje İçeriği */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Ana İçerik */}
          <div className="lg:col-span-2 space-y-12">
            {/* Açıklama */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <div className="space-y-6">
                <p className="text-gray-400 text-lg leading-relaxed">
                  We worked closely with the Raven Studio team to craft a visually stunning and highly functional website.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </div>

            {/* Brand Analysis */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Brand Analysis – Concept & Visual Direction</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I crafted a bold and urban-focused identity built around street culture aesthetics. The direction emphasizes authenticity, hand-crafted energy, and a raw graffiti-influenced visual tone that aligns with contemporary streetwear trends.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-white">Performance</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Visual Impact</span>
                        <span className="text-[#6C63FF]">95%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#6C63FF] to-[#36D1DC] rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Brand Alignment</span>
                        <span className="text-[#FF6B8B]">92%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#FF6B8B] to-[#FFD166] rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">DESIGN</h4>
                  <p className="text-gray-400">
                    Concept: {project.concept}
                  </p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Solution – Creative Direction and Brand Deployment</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Throughout the process, your brand receives meticulous attention to ensure an elevated, high-quality outcome. Your vision remains central, while I provide clear guidance and timely support to deliver a refined and strategically aligned result.
              </p>
              
              <div className="border-l-2 border-[#6C63FF] pl-6 mt-8">
                <h4 className="text-xl font-bold mb-3">Communication – EMAIL</h4>
                <p className="text-gray-400 leading-relaxed">
                  I maintain open communication throughout the entire process to ensure your goals and expectations are fully met. By listening closely and working directly with you, I refine details and provide strategic guidance when needed. When it's time to deploy, I handle every technical step seamlessly, delivering a polished and flawless outcome.
                </p>
              </div>
            </div>
          </div>

          {/* Yan Panel */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">Project Details</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-2">Services</div>
                  <div className="space-y-2">
                    {project.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#36D1DC] rounded-full"></div>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">Timeline</div>
                  <div className="font-medium">{project.timeline}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">Tags</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#6C63FF]/10 to-[#36D1DC]/10 border border-[#6C63FF]/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">Ready to Start Your Project?</h4>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can transform your vision into a powerful visual identity.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-[#6C63FF] to-[#36D1DC] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#6C63FF]/20 transition-all">
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* More Cases */}
        <div className="mt-20 pt-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h3 className="text-3xl font-bold">More Other Cases</h3>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 text-[#6C63FF] hover:text-[#36D1DC] transition-colors mt-4 md:mt-0"
            >
              View more works
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
              <div className="text-2xl font-bold text-gradient mb-2">Million One</div>
              <div className="text-gray-500">2025</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
              <div className="text-2xl font-bold text-gradient mb-2">Nevosoft</div>
              <div className="text-gray-500">2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;