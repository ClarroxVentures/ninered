import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn } from '../components/ui/FadeIn';
import { Check } from 'lucide-react';
import { AnimatedButton } from '../components/ui/AnimatedButton';

export const Pricing = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2 block">Simple Pricing</span>
            <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">Invest in Growth</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              One simple plan to get started. No hidden fees, just results.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            {/* Main Pricing Card */}
            <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden group hover:border-brand-red/30 transition-all duration-500 shadow-2xl shadow-black/50">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                 <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor" className="text-brand-red">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                 </svg>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-12 relative z-10">
                <div>
                  <p className="text-white/50 text-lg max-w-md">For early‑stage brands validating channels and building momentum.</p>
                </div>
                <div className="text-left md:text-right">
                  <div className="flex items-baseline gap-1 md:justify-end">
                    <span className="text-5xl font-bold text-white">$2,300</span>
                    <span className="text-white/40 text-lg">/month</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-12 relative z-10">
                {[
                  "Choose 1-2 Platforms",
                  "Monthly Reports & Insights",
                  "Core Strategy + Campaign Setup",
                  "Landing Page Recommendations",
                  "Monthly Creative Refresh",
                  "Weekly Strategy Calls"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand-red" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 pt-10 border-t border-white/5 relative z-10">
                <AnimatedButton 
                  href="/get-started" 
                  className="w-full md:w-auto bg-brand-red text-white px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-dark-red transition-colors shadow-lg shadow-brand-red/20"
                >
                  Get Started
                </AnimatedButton>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span>Minimum 6 months contract for Ad Campaigns.</span>
                </div>
              </div>
            </div>

            {/* Tailored Note */}
            <div className="mt-8 relative bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 text-center hover:border-brand-red/30 transition-all duration-500 shadow-2xl shadow-black/50">
              <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
                If you need something more tailored to your goals, reach out — we'll review your needs and craft the right solution for your brand.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
