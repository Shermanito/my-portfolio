import { MarketingProject } from '@/lib/types';

export const marketingProjects: MarketingProject[] = [
  {
    id: '1',
    company: 'Client Company A',
    industry: 'E-commerce',
    services: ['PPC', 'SEO', 'Website Development'],
    results: [
      'Increased revenue by 120% YoY',
      'Reduced CAC by 45%',
      'Built custom Shopify theme',
    ],
    testimonial: 'Incredible results. Our online sales doubled within 6 months.',
    testimonialAuthor: 'John Doe, CEO',
  },
  {
    id: '2',
    company: 'Client Company B',
    industry: 'SaaS',
    services: ['SEO', 'Content Marketing', 'Analytics'],
    results: [
      'Organic traffic increased 200%',
      'Ranked #1 for main keywords',
      'Implemented full analytics stack',
    ],
  },
  {
    id: '3',
    company: 'Client Company C',
    industry: 'Healthcare',
    services: ['PPC', 'Website Redesign', 'Local SEO'],
    results: [
      'Lead generation up 80%',
      'Reduced cost per lead by 35%',
      'Built HIPAA-compliant appointment system',
    ],
    testimonial: 'Professional, knowledgeable, and delivered results.',
    testimonialAuthor: 'Jane Smith, Practice Manager',
  },
];
