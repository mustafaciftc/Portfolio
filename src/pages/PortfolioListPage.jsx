import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const PortfolioListPage = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Portfolio
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                A collection of my recent work showcasing graphic design, branding, and visual identity projects.
              </p>
            </div>
          </div>
        </div>
        <Portfolio />
        {/* Additional Portfolio Content */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to See More?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Explore detailed case studies and see how each project evolved from concept to final delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:contact@hawkstudio.com"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                Request Full Case Studies
              </a>
              <button className="border border-gray-600 hover:border-blue-400 text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-gray-800">
                View Behance Profile
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioListPage;