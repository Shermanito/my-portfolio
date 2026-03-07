'use client';

import { useState, useEffect } from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { IconButton, ExternalLinkIcon, GitHubIcon } from '@/components/ui/IconButton';
import { projects } from '@/data/projects';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Get unique tech categories for filters
const allTech = projects.flatMap(p => p.tech);
const categories = ['All', ...new Set(allTech.slice(0, 6))];

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(filter));

  // Calculate initial visible count based on screen size
  const getInitialCount = () => isMobile ? 3 : 4;

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(getInitialCount());
  }, [filter, isMobile]);

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  const handleLoadMore = () => {
    // Desktop: add 2 more (one row), Mobile: add 3 more
    const increment = isMobile ? 3 : 2;
    setVisibleCount(prev => Math.min(prev + increment, filteredProjects.length));
  };

  const initialCount = getInitialCount();
  const hasMore = visibleCount < filteredProjects.length;
  const isExpanded = visibleCount > initialCount;

  return (
    <Section id="projects">
      <SectionHeader
        title="Projects"
        subtitle="Applications and tools I've built."
        centered={true}
      />

      {/* Filter Buttons - Centered */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.slice(0, visibleCount).map((project) => (
          <Card key={project.id} className="p-6">
            <CardHeader className="p-0 pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <div className="flex gap-1">
                  {project.link && (
                    <IconButton href={project.link} label="Visit">
                      <ExternalLinkIcon />
                    </IconButton>
                  )}
                  {project.github && (
                    <IconButton href={project.github} label="GitHub">
                      <GitHubIcon />
                    </IconButton>
                  )}
                </div>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="p-0">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More / Collapse Button */}
      {(hasMore || isExpanded) && (
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            onClick={() => {
              if (hasMore) {
                handleLoadMore();
              } else {
                setVisibleCount(getInitialCount());
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {hasMore ? 'View More Projects' : 'Collapse'}
          </Button>
        </div>
      )}
    </Section>
  );
}
