'use client';

import { useState } from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { marketingProjects } from '@/data/portfolio';

// Get unique industries for filters
const industries = ['All', ...new Set(marketingProjects.map(p => p.industry))];

// Get unique services for filters
const allServices = marketingProjects.flatMap(p => p.services);
const services = ['All', ...new Set(allServices)];

export function MarketingPortfolio() {
  const [industryFilter, setIndustryFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredProjects = marketingProjects.filter(p => {
    const matchesIndustry = industryFilter === 'All' || p.industry === industryFilter;
    const matchesService = serviceFilter === 'All' || p.services.includes(serviceFilter);
    return matchesIndustry && matchesService;
  });

  // Reset expanded state when filters change
  const handleFilterChange = (type: 'industry' | 'service', value: string) => {
    if (type === 'industry') {
      setIndustryFilter(value);
    } else {
      setServiceFilter(value);
    }
    setIsExpanded(false);
  };

  return (
    <Section id="portfolio">
      <SectionHeader
        title="Marketing Portfolio"
        subtitle="Freelancing clients and results I've delivered."
        centered={true}
      />

      {/* Filter Buttons - Centered */}
      <div className="flex flex-col gap-4 mb-8">
        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          <span className="text-sm text-muted-foreground self-center mr-2">Industry:</span>
          {industries.map((industry) => (
            <Button
              key={industry}
              variant={industryFilter === industry ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFilterChange('industry', industry)}
            >
              {industry}
            </Button>
          ))}
        </div>
        {/* Service Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          <span className="text-sm text-muted-foreground self-center mr-2">Service:</span>
          {services.map((service) => (
            <Button
              key={service}
              variant={serviceFilter === service ? 'secondary' : 'outline'}
              size="sm"
              onClick={() => handleFilterChange('service', service)}
            >
              {service}
            </Button>
          ))}
        </div>
      </div>

      {/* Expandable Grid Container */}
      <div className="relative">
        <div 
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 overflow-hidden ${
            isExpanded ? 'max-h-none' : 'max-h-[500px]'
          }`}
        >
          {filteredProjects.map((project) => (
            <div key={project.id}>
              {/* Placeholder Image - Solid Color Pattern */}
              <div className="aspect-video bg-secondary rounded-t-xl border border-b-0 border-border overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-muted-foreground/30">
                    {project.company.charAt(0)}
                  </p>
                  <p className="text-xs text-muted-foreground/50">Coming Soon</p>
                </div>
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
                        <Badge 
                          key={i} 
                          variant={serviceFilter === service ? 'default' : 'outline'}
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => handleFilterChange('service', serviceFilter === service ? 'All' : service)}
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
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

        {/* Blueprint Style Toggle */}
        {filteredProjects.length > 6 && (
          <div className="border-t border-zinc-800 mt-0 py-4 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="transition-all duration-500"
            >
              {isExpanded ? 'Show Less' : 'View More Projects'}
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
