
import React from 'react';
import SEOHead from '../components/SEOHead';
import { Calendar, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';

const BookingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <SEOHead 
        title="Book Free Consultation | Will Mortgage Services"
        description="Schedule your free mortgage consultation with Will today. Get expert advice on home purchase, refinancing, and renewals."
      />

      <section className="bg-navy py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Schedule Your <span className="text-gold">Strategy Call</span></h1>
          <p className="text-xl text-gray-400">Your first step toward a smarter, more affordable mortgage starts here.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Benefits */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-navy mb-6 border-b border-gold pb-2">Why Book Today?</h3>
            <ul className="space-y-6">
              {[
                { title: "Personalized Assessment", desc: "No generic advice. We look at your specific income, credit, and goals.", icon: <Users className="text-gold" /> },
                { title: "No-Cost Service", desc: "As your broker, my services are paid by lenders, not you.", icon: <Clock className="text-gold" /> },
                { title: "Private & Secure", desc: "Your financial data is handled with 100% confidentiality.", icon: <ShieldCheck className="text-gold" /> }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-navy p-8 rounded-2xl shadow-xl text-white">
            <h4 className="text-lg font-bold mb-4">Urgent Market Notice</h4>
            <p className="text-gray-400 text-sm mb-6">
              Current rates are fluctuating. Locking in a rate pre-approval today protects you from increases for the next 120 days.
            </p>
            <div className="bg-gold/20 border border-gold/30 p-4 rounded-xl text-gold font-bold text-sm text-center">
              LIMITED SLOTS AVAILABLE THIS WEEK
            </div>
          </div>
        </div>

        {/* Middle Column: The Form Placeholder */}
        <div className="lg:col-span-2">
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-navy mb-8">Tell Us About Your Goals</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold outline-none" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">How can we help?</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold outline-none">
                  <option>Buying a New Home</option>
                  <option>Refinancing My Mortgage</option>
                  <option>Mortgage Renewal</option>
                  <option>Private Lending Interest</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold outline-none" placeholder="Tell us a little about your situation..."></textarea>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg flex items-center gap-3">
                 <div className="w-4 h-4 rounded-full border-2 border-gold flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                 </div>
                 <p className="text-xs text-gray-500">I agree to receive mortgage updates and market insights. (Unsubscribe anytime)</p>
              </div>

              <button className="w-full bg-navy text-white font-bold py-5 rounded-xl hover:bg-navy/90 transition-all flex items-center justify-center gap-2 text-xl shadow-lg">
                Submit Request <ArrowRight />
              </button>
            </form>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-bold text-navy mb-6">What Happens Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { step: "1", text: "Submit your details securely." },
                  { step: "2", text: "Will contacts you within 24 hours." },
                  { step: "3", text: "Receive your custom mortgage plan." }
                ].map((s, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-bold mb-3">{s.step}</div>
                    <p className="text-xs text-gray-600 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
