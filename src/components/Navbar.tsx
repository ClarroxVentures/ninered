import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatedButton } from './ui/AnimatedButton';
import logoImg from '../../assets/ninered-digilab-white-logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'auto' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'auto' });
      }
    } else {
      navigate(href);
    }
  };

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Case Studies', href: '/case-studies' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-md border-b border-[#ED1C24]/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1" onClick={() => window.scrollTo(0, 0)}>
          <img src={logoImg} alt="Ninered Digilab" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              <AnimatedButton 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white/90 text-xs uppercase tracking-widest px-4 py-2"
              >
                {item.label}
              </AnimatedButton>
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <AnimatedButton 
            href="/get-started" 
            className="bg-brand-red text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wide"
          >
            Get Started
          </AnimatedButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#111] border-b border-white/10 p-6 flex flex-col gap-4">
           {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-white/90 text-sm uppercase tracking-widest hover:text-brand-red transition-colors"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
           <AnimatedButton 
            href="/get-started" 
            className="bg-brand-red text-center text-white px-6 py-3 text-sm font-bold uppercase tracking-wide mt-4 block"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </AnimatedButton>
        </div>
      )}
    </nav>
  );
};
