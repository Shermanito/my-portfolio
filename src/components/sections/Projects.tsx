'use client';

import { useState } from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { IconButton, ExternalLinkIcon, GitHubIcon } from '@/components/ui/IconButton';
import { projects } from '@/data/projects';

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
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="neo-card p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="heading-md">{project.name}</h3>
              <div className="flex gap-2">
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

            <p className="text-foreground-muted mb-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs border border-[var(--border-color)] text-foreground-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
