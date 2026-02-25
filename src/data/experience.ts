import { Experience } from '@/lib/types';

export const experiences: Experience[] = [
  {
    id: '1',
    type: 'full-time',
    company: 'Company Name',
    role: 'Digital Marketing Manager',
    period: '2022 - Present',
    description: 'Leading digital marketing initiatives including PPC campaigns, SEO optimization, and website development.',
    highlights: [
      'Managed $500K+ annual ad spend across Google Ads and Meta',
      'Improved organic traffic by 150% through SEO strategies',
      'Built custom web applications using React and Node.js',
    ],
  },
  {
    id: '2',
    type: 'full-time',
    company: 'Previous Company',
    role: 'Marketing Specialist',
    period: '2020 - 2022',
    description: 'Executed marketing campaigns and managed client relationships.',
    highlights: [
      'Managed 20+ client accounts',
      'Increased client ROI by an average of 75%',
      'Implemented marketing automation workflows',
    ],
  },
  {
    id: '3',
    type: 'internship',
    company: 'Startup Inc',
    role: 'Marketing Intern',
    period: '2019 - 2020',
    description: 'Assisted with digital marketing tasks and learned industry best practices.',
    highlights: [
      'Conducted market research and competitor analysis',
      'Assisted with social media management',
      'Learned Google Analytics and SEO fundamentals',
    ],
  },
];
