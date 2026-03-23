import React from 'react';
import { Link } from 'react-router-dom';

export const AnimatedButton = ({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false
}: {
  children: React.ReactNode,
  href?: string,
  onClick?: (e: React.MouseEvent) => void,
  className?: string,
  type?: "button" | "submit" | "reset",
  disabled?: boolean
}) => {
  // If disabled, don't show the hover effect and use a different cursor
  if (disabled) {
    return (
      <button type={type} onClick={onClick} disabled={disabled} className={`${className} relative overflow-hidden`}>
        <span className="relative z-10">{children}</span>
      </button>
    );
  }

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-brand-dark-red transform -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
    </>
  );

  const baseClasses = `relative overflow-hidden group inline-flex items-center justify-center ${className}`;

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('//');
    if (isInternal) {
      return (
        <Link to={href} className={baseClasses} onClick={onClick}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
};
