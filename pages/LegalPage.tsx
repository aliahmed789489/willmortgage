
import React from 'react';
import SEOHead from '../components/SEOHead';

const LegalPage: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <SEOHead title="Legal, Privacy & Compliance" description="Privacy policy and terms of service for Will Mortgage Services." />
      <div className="max-w-4xl mx-auto px-4 prose prose-navy">
        <h1 className="text-3xl font-bold text-navy mb-8">Privacy Policy & Terms of Service</h1>
        
        <section className="mb-12">
          <h2 className="text-xl font-bold text-navy mb-4">Privacy Policy Summary</h2>
          <p className="text-gray-600">
            At Will Mortgage Services, we value your privacy. We only collect information necessary to provide you with mortgage services. We adhere to the Personal Information Protection and Electronic Documents Act (PIPEDA) in Canada.
          </p>
          <ul className="text-gray-600 list-disc pl-6 space-y-2 mt-4">
            <li>We do not sell your personal data to third parties.</li>
            <li>Information is shared only with potential lenders to secure financing on your behalf.</li>
            <li>We use bank-level encryption to protect your sensitive documents.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-navy mb-4">Terms & Mortgage Disclaimers</h2>
          <p className="text-gray-600">
            By using this website, you agree to our terms of service. Mortgage products, interest rates, and lender conditions are subject to change without notice and are based on individual qualification.
          </p>
          <p className="text-gray-600 mt-4">
            Will Mortgage Services is a licensed mortgage brokerage firm. Brokerage license #12345. We are an equal housing lender. Our services are available primarily in Canada. All rates shown are OAC (On Approved Credit).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-4">Anti-Spam Policy</h2>
          <p className="text-gray-600">
            We comply with CASL (Canada's Anti-Spam Legislation). By submitting your email through our forms, you consent to receive communications regarding your mortgage inquiry. You may opt-out at any time.
          </p>
        </section>

        <div className="mt-16 p-6 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-500">
          Last Updated: January 2024. For full legal documentation, please contact our compliance department at legal@willmortgages.ca
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
