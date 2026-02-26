'use client';

import { useState } from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {industries.map((industry) => (
          <Button
            key={industry}
            variant={filter === industry ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter(industry)}
          >
            {industry}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            {/* Placeholder Image */}
            <div className="aspect-video bg-secondary rounded-t-xl border border-b-0 border-border overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${project.id}/600/340`}
                alt={project.company}
                className="w-full h-full object-cover"
              />
            </div>

            <Card className="rounded-t-none">
              <CardHeader>
                <CardTitle>{project.company}</CardTitle>
                <CardDescription>{project.industry}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* Services */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    Services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, i) => (
                      <Badge key={i} variant="outline">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    Results
                  </p>
                  <ul className="space-y-1">
                    {project.results.map((result, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 bg-[var(--spot-color)] flex-shrink-0 rounded-full" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                {project.testimonial && (
                  <div className="border-t pt-4 mt-4">
                    <blockquote className="text-sm text-muted-foreground italic">
                      &ldquo;{project.testimonial}&rdquo;
                    </blockquote>
                    {project.testimonialAuthor && (
                      <p className="text-xs text-muted-foreground mt-2">
                        — {project.testimonialAuthor}
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
