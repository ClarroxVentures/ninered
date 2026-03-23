import React from 'react';
import { motion } from 'motion/react';
import { 
  FlaskConical, 
  BarChart3, 
  TrendingUp, 
  ArrowUp,
  Laptop,
  ShoppingBag,
  GraduationCap,
  Stethoscope,
  CreditCard,
  Plane,
  Car,
  Utensils
} from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { AnimatedButton } from '../components/ui/AnimatedButton';
import { Contact } from '../components/Contact';
import {
  GoogleAdsLogo,
  MetaLogo,
  LinkedInLogo,
  BingLogo,
  CriteoLogo,
  StackAdaptLogo,
  AmazonLogo
} from '../components/Logos';

import googleAdsImg from '../../assets/logos-platforms/google_ads.png';
import metaImg from '../../assets/logos-platforms/meta.png';
import linkedinImg from '../../assets/logos-platforms/linkedin.png';
import bingImg from '../../assets/logos-platforms/bing_ads.png';
import criteoImg from '../../assets/logos-platforms/criteo.png';
import stackadaptImg from '../../assets/logos-platforms/stackadapt.png';
import amazonImg from '../../assets/logos-platforms/amazon_ads.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center">
      {/* Background Image Fallback */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg')" }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#BB131A]/30" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
        <FadeIn>
          <span className="inline-block bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Marketing & Growth Lab
          </span>
          
          <h1 className="text-white font-sans font-extrabold tracking-tighter normal-case text-5xl md:text-7xl leading-[1.1] mb-8">
            Where Creativity <br />
            Gets <span className="text-brand-red">Tested</span> & <br />
            Performance <span className="text-brand-red">Proven</span>
          </h1>

          <p className="text-white/80 max-w-xl text-lg md:text-xl leading-relaxed mb-10 font-normal">
            We don't just run campaigns — we run experiments. Every idea tested, every assumption challenged, and every result engineered with precision to unlock predictable, scalable growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <AnimatedButton 
              href="/get-started" 
              className="bg-brand-red text-white px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Start Your Experiment
            </AnimatedButton>
            <a 
              href="#process" 
              className="bg-transparent border border-white/30 hover:border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors"
            >
              How It Works
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <motion.div 
          animate={{ height: [20, 40, 20], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] bg-white"
        />
        <span className="text-white/50 text-[10px] uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

const BibleVerse = () => {
  return (
    <section className="bg-[#0a0a0a] py-16 border-t border-white/10 relative z-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="font-serif text-xl md:text-2xl text-white/80 italic leading-relaxed">
            "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."
          </p>
          <p className="text-brand-red text-xs font-bold uppercase tracking-widest mt-4">
            Romans 8:28
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <FadeIn className="relative">
          <div className="h-[500px] w-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="https://www.pexels.com/de-de/download/video/25935016/" type="video/mp4" />
            </video>
            {/* Badge */}
            <div className="absolute bottom-0 left-0 bg-brand-red p-6 z-20 text-white">
              <div className="font-display text-6xl leading-none">100%</div>
              <div className="text-xs uppercase tracking-widest opacity-90 mt-1">Data-Driven Approach</div>
            </div>
          </div>
        </FadeIn>

        {/* Right Content */}
        <div>
          <FadeIn delay={0.2}>
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2 block">Why Ninered Digilab</span>
            <h2 className="text-4xl md:text-5xl mb-6 text-brand-charcoal">
              A Creative Laboratory, <br />
              Not a Traditional Agency
            </h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              At Ninered Digilab, we treat your brand like it's inside a creative laboratory — where every idea is tested, every assumption is challenged, and every result is engineered with precision.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: <FlaskConical className="w-6 h-6 text-brand-red" />,
                  title: "We Run Experiments, Not Campaigns",
                  text: "Every campaign has a clear hypothesis, measurable outcomes, and continuous optimization loops built in."
                },
                {
                  icon: <BarChart3 className="w-6 h-6 text-brand-red" />,
                  title: "Custom Growth Formulas",
                  text: "We build, test, and refine custom strategies tailored to your brand — no copy-paste playbooks here."
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-brand-red" />,
                  title: "Predictable, Scalable Growth",
                  text: "Your business becomes our lab — and growth becomes the repeatable, scalable outcome."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red/5 flex items-center justify-center border border-brand-red/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-brand-charcoal">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="bg-brand-red py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "7+", label: "Ad Platforms Mastered" },
            { num: "8", label: "Industries Served" },
            { num: "5", label: "Step Growth Framework" },
            { num: "100%", label: "Data-Driven Campaigns" }
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="font-display text-5xl md:text-6xl text-white mb-2">{stat.num}</div>
              <div className="text-white/75 text-xs uppercase tracking-widest font-medium">{stat.label}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2 block">What We Do</span>
          <h2 className="text-4xl md:text-5xl text-white mb-4">Performance Marketing Arsenal</h2>
          <p className="text-white/65 mb-16 text-base leading-relaxed">
            Seven precision-engineered ad platforms. One unified growth strategy.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Google Ads", desc: "Search, display, shopping & YouTube campaigns engineered for maximum ROI.", logo: <img src={googleAdsImg} alt="Google Ads" className="w-10 h-10 object-contain" /> },
            { title: "META Ads", desc: "Facebook & Instagram campaigns built on audience science and creative testing.", logo: <img src={metaImg} alt="META" className="w-10 h-10 object-contain" /> },
            { title: "LinkedIn Ads", desc: "B2B demand generation targeting decision-makers with surgical precision.", logo: <img src={linkedinImg} alt="LinkedIn" className="w-10 h-10 object-contain" /> },
            { title: "Bing Ads", desc: "Capture high-intent audiences at lower CPCs with Microsoft's ad ecosystem.", logo: <img src={bingImg} alt="Bing Ads" className="w-10 h-10 object-contain" /> },
            { title: "Criteo", desc: "Commerce-focused retargeting that brings back high-value visitors and converts.", logo: <img src={criteoImg} alt="Criteo" className="w-10 h-10 object-contain" /> },
            { title: "StackAdapt", desc: "Programmatic native, display & CTV for full-funnel audience engagement.", logo: <img src={stackadaptImg} alt="StackAdapt" className="w-10 h-10 object-contain" /> },
            { title: "Amazon Ads", desc: "Dominate product discovery and purchase decisions inside Amazon's ecosystem.", logo: <img src={amazonImg} alt="Amazon Ads" className="w-10 h-10 object-contain" /> },
            { title: "Content Marketing", desc: "Strategic content that builds authority, drives organic traffic, and nurtures leads through the funnel.", logo: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> },
            { title: "Website Development", desc: "High-performance websites engineered for conversion, speed, and seamless user experience.", logo: <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> }
          ].map((service, i) => (
            <FadeIn key={i} delay={i * 0.05} className="group p-8 transition-all duration-300 border border-white/10 relative overflow-hidden hover:-translate-y-1 hover:border-brand-red/50">
              <div className="absolute top-4 right-4 font-display text-4xl text-white/10 group-hover:text-brand-red/20 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="mb-6 text-white/80 group-hover:text-brand-red transition-colors">
                {service.logo}
              </div>
              <h3 className="text-2xl text-white mb-4">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { name: "B2B SaaS", icon: <Laptop size={24} /> },
    { name: "eCommerce & Retail", icon: <ShoppingBag size={24} /> },
    { name: "EdTech", icon: <GraduationCap size={24} /> },
    { name: "Healthcare & Medical", icon: <Stethoscope size={24} /> },
    { name: "FinTech", icon: <CreditCard size={24} /> },
    { name: "Hospitality & Travel", icon: <Plane size={24} /> },
    { name: "Automotive", icon: <Car size={24} /> },
    { name: "Food & Beverage", icon: <Utensils size={24} /> }
  ];

  return (
    <section id="industries" className="py-24 bg-brand-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2 block">Who We Work With</span>
          <h2 className="text-4xl md:text-5xl text-brand-charcoal mb-4">Industries We Serve</h2>
          <p className="text-gray-600 mb-16 text-base leading-relaxed">
            Our framework is industry-agnostic but highly specialized in execution. <br />
            We bring deep vertical expertise to every campaign.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-red/20 transition-all duration-300 flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-lg bg-brand-off-white flex items-center justify-center text-brand-charcoal group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  {industry.icon}
                </div>
                <span className="font-bold text-brand-charcoal group-hover:text-brand-red transition-colors duration-300">
                  {industry.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section id="process" className="py-24 bg-brand-off-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2 block">Our Process</span>
          <h2 className="text-4xl md:text-5xl text-brand-charcoal mb-4">The 5-Step Growth Framework</h2>
          <p className="text-gray-500 mb-12">Every partnership begins with deep understanding. Every outcome is engineered, not guessed.</p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Steps */}
        <div>
          <div className="space-y-6 relative">
            {/* Connecting Line */}
            <div className="absolute left-[23px] top-8 bottom-8 w-[2px] bg-gray-200" />

            {[
              { title: "The Audience Genome", desc: "Deep-dive analysis into your customers' behaviors, motivations, and decision triggers." },
              { title: "Journey Blueprinting", desc: "Map every touchpoint from awareness to conversion with precision architecture." },
              { title: "Creative Chemistry Lab", desc: "Systematic creative testing to find the messaging and visuals that truly convert." },
              { title: "Multi-Channel Production Lab", desc: "Launch coordinated campaigns across every relevant channel simultaneously." },
              { title: "Scale Engine Optimization", desc: "Amplify what works. Cut what doesn't. Build a predictable growth engine." }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative flex gap-8 group">
                {/* Number Bubble */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-red text-brand-red flex items-center justify-center font-display text-xl font-bold shadow-sm group-hover:bg-brand-red group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {i + 1}
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="flex-grow bg-white p-6 rounded-xl border border-gray-100 shadow-sm group-hover:shadow-md group-hover:border-brand-red/20 transition-all duration-300">
                  <h3 className="text-xl text-brand-charcoal mb-2 font-bold group-hover:text-brand-red transition-colors">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right: What to Expect */}
        <div className="lg:sticky lg:top-24">
          <FadeIn delay={0.2}>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-6">
              What to Expect When We Partner Together
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                We dive deep into your customers, products, competitors, and market landscape to understand what truly drives growth. We align on goals and OKRs, then build a clear strategy and measurement framework.
              </p>
              <p>
                Our focus is on early wins backed by a long-term growth plan — creating demand, capturing qualified inbound opportunities, and building a predictable pipeline and revenue engine.
              </p>
            </div>
            <div className="mt-8">
              <AnimatedButton 
                href="/get-started" 
                className="bg-brand-red text-white px-8 py-4 text-sm font-bold uppercase tracking-widest"
              >
                Book a Strategy Call →
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
        </div>
      </div>
    </section>
  );
};



export const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <BibleVerse />
      <WhyChoose />
      <Stats />
      <Services />
      <Industries />
      <Process />
      <Contact />
    </div>
  );
};
