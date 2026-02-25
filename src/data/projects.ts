import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Marketing Dashboard',
    description: 'A comprehensive marketing analytics dashboard with real-time data visualization.',
    tech: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: '2',
    name: 'AI Content Generator',
    description: 'AI-powered tool for generating marketing copy and social media content.',
    tech: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    link: 'https://example.com',
  },
  {
    id: '3',
    name: 'E-commerce Platform',
    description: 'Custom e-commerce solution with inventory management and payment processing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: '4',
    name: 'Lead Management CRM',
    description: 'CRM system for tracking leads through the sales funnel.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Auth0'],
  },
];
