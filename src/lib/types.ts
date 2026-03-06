export interface Experience {
  id: string;
  type: 'full-time' | 'contract' | 'internship';
  company: string;
  companyType?: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface MarketingProject {
  id: string;
  company: string;
  industry: string;
  services: string[];
  results: string[];
  link?: string;
  testimonial?: string;
  testimonialAuthor?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface TechItem {
  category: string;
  items: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company?: string;
  summary?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
