import React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { AnimatedButton } from '../components/ui/AnimatedButton';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

import salaryImg from '../../assets/case-study/salarycom.png';
import imagikidsImg from '../../assets/case-study/imagikids.png';
import manualImg from '../../assets/case-study/manual.png';

interface CaseStudy {
  client: string;
  industry: string;
  description: string;
  objectives: string[];
  solution: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    client: "Salary.com",
    industry: "B2B SaaS",
    description: "A fast-scaling HR software company that had reached a plateau in customer acquisition, relying heavily on organic traffic and word-of-mouth, and wants to expand its paid growth channels.",
    objectives: [
      "Increase qualified demo requests by 50%",
      "Reduce CPA by below $60",
      "Expand market presence in North America"
    ],
    solution: "Accelerate growth by increasing qualified demo requests by 50% through sharper ABM targeting and improved funnel sequencing, reducing CPA below $60 with tighter audience refinement and creative experimentation, and expanding its North American presence by strengthening paid search, thought-leadership content, and category-defining visibility across HR and compensation-tech keywords.",
    image: salaryImg
  },
  {
    client: "Imagikids",
    industry: "eCommerce",
    description: "An online retailer specializing in officially licensed kids' apparel featuring popular characters from brands like Disney, Marvel, Nickelodeon, and more.",
    objectives: [
      "Improve Return On Ad Spend (ROAS) to 7.0 on Shopify and Amazon",
      "Scale monthly revenue to six figures",
      "Create seasonal campaigns based on franchise and events"
    ],
    solution: "By pushing ROAS toward 7.0 across Shopify and Amazon through tighter creative testing and audience refinement, scaling revenue into six figures with structured budget expansion tied to proven results, and running seasonal, franchise-driven campaigns that capitalize on character trends, holidays, and major entertainment releases to drive consistent spikes in demand.",
    image: imagikidsImg
  },
  {
    client: "Manual",
    industry: "Men's Healthcare",
    description: "A men's health platform that provides science-backed treatments, at-home diagnostics, and ongoing medical support to make managing hair loss, testosterone, and sexual health simple and accessible.",
    objectives: [
      "Connect with KOL to promote products and services",
      "Launch campaigns while maintaining CAC",
      "Dominate search results & increase demand generation"
    ],
    solution: "Accelerate growth by partnering with credible KOLs to build trust around its men's health solutions, launching tightly optimized multi-platform campaigns that maintain CAC through continuous experimentation, and dominating search by expanding both paid and organic visibility to drive stronger demand generation at every stage of the funnel.",
    image: manualImg
  }
];

export const CaseStudies = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-20 text-center">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2 block">Success Stories</span>
            <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">Proven Results</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Real challenges. Strategic experiments. Engineered growth. See how we transform businesses through data-driven performance marketing.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center mb-12">
                <span className="text-brand-red text-sm font-bold uppercase tracking-widest">{study.industry}</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">{study.client}</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center group">
                {/* Image Side */}
                <div className={`relative rounded-3xl overflow-hidden h-[500px] border border-white/10 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={study.image}
                    alt={study.client}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent z-20">
                    <div className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2">{study.industry}</div>
                    <h2 className="text-3xl font-bold text-white">{study.client}</h2>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>

                  {/* Description */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-red">
                        <Lightbulb size={18} />
                      </div>
                      <h3 className="text-xl font-bold text-white">The Client</h3>
                    </div>
                    <p className="text-white/70 leading-relaxed text-lg">
                      {study.description}
                    </p>
                  </div>

                  {/* Objectives */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-red">
                        <Target size={18} />
                      </div>
                      <h3 className="text-xl font-bold text-white">Key Objectives</h3>
                    </div>
                    <ul className="space-y-2">
                      {study.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 flex-shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-red">
                        <TrendingUp size={18} />
                      </div>
                      <h3 className="text-xl font-bold text-white">The Solution</h3>
                    </div>
                    <p className="text-white/70 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <AnimatedButton
                      href="/get-started"
                      className="bg-brand-red text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-dark-red transition-colors"
                    >
                      Get Started
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
