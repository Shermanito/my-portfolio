'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        title="Experience"
        subtitle="My professional journey in digital marketing and development."
        centered={true}
      />

      {/* Responsive Timeline */}
      <div className="timeline max-w-3xl mx-auto">
        {experiences.map((experience, index) => (
          <div key={experience.id} className={`timeline-item ${index === 0 ? 'active' : ''}`}>
            <div className="timeline-dot" />
            
            <div className="neo-card p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <div>
                  <h3 className="heading-md">{experience.role}</h3>
                  <p className="text-foreground-muted">{experience.company}</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-mono text-sm text-foreground-muted">
                    {experience.period}
                  </span>
                  {experience.type === 'internship' && (
                    <span className="block mt-1 px-2 py-1 text-xs border border-[var(--border-color)] inline-block">
                      INTERNSHIP
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-foreground-muted mb-4">{experience.description}</p>

              {/* Highlights */}
              <ul className="space-y-2">
                {experience.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[var(--spot-color)] flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
