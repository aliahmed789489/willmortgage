
import React, { useState, useEffect } from 'react';
import { Calculator, Info, Calendar } from 'lucide-react';

const MortgageCalculator: React.FC = () => {
  const [price, setPrice] = useState(600000);
  const [downPayment, setDownPayment] = useState(120000);
  const [rate, setRate] = useState(4.99);
  const [amortization, setAmortization] = useState(25);
  const [payment, setPayment] = useState(0);

  const calculatePayment = () => {
    const loanAmount = price - downPayment;
    if (loanAmount <= 0) return 0;

    // Canadian Mortgage Calculation Logic
    // Interest is compounded semi-annually by law
    const nominalRate = rate / 100;
    const effectiveAnnualRate = Math.pow(1 + nominalRate / 2, 2) - 1;
    const monthlyRate = Math.pow(1 + effectiveAnnualRate, 1 / 12) - 1;
    const numberOfPayments = amortization * 12;

    const monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return isNaN(monthlyPayment) ? 0 : monthlyPayment;
  };

  useEffect(() => {
    setPayment(calculatePayment());
  }, [price, downPayment, rate, amortization]);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-navy p-6 text-white flex items-center gap-3">
        <Calculator className="text-gold" />
        <h3 className="text-xl font-bold">Mortgage Payment Calculator</h3>
      </div>
      
      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Purchase Price ($)</label>
            <input 
              type="number" 
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Down Payment ($)</label>
            <input 
              type="number" 
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
            />
            <p className="text-[10px] text-gray-500 mt-1 italic">
              Min required: ${(price * (price < 500000 ? 0.05 : 0.10)).toLocaleString()} estimate
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate (%)</label>
              <input 
                type="number" 
                step="0.01"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Amortization (Years)</label>
              <select 
                value={amortization}
                onChange={(e) => setAmortization(Number(e.target.value))}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              >
                {[5, 10, 15, 20, 25, 30].map(y => <option key={y} value={y}>{y} Years</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center text-center border border-gray-100">
          <p className="text-gray-500 font-medium mb-1 uppercase tracking-wider text-xs">Estimated Monthly Payment</p>
          <div className="text-5xl font-bold text-navy mb-4">
            ${payment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <p className="text-gray-400 text-sm mb-8">
            Total Principal & Interest only. Does not include taxes or insurance.
          </p>
          
          <div className="w-full p-4 bg-white rounded-lg shadow-sm border border-gray-100 mb-6 flex items-start gap-3 text-left">
            <Info size={20} className="text-gold shrink-0 mt-0.5" />
            <p className="text-xs text-gray-600">
              In Canada, mortgage interest is calculated semi-annually. This calculator reflects standard Canadian compounding rules.
            </p>
          </div>

          <a 
            href="#book" 
            className="w-full bg-gold text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Calendar size={20} /> Get Your Custom Quote
          </a>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 text-[10px] text-gray-400 border-t border-gray-100">
        * This calculator provides estimates only. Actual rates and payments will vary based on credit score, lender policies, and market fluctuations.
      </div>
    </div>
  );
};

export default MortgageCalculator;
