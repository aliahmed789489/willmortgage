
import React from 'react';
import SEOHead from '../components/SEOHead';
import { SERVICES } from '../constants';
import { Check, Calendar, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <SEOHead 
        title="Mortgage Services | Home Purchase, Refinance, Renewal, Private Lending"
        description="Detailed mortgage solutions for first-time buyers, refinancing, renewals, and private lending options in Canada."
      />

      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our <span className="text-gold">Mortgage Expertise</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Specialized solutions tailored to your unique financial situation and long-term goals.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {SERVICES.map((s, idx) => (
            <div key={s.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-navy shadow-sm mb-8">
                  {s.icon}
                </div>
                <h2 className="text-3xl font-bold text-navy mb-4">{s.title}</h2>
                <p className="text-gold font-semibold mb-6 italic">{s.whoItsFor}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-navy uppercase text-xs tracking-widest border-b border-gold pb-1 inline-block">Key Benefits</h4>
                    {s.benefits.map((b, i) => (
                      <div key={i} className="flex gap-2 text-sm text-gray-600">
                        <Check size={16} className="text-gold shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-navy uppercase text-xs tracking-widest border-b border-gold pb-1 inline-block">Key Features</h4>
                    {s.features.map((f, i) => (
                      <div key={i} className="flex gap-2 text-sm text-gray-600">
                        <Check size={16} className="text-gold shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="#book" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  <Calendar size={18} /> Book Consultation for {s.title}
                </a>
              </div>
              
              <div className="lg:w-1/2">
                <img src={`https://picsum.photos/seed/${s.id}/800/600`} alt={s.title} className="rounded-3xl shadow-2xl" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Reinforcement */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-navy">Not sure which service fits?</h2>
          <p className="text-gray-600">
            Everyone's financial situation is different. During our free consultation, we'll review your goals and find the perfect mortgage product together.
          </p>
          <a href="#contact" className="text-navy font-bold flex items-center justify-center gap-1 hover:gap-3 transition-all">
            Talk to Will Directly <ChevronRight size={20} className="text-gold" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
