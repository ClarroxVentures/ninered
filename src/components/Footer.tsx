import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon, LinkedInLogo, FacebookLogo, InstagramLogo } from './Logos';
import logoImg from '../../assets/ninered-digilab-white-logo.png';

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06] py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-1 shrink-0" onClick={() => window.scrollTo(0, 0)}>
          <img src={logoImg} alt="Ninered Digilab" className="h-8 w-auto" />
        </Link>

        <p className="text-white/40 text-xs hidden md:block">
          Where Creativity Gets Tested and Performance Gets Proven.
        </p>

        <div className="text-white/30 text-xs">
          © 2026 Ninered Digilab
        </div>

        <div className="flex gap-3">
          <SocialIcon href="https://www.instagram.com/9redigilab"><InstagramLogo /></SocialIcon>
          <SocialIcon href="https://www.facebook.com/9redigilab/"><FacebookLogo /></SocialIcon>
          <SocialIcon href="https://www.linkedin.com/company/9redigilab"><LinkedInLogo className="w-5 h-5" /></SocialIcon>
        </div>
      </div>
      <div className="text-center mt-4 pb-2">
        <p className="text-white/20 text-[10px]">Powered by <a href="https://clarroxweb.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors">ClarroxWeb</a></p>
      </div>
    </footer>
  );
};
