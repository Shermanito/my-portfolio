'use client';

import { useState } from 'react';
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

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(filter));

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
            onClick={() => setFilter(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
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
    </Section>
  );
}
