'use client';

import { useState } from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardHeader } from '@/components/ui/Card';
import { marketingProjects } from '@/data/portfolio';

// Get unique industries for filters
const industries = ['All', ...new Set(marketingProjects.map(p => p.industry))];

export function MarketingPortfolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? marketingProjects 
    : marketingProjects.filter(p => p.industry === filter);

  return (
    <Section id="portfolio">
      <SectionHeader
        title="Marketing Portfolio"
        subtitle="Freelancing clients and results I've delivered."
        centered={true}
      />

      {/* Filter Buttons - Centered */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setFilter(industry)}
            className={`filter-btn ${filter === industry ? 'active' : ''}`}
          >
            {industry}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            {/* Placeholder Image */}
            <div className="portfolio-img">
              <img 
                src={`https://picsum.photos/seed/${project.id}/600/340`} 
                alt={project.company}
              />
            </div>
            
            <Card>
              <CardHeader
                title={project.company}
                subtitle={project.industry}
              />

              {/* Services */}
              <div className="mb-4">
                <p className="text-xs text-foreground-muted uppercase tracking-wide mb-2">
                  Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs border border-[var(--border-color)]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-4">
                <p className="text-xs text-foreground-muted uppercase tracking-wide mb-2">
                  Results
                </p>
                <ul className="space-y-1">
                  {project.results.map((result, i) => (
                    <li key={i} className="text-sm text-foreground-muted flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 bg-[var(--spot-color)] flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="border-t border-[var(--border-light)] pt-4 mt-4">
                  <blockquote className="text-sm text-foreground-muted italic">
                    &ldquo;{project.testimonial}&rdquo;
                  </blockquote>
                  {project.testimonialAuthor && (
                    <p className="text-xs text-foreground-muted mt-2">
                      — {project.testimonialAuthor}
                    </p>
                  )}
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
