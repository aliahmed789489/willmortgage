
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="bg-navy text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={14} className="text-gold" /> (800) 555-WILL</span>
            <span className="flex items-center gap-1"><Mail size={14} className="text-gold" /> hello@willmortgages.ca</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={14} className="text-gold" /> Serving All of Canada</span>
            <span className="bg-gold text-white px-2 py-0.5 rounded text-[10px] font-bold">10+ YEARS EXPERIENCE</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#" className="flex flex-col">
            <span className="text-2xl font-bold text-navy leading-none">WILL MORTGAGE</span>
            <span className="text-gold font-semibold tracking-widest text-[10px]">SERVICES</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-navy font-semibold hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#book" 
              className="bg-navy text-white px-6 py-3 rounded font-bold hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              <Calendar size={18} /> Book Consultation
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-navy font-semibold py-2 border-b last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#book" 
              className="bg-navy text-white px-6 py-4 rounded text-center font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Free Consultation
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div>
                <span className="text-2xl font-bold leading-none block">WILL MORTGAGE</span>
                <span className="text-gold font-semibold tracking-widest text-[10px]">SERVICES</span>
              </div>
              <p className="text-gray-400 text-sm">
                Providing expert mortgage advice and financing solutions for Canadians since 2014. Professional, transparent, and results-driven.
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-white p-2 rounded text-navy font-bold text-xs">Equal Housing Lender</div>
                <div className="bg-white p-2 rounded text-navy font-bold text-xs">A+ BBB Rating</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-gold pb-2 inline-block">Our Services</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-gold transition-colors">Home Purchase Loans</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Mortgage Refinancing</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Mortgage Renewal</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Private Lending</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Debt Consolidation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-gold pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-gold transition-colors">About Will</a></li>
                <li><a href="#calculator" className="hover:text-gold transition-colors">Mortgage Calculator</a></li>
                <li><a href="#book" className="hover:text-gold transition-colors">Book Online</a></li>
                <li><a href="#legal" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#legal" className="hover:text-gold transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-gold pb-2 inline-block">Contact Us</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold shrink-0" />
                  <span>123 Financial District,<br />Toronto, ON M5V 2L1</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gold shrink-0" />
                  <span>(800) 555-WILL</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-gold shrink-0" />
                  <span>hello@willmortgages.ca</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
            <p className="mb-4">
              © {new Date().getFullYear()} Will Mortgage Services. All rights reserved. 
              Mortgage Broker License #12345. NMLS ID Placeholder.
            </p>
            <p className="max-w-3xl mx-auto italic">
              Disclaimer: Rates and products are subject to lender criteria and can change without notice. 
              This website is for informational purposes and does not constitute a commitment to lend.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA - Mobile only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-4 flex gap-2 z-40">
        <a href="tel:18005559455" className="flex-1 bg-gray-100 text-navy font-bold py-3 rounded-lg flex items-center justify-center gap-2 border border-gray-200">
          <Phone size={18} /> Call
        </a>
        <a href="#book" className="flex-[2] bg-gold text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg">
          <Calendar size={18} /> Book Free Consult
        </a>
      </div>
    </div>
  );
};

export default Layout;
