'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { experiences } from '@/data/experience';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle className="text-lg">{experience.role}</CardTitle>
                    <CardDescription className="mt-1">
                      {experience.company}
                      {experience.companyType && (
                        <span className="text-muted-foreground/60"> · {experience.companyType}</span>
                      )}
                    </CardDescription>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-mono text-sm text-muted-foreground">
                      {experience.period}
                    </span>
                    <div className="flex gap-1 mt-2 justify-start sm:justify-end flex-wrap">
                      {experience.type === 'contract' && (
                        <Badge variant="outline">CONTRACT</Badge>
                      )}
                      {experience.type === 'internship' && (
                        <Badge variant="outline">INTERNSHIP</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <p className="text-muted-foreground mb-4">{experience.description}</p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {experience.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-[var(--spot-color)] flex-shrink-0 rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
