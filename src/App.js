import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import PortfolioListPage from './pages/PortfolioListPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioListPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;