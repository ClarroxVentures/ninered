import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon, LinkedInLogo, FacebookLogo, InstagramLogo, YouTubeLogo } from './Logos';
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
          <SocialIcon href="#"><LinkedInLogo className="w-5 h-5" /></SocialIcon>
          <SocialIcon href="#"><FacebookLogo /></SocialIcon>
          <SocialIcon href="#"><InstagramLogo /></SocialIcon>
          <SocialIcon href="#"><YouTubeLogo /></SocialIcon>
        </div>
      </div>
    </footer>
  );
};
