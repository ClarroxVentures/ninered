import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { AnimatedButton } from './ui/AnimatedButton';
import { Mail, Globe, Check, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    const form = e.target as HTMLFormElement;
    try {
      const response = await fetch('https://formspree.io/f/mreoqeqp', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setFormState('success');
        form.reset();
        setTimeout(() => setFormState('idle'), 3000);
      } else {
        setFormState('idle');
      }
    } catch {
      setFormState('idle');
    }
  };

  return (
    <section id="contact" className="bg-[#111] relative">
      <div className="h-1 w-full bg-gradient-to-r from-brand-dark-red via-brand-red to-brand-dark-red" />
      
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
        {/* Left Info */}
        <FadeIn>
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2 block">Get In Touch</span>
          <h2 className="text-5xl md:text-6xl text-white mb-6">Ready to Run Your <br /> First Experiment?</h2>
          <p className="text-white/55 text-lg mb-12 max-w-md">
            Tell us about your brand and KPI goals. We'll design a custom marketing strategy built around your business — no templates, no guesswork.
          </p>

          <div className="space-y-6">
            <a href="mailto:hello@nineredigilab.com" className="flex items-center gap-4 text-white/80 hover:text-brand-red transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                <Mail size={18} />
              </div>
              <span className="text-sm tracking-wide">hello@nineredigilab.com</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-white/80 hover:text-brand-red transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                <Globe size={18} />
              </div>
              <span className="text-sm tracking-wide">www.nineredigilab.com</span>
            </a>
          </div>
        </FadeIn>

        {/* Right Form */}
        <FadeIn delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-3xl opacity-50" />
            <div className="relative bg-[#111]/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
              <h3 className="text-2xl font-bold text-white mb-2">Initialize Experiment</h3>
              <p className="text-white/50 text-sm mb-8">Tell us about your goals. We'll handle the science.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold pl-1">First Name</label>
                    <input required type="text" name="firstName" className="w-full bg-white/[0.03] border border-white/10 focus:border-brand-red/50 focus:bg-white/[0.06] outline-none text-white px-4 py-3.5 text-sm rounded-xl transition-all duration-300" placeholder="John" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold pl-1">Last Name</label>
                    <input required type="text" name="lastName" className="w-full bg-white/[0.03] border border-white/10 focus:border-brand-red/50 focus:bg-white/[0.06] outline-none text-white px-4 py-3.5 text-sm rounded-xl transition-all duration-300" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold pl-1">Business Email</label>
                  <input required type="email" name="email" className="w-full bg-white/[0.03] border border-white/10 focus:border-brand-red/50 focus:bg-white/[0.06] outline-none text-white px-4 py-3.5 text-sm rounded-xl transition-all duration-300" placeholder="john@company.com" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold pl-1">Company Website</label>
                  <input required type="text" name="website" className="w-full bg-white/[0.03] border border-white/10 focus:border-brand-red/50 focus:bg-white/[0.06] outline-none text-white px-4 py-3.5 text-sm rounded-xl transition-all duration-300" placeholder="www.company.com" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold pl-1">Monthly Ad Budget</label>
                  <div className="relative">
                    <select name="budget" className="w-full bg-white/[0.03] border border-white/10 focus:border-brand-red/50 focus:bg-white/[0.06] outline-none text-white px-4 py-3.5 text-sm rounded-xl appearance-none transition-all duration-300">
                      <option className="bg-[#111] text-white/50" value="" disabled selected>Select your budget range</option>
                      <option className="bg-[#111]">$2,000 - $5,000</option>
                      <option className="bg-[#111]">$5,000 - $10,000</option>
                      <option className="bg-[#111]">$10,000 - $25,000</option>
                      <option className="bg-[#111]">$25,000 - $50,000</option>
                      <option className="bg-[#111]">$50,000+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold pl-1">Project Details</label>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="Tell us about your goals, challenges, and timeline..."
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-brand-red/50 focus:bg-white/[0.06] outline-none text-white px-4 py-3.5 text-sm rounded-xl transition-all duration-300 placeholder:text-white/20 resize-none"
                  />
                </div>

                <AnimatedButton
                  type="submit"
                  disabled={formState !== 'idle'}
                  className={`w-full py-4 text-sm font-bold uppercase tracking-widest rounded-xl mt-2 ${
                    formState === 'success'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-brand-red text-white'
                  }`}
                >
                  {formState === 'idle' && (
                    <span className="flex items-center justify-center gap-2">
                      Start Experiment <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                  {formState === 'submitting' && "Processing Data..."}
                  {formState === 'success' && (
                    <span className="flex items-center justify-center gap-2">
                      <Check size={16} /> Request Received
                    </span>
                  )}
                </AnimatedButton>

                <p className="text-center text-white/30 text-[10px] uppercase tracking-widest mt-4">
                  No commitment required. 100% Confidential.
                </p>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
