
import React from 'react';
import { Home, RefreshCcw, Key, Wallet, ShieldCheck, Clock, Award, Users } from 'lucide-react';
import { ServiceDetail, FAQItem, Testimonial } from './types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'home-purchase',
    title: 'Home Purchase Loans',
    whoItsFor: 'First-time buyers, repeat buyers, and property investors looking for competitive rates.',
    benefits: [
      'Access to top institutional and private lenders',
      'Pre-approvals that hold your rate for up to 120 days',
      'Personalized strategy for down payment options'
    ],
    features: [
      'Low down payment options (5% for first $500k)',
      'Variable and Fixed rate terms',
      'Investment property specialized financing'
    ],
    icon: <Home className="w-8 h-8" />
  },
  {
    id: 'refinance',
    title: 'Refinance Solutions',
    whoItsFor: 'Homeowners looking to access equity for renovations, debt consolidation, or investments.',
    benefits: [
      'Lower your monthly interest costs',
      'Consolidate high-interest debt into one low mortgage payment',
      'Unlock up to 80% of your home value'
    ],
    features: [
      'Equity Take-out programs',
      'HELOC (Home Equity Line of Credit) options',
      'Mortgage switch programs'
    ],
    icon: <RefreshCcw className="w-8 h-8" />
  },
  {
    id: 'renewal',
    title: 'Mortgage Renewal',
    whoItsFor: 'Homeowners whose current mortgage term is expiring within the next 4-6 months.',
    benefits: [
      'Never accept the bank\'s first offer - we shop around for you',
      'Potential for lower rates than your current lender',
      'Free consultation to review your financial goals'
    ],
    features: [
      'Seamless lender switching',
      'Strategy to pay down principal faster',
      'No-cost switch programs available'
    ],
    icon: <Clock className="w-8 h-8" />
  },
  {
    id: 'private-lending',
    title: 'Private Lending Options',
    whoItsFor: 'Self-employed borrowers, those with credit challenges, or time-sensitive financing needs.',
    benefits: [
      'Fast approvals based on equity, not just credit score',
      'Flexible income verification requirements',
      'Short-term bridge financing available'
    ],
    features: [
      '1st and 2nd mortgage options',
      'Interest-only payment plans',
      'Bad credit/No credit solutions'
    ],
    icon: <Key className="w-8 h-8" />
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How much down payment do I need for a home in Canada?",
    answer: "Minimum down payment is 5% for the first $500,000 of the purchase price, and 10% for any amount between $500,000 and $999,999. Properties over $1 million require 20% down."
  },
  {
    question: "What is the difference between a fixed and variable rate?",
    answer: "Fixed rates stay the same for the entire term, providing payment certainty. Variable rates fluctuate with the lender's prime rate, which is influenced by the Bank of Canada. Historically, variable rates have often saved borrowers money over the long term."
  },
  {
    question: "When should I start the mortgage renewal process?",
    answer: "It's best to start 4 to 6 months before your maturity date. This gives us enough time to shop the market and lock in a lower rate without penalties from your current lender."
  },
  {
    question: "Can I get a mortgage if I am self-employed?",
    answer: "Yes! While traditional banks may be strict, we specialize in 'stated income' or self-employed programs that look at your business success and equity rather than just tax returns."
  },
  {
    question: "What are closing costs and how much should I budget?",
    answer: "Closing costs typically range from 1.5% to 4% of the purchase price. They include land transfer taxes, legal fees, title insurance, and property tax adjustments."
  },
  {
    question: "What is a mortgage stress test?",
    answer: "The stress test is a rule requiring borrowers to qualify for a mortgage at a rate higher than their actual contract rate. It ensures you can still afford payments if rates rise."
  },
  {
    question: "How long does a pre-approval last?",
    answer: "Most pre-approvals are valid for 90 to 120 days. This protects you from interest rate increases while you shop for your home."
  },
  {
    question: "Does using a mortgage broker cost me money?",
    answer: "In most cases, no. Mortgage brokers are typically paid by the lender. Fees only apply in specialized situations like private lending, and these are always disclosed upfront."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah & David Thompson",
    location: "Toronto, ON",
    text: "As first-time buyers, we were lost. Will walked us through every step, got us a better rate than our own bank, and made the process seamless. Highly recommend!",
    stars: 5
  },
  {
    name: "Marcus Chen",
    location: "Vancouver, BC",
    text: "Will's 10 years of experience really show. He helped me refinance my property to invest in a second one. His strategic advice was invaluable.",
    stars: 5
  },
  {
    name: "Elena Rodriguez",
    location: "Calgary, AB",
    text: "Being self-employed made it hard to get a mortgage. Will found a lender who understood my business model. Transparent and professional throughout.",
    stars: 5
  }
];
