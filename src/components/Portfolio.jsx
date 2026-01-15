import { Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolioData';

const Portfolio = () => {
  const featuredItems = portfolioItems.slice(0, 2); 

  return (
    <section id="portfolio" className="py-24 px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 mb-6">
            <div className="w-2 h-2 bg-[#36D1DC] rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-gray-400">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Selected works that showcase my approach to visual design and brand transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredItems.map((item) => (
            <Link 
              key={item.id} 
              to={`/portfolio/${item.id}`}
              className="group block hover-lift"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden h-full">
                {/* Proje Görseli */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.imageUrl || `https://images.unsplash.com/photo-${item.id === 1 ? '1634942537034' : '1561070791'}-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.backgroundColor = item.id === 1 ? '#FF6B8B' : '#6C63FF';
                      e.target.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 24px; font-weight: bold;">${item.title}</div>`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-gray-800 text-[#36D1DC] rounded-full text-xs font-medium mb-3">
                        {item.client}
                      </span>
                      <h3 className="text-2xl font-bold group-hover:text-gradient-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mt-1">{item.subtitle}</p>
                    </div>
                    <span className="text-2xl opacity-50 group-hover:opacity-100 group-hover:text-[#6C63FF] transition-all">
                      →
                    </span>
                  </div>
                  
                  <p className="text-gray-400 line-clamp-2 mb-6">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-gray-700 text-white rounded-xl font-medium hover:bg-gray-800/50 hover:border-[#6C63FF] transition-all duration-300 group"
          >
            View All Projects
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;