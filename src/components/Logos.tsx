import React from 'react';

export const GoogleAdsLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12C2.03 17.05 6.16 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z" fill="#4285F4"/>
  </svg>
);

export const MetaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 15.13C16.03 15.74 15.25 16.05 14.39 16.05C13.53 16.05 12.75 15.74 12.14 15.13L12 15L11.86 15.13C11.25 15.74 10.47 16.05 9.61 16.05C8.75 16.05 7.97 15.74 7.36 15.13C6.75 14.52 6.44 13.74 6.44 12.88C6.44 12.02 6.75 11.24 7.36 10.63C7.97 10.02 8.75 9.71 9.61 9.71C10.47 9.71 11.25 10.02 11.86 10.63L12 10.77L12.14 10.63C12.75 10.02 13.53 9.71 14.39 9.71C15.25 9.71 16.03 10.02 16.64 10.63C17.25 11.24 17.56 12.02 17.56 12.88C17.56 13.74 17.25 14.52 16.64 15.13Z"/>
  </svg>
);

export const LinkedInLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
  </svg>
);

export const FacebookLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.048 0-2.733 1.379-2.733 2.832v1.139h3.706l-.528 3.667h-3.178v7.98H9.101Z" />
  </svg>
);

export const YouTubeLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const InstagramLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
  </svg>
);

export const BingLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3V22L17.5 15L11.5 11.5L5 3Z" />
  </svg>
);

export const CriteoLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="4" fill="currentColor"/>
  </svg>
);

export const StackAdaptLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const AmazonLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 11.5C15.5 11.5 15.5 11.5 15.5 11.5C15.5 11.5 15.5 11.5 15.5 11.5ZM15.5 11.5C15.5 11.5 15.5 11.5 15.5 11.5C15.5 11.5 15.5 11.5 15.5 11.5ZM15.5 11.5C15.5 11.5 15.5 11.5 15.5 11.5C15.5 11.5 15.5 11.5 15.5 11.5ZM13.5 15.5C13.5 15.5 13.5 15.5 13.5 15.5C13.5 15.5 13.5 15.5 13.5 15.5ZM13.5 15.5C13.5 15.5 13.5 15.5 13.5 15.5C13.5 15.5 13.5 15.5 13.5 15.5ZM13.5 15.5C13.5 15.5 13.5 15.5 13.5 15.5C13.5 15.5 13.5 15.5 13.5 15.5ZM17.5 18.5C17.5 18.5 17.5 18.5 17.5 18.5C17.5 18.5 17.5 18.5 17.5 18.5ZM17.5 18.5C17.5 18.5 17.5 18.5 17.5 18.5C17.5 18.5 17.5 18.5 17.5 18.5ZM17.5 18.5C17.5 18.5 17.5 18.5 17.5 18.5C17.5 18.5 17.5 18.5 17.5 18.5Z" fill="currentColor"/>
    <path d="M17.2 16.8C15.6 17.8 13.4 18.3 11.2 18.3C7.4 18.3 4.4 16.7 3 14.5C3 14.5 3.8 14.1 3.8 14.1C4.9 15.8 7.3 17.1 10.5 17.1C12.5 17.1 14.1 16.6 15.3 15.8C15.3 15.8 17.2 16.8 17.2 16.8Z" fill="currentColor"/>
    <path d="M16.8 16.9C16.8 16.9 16.4 14.6 16.4 14.6C16.4 14.6 15.3 15.1 15.3 15.1C15.3 15.1 16.8 16.9 16.8 16.9Z" fill="currentColor"/>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor" opacity="0.2"/>
  </svg>
);

export const SocialIcon = ({ children, href }: { children: React.ReactNode, href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-brand-red hover:bg-white/10 transition-all duration-300"
  >
    {children}
  </a>
);

export const NineredLogo = ({ className = "h-12 w-auto", lightText = false }: { className?: string, lightText?: boolean }) => (
  <svg viewBox="0 0 240 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="10" y1="60" x2="50" y2="10" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#8B0000" />
        <stop offset="100%" stopColor="#FF0000" />
      </linearGradient>
    </defs>
    
    <path 
      d="M20 65 C 32 50 46 35 46 22 C 46 10 36 4 24 4 C 12 4 4 14 4 26 C 4 38 16 42 28 32" 
      stroke="url(#logoGradient)" 
      strokeWidth="9" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    <circle cx="36" cy="12" r="2.5" stroke="#D11818" strokeWidth="1.5" />
    <circle cx="44" cy="16" r="1.5" stroke="#D11818" strokeWidth="1.5" />
    <circle cx="40" cy="6" r="1.5" stroke="#D11818" strokeWidth="1.5" />

    <text x="65" y="32" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="28" fill="#D11818" letterSpacing="0.02em">NINERED</text>
    <text x="65" y="58" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="24" fill={lightText ? "#FFFFFF" : "#222222"} letterSpacing="0.05em">DIGILAB</text>
  </svg>
);
