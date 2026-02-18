
import React from 'react';
import SEOHead from '../components/SEOHead';
import { ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <SEOHead 
        title="About Will | 10+ Years of Mortgage Experience"
        description="Learn about Will Mortgage Services. Our mission is to provide transparent, expert mortgage advice to Canadian homeowners."
      />

      {/* Hero Header */}
      <section className="bg-navy py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Expertise Built on <span className="text-gold">Trust & Integrity</span></h1>
          <p className="text-xl text-gray-400">Helping Canadians achieve the dream of homeownership for over a decade.</p>
        </div>
      </section>

      {/* Professional Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <img src="https://picsum.photos/600/800" alt="Will - Mortgage Agent" className="rounded-2xl shadow-2xl grayscale-[20%]" />
             <div className="bg-gold text-white p-6 rounded-xl -mt-12 relative z-10 mx-6 shadow-xl">
               <div className="text-3xl font-bold">10+ Years</div>
               <div className="text-xs uppercase tracking-widest font-semibold opacity-80">Experience in Canadian Markets</div>
             </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy">Will's Professional Story</h2>
            <div className="w-16 h-1 bg-gold"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              With a decade of experience in the financial industry, Will started his career with a simple belief: <strong>Everyone deserves transparent, expert financial advice.</strong> 
            </p>
            <p className="text-gray-600 leading-relaxed">
              After seeing many homeowners accept unfavorable terms from big banks due to lack of information, Will transitioned to the broker channel to advocate directly for clients. Today, Will Mortgage Services represents over 50 different lenders, giving you more choice and better bargaining power.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              {[
                "Licensed Mortgage Specialist",
                "Certified Private Lending Expert",
                "Debt Consolidation Specialist",
                "Investment Property Expert"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-navy font-semibold">
                  <CheckCircle2 size={18} className="text-gold" /> {item}
                </div>
              ))}
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl border-l-4 border-gold italic text-gray-600">
              "My commitment to you is absolute transparency. I don't just find you a mortgage; I help you build a financial strategy that creates wealth through real estate."
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-16">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Mission Statement", text: "To empower Canadian homeowners with the knowledge and financing tools they need to secure their financial future with confidence.", icon: <Award className="w-12 h-12 text-gold mx-auto mb-4" /> },
              { title: "Integrity First", text: "We prioritize your long-term success over short-term gains. If a deal isn't right for you, we'll tell you the truth.", icon: <ShieldCheck className="w-12 h-12 text-gold mx-auto mb-4" /> },
              { title: "Personalized Care", text: "No call centers. No automated bots. You work directly with Will for a high-touch, personalized experience.", icon: <Heart className="w-12 h-12 text-gold mx-auto mb-4" /> }
            ].map((v, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                {v.icon}
                <h3 className="text-xl font-bold text-navy mb-4">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-2xl font-bold text-navy">Licensing & Compliance</h2>
          <p className="text-gray-500 text-sm">
            Will Mortgage Services is fully licensed and regulated in accordance with Canadian financial laws. We adhere to the highest standards of the Mortgage Professionals Canada (MPC) code of ethics.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-xs font-bold border-2 border-navy p-2">NMLS ID: [Placeholder]</div>
            <div className="text-xs font-bold border-2 border-navy p-2">FSRA LICENSE: 12345</div>
            <div className="text-xs font-bold border-2 border-navy p-2">EQUAL HOUSING LENDER</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
