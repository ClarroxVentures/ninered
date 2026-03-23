import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CaseStudies } from './pages/CaseStudies';
import { Pricing } from './pages/Pricing';
import { GetStarted } from './pages/GetStarted';
import { ScrollToTopButton } from './components/ui/ScrollToTopButton';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
