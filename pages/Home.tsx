import React, { useState } from 'react';
import { ChevronRight, ShieldCheck, Award, TrendingUp, Users, CheckCircle2, Play, MessageSquare, Plus, Minus, Calendar } from 'lucide-react';
import { SERVICES, FAQS, TESTIMONIALS } from '../constants';
import SEOHead from '../components/SEOHead';
import MortgageCalculator from '../components/MortgageCalculator';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      <SEOHead 
        title="Expert Mortgage Broker | Best Home Loan Specialist in Canada"
        description="Looking for the best mortgage consultant in Canada? Will Mortgage Services offers home purchase, refinance, and renewal solutions with 10+ years of experience."
      />

      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 px-4 py-2 rounded-full text-gold font-bold text-sm tracking-wide">
              <Award size={18} /> TRUSTED BY 1000+ CANADIAN HOMEOWNERS
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Unlock Your Financial Future with <span className="text-gold">Expert Guidance.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              With over 10 years of experience, I help Canadians secure the most competitive mortgage rates while navigating the complex lending landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#book" className="bg-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_20px_rgba(197,160,33,0.4)] transition-all flex items-center justify-center gap-2 group">
                Book Your Free Consultation <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Speak With Will Today
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-gold">10+</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">50+</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Lender Network</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">A+</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Client Service</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
             <div className="bg-white/5 backdrop-blur-md p-2 rounded-3xl border border-white/10 shadow-2xl">
               <img 
                 src="https://images.pexels.com/photos/13801614/pexels-photo-13801614.jpeg?_gl=1*1a42ocl*_ga*MTQ3OTA4NDcwNy4xNzcwNDEzNzA1*_ga_8JE65Q40S6*czE3NzE0NTI4OTQkbzckZzEkdDE3NzE0NTMwNDEkajU5JGwwJGgw" 
                 alt="Will Mortgage Services Consulting" 
                 className="rounded-2xl shadow-inner grayscale-[50%]"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy">Comprehensive Mortgage Solutions</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600">Whether you are buying your first home or expanding an investment portfolio, we have the right strategy for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-gold/50 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-navy mb-6 group-hover:scale-110 group-hover:bg-navy group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{s.title}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {s.whoItsFor}
                </p>
                <a href="#services" className="text-gold font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">Why Homeowners <span className="text-gold">Choose Will</span></h2>
              <p className="text-gray-400 text-lg">
                Navigating the mortgage market alone can cost you thousands. We provide the expertise and access you need to win.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Personalized Strategy", desc: "Every client gets a bespoke financial plan, not a cookie-cutter mortgage.", icon: <ShieldCheck className="text-gold" /> },
                  { title: "Direct Lender Access", desc: "Access to 'Broker-Only' rates from over 50+ institutional and private lenders.", icon: <TrendingUp className="text-gold" /> },
                  { title: "Unbiased Advice", desc: "We work for YOU, not the bank. Our goal is your financial success.", icon: <Users className="text-gold" /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-gold/30 transition-all">
                    <div className="shrink-0 pt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full"></div>
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl space-y-8">
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center font-bold text-2xl">W</div>
                   <div>
                     <div className="font-bold text-xl">Will S.</div>
                     <div className="text-gold text-sm font-semibold uppercase tracking-widest">Mortgage Specialist</div>
                   </div>
                </div>
                <blockquote className="text-xl italic text-gray-300 leading-relaxed">
                  "My mission is to simplify the mortgage process, remove the stress of financing, and help you save money through smart planning and negotiation."
                </blockquote>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold border border-white/10">LICENSE #12345</div>
                  <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold border border-white/10">CAAMP MEMBER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Our Simple 4-Step Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Getting a mortgage doesn't have to be complicated. We keep it clear and straightforward.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery Call", desc: "We discuss your goals, financial situation, and homeownership dreams." },
              { step: "02", title: "Strategy Session", desc: "I shop the market to find the best terms and rates for your unique profile." },
              { step: "03", title: "Swift Approval", desc: "We gather documents and secure a formal commitment from the lender." },
              { step: "04", title: "Happy Funding", desc: "Legal details are finalized and you get the keys to your future." }
            ].map((p, idx) => (
              <div key={idx} className="relative group text-center lg:text-left">
                <div className="text-7xl font-bold text-gray-200 absolute -top-10 -left-2 z-0 group-hover:text-gold/10 transition-colors">{p.step}</div>
                <div className="relative z-10 pt-4">
                  <h4 className="text-xl font-bold text-navy mb-3">{p.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
                {idx < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator Preview */}
      <section id="calculator" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Calculate Your Estimated Savings</h2>
            <p className="text-gray-600">See how your down payment and interest rates affect your monthly budget.</p>
          </div>
          <MortgageCalculator />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">What Our Clients Are Saying</h2>
            <div className="flex justify-center gap-1 text-gold">
               {[...Array(5)].map((_, i) => <ShieldCheck key={i} size={20} fill="currentColor" />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-all">
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(t.stars)].map((_, i) => <CheckCircle2 key={i} size={16} />)}
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow">"{t.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-navy">{t.name}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy text-center mb-12">Mortgage Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-all"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-navy">{faq.question}</span>
                  {openFaq === idx ? <Minus size={20} className="text-gold" /> : <Plus size={20} className="text-gold" />}
                </button>
                {openFaq === idx && (
                  <div className="p-6 pt-0 bg-white text-gray-600 border-t border-gray-100 animate-in fade-in slide-in-from-top-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet / Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-navy rounded-[2rem] p-12 lg:p-20 text-white relative overflow-hidden text-center shadow-2xl">
              <div className="absolute inset-0 bg-gold opacity-5 pointer-events-none"></div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Ready to Find Your <span className="text-gold">Perfect Mortgage?</span></h2>
                <p className="text-xl text-gray-400">
                  Join hundreds of happy homeowners. Our consultations are 100% free and come with no obligation.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                  <a href="#book" className="bg-gold text-white px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <Calendar /> Book Free Consultation
                  </a>
                  <a href="#" className="bg-white text-navy px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                    <MessageSquare /> Download Free Guide
                  </a>
                </div>
                <p className="text-xs text-gray-500">
                  Guaranteed privacy. Your information is secure and will never be shared.
                </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;