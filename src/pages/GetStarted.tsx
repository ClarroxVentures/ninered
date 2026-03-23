import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FadeIn } from '../components/ui/FadeIn';
import { AnimatedButton } from '../components/ui/AnimatedButton';
import { Check, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

export const GetStarted = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  const benefits = [
    { icon: <Target className="w-5 h-5" />, text: "Precision-Engineered Campaigns" },
    { icon: <Zap className="w-5 h-5" />, text: "Rapid Experimentation Cycles" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Data-Backed Creative Strategy" }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="max-w-xl">
            <FadeIn>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">Accepting New Partners</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Let's Build Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-dark-red">
                  Growth Engine
                </span>
              </h1>
              
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10">
                Stop guessing. Start experimenting. Join the lab where creativity gets tested and performance is proven.
              </p>

              <div className="space-y-6 mb-12">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <span className="text-white/80 font-medium text-lg">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="space-y-2 text-center">
                  <p className="text-white/70 text-sm">hello@nineredigilab.com</p>
                  <a href="https://www.nineredigilab.com" target="_blank" rel="noopener noreferrer" className="text-brand-red text-sm hover:underline block">www.nineredigilab.com</a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Form */}
          <FadeIn delay={0.2}>
            <div className="relative">
              {/* Decorative Border Gradient */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-3xl opacity-50" />
              
              <div className="relative bg-[#111]/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
                <h3 className="text-2xl font-bold text-white mb-2">Initialize Experiment</h3>
                <p className="text-white/50 text-sm mb-8">Tell us about your goals. We'll handle the science.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold pl-1">First Name</label>
                      <input required type="text" className="w-full bg-white/[0.03] border border-white/10 focus:border-brand-red/50 focus:bg-white/[0.06] outline-none text-white px-4 py-3.5 text-sm rounded-xl transition-all duration-300" placeholder="John" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold pl-1">Last Name</label>
                      <input required type="text" className="w-full bg-white/[0.03] border border-white/10 focus:border-brand-red/50 focus:bg-white/[0.06] outline-none text-white px-4 py-3.5 text-sm rounded-xl transition-all duration-300" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold pl-1">Business Email</label>
                    <input required type="email" className="w-full bg-white/[0.03] border border-white/10 focus:border-brand-red/50 focus:bg-white/[0.06] outline-none text-white px-4 py-3.5 text-sm rounded-xl transition-all duration-300" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold pl-1">Company Website</label>
                    <input required type="text" className="w-full bg-white/[0.03] border border-white/10 focus:border-brand-red/50 focus:bg-white/[0.06] outline-none text-white px-4 py-3.5 text-sm rounded-xl transition-all duration-300" placeholder="www.company.com" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold pl-1">Monthly Ad Budget</label>
                    <div className="relative">
                      <select className="w-full bg-white/[0.03] border border-white/10 focus:border-brand-red/50 focus:bg-white/[0.06] outline-none text-white px-4 py-3.5 text-sm rounded-xl appearance-none transition-all duration-300">
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
      </div>
    </div>
  );
};
