
import React from 'react';
import SEOHead from '../components/SEOHead';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      <SEOHead 
        title="Contact Will | Mortgage Agent Canada"
        description="Get in touch with Will Mortgage Services. We're here to answer all your mortgage questions and provide expert guidance."
      />

      <section className="bg-navy py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Let's <span className="text-gold">Connect</span></h1>
          <p className="text-xl text-gray-400">Have a question? We're here to help you navigate your mortgage journey.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">Feel free to reach out via phone, email, or by visiting our office in Toronto. We typically respond within 2-4 business hours.</p>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gold shadow-sm border border-gray-100">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Phone Support</h4>
                    <p className="text-gray-500">(800) 555-WILL</p>
                    <p className="text-xs text-gray-400">Mon-Fri: 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gold shadow-sm border border-gray-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Email Us</h4>
                    <p className="text-gray-500">hello@willmortgages.ca</p>
                    <p className="text-xs text-gray-400">Direct inquiries: will@willmortgages.ca</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gold shadow-sm border border-gray-100">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Toronto Office</h4>
                    <p className="text-gray-500">123 Financial District,<br />Toronto, ON M5V 2L1</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
               <div className="flex items-center gap-3 mb-4">
                 <Clock className="text-gold" />
                 <h4 className="font-bold text-navy">Quick Response Guarantee</h4>
               </div>
               <p className="text-sm text-gray-600">
                 We know time is of the essence when it comes to real estate. If you submit a query, we guarantee a response within one business day, or we'll provide a $50 closing credit.
               </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative h-[600px]">
             {/* Map Placeholder */}
             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
               <div className="text-center">
                 <MapPin size={48} className="mx-auto mb-4" />
                 <p className="font-bold uppercase tracking-widest text-sm">Interactive Map Unavailable</p>
                 <p className="text-xs mt-2">Will Mortgage Services - Toronto Office</p>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
