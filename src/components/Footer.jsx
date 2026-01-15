import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-bold">HAWK GRAPHIC STUDIO</span>
            </div>
            <p className="text-gray-400">
              Transforming visions into visual masterpieces since 2020
            </p>
          </div>

          <div className="text-center md:text-right">
            <div className="flex flex-col md:flex-row gap-8 mb-6">
              <div>
                <h4 className="font-bold mb-3">Pages</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/" className="hover:text-blue-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/1" className="hover:text-blue-400 transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <button 
                      onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                      className="hover:text-blue-400 transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">Social</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-400 transition-colors"
                    >
                      Twitter (X)
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-400 transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-end">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-blue-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-blue-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Hawk Graphic Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;