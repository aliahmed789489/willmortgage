import React from 'react';

export interface SEOConfig {
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  whoItsFor: string;
  benefits: string[];
  features: string[];
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  stars: number;
}