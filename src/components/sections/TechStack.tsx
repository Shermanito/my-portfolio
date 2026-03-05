'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { techStack } from '@/data/tech';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { DotBackground } from '@/components/ui/DotBackground';

export function TechStack() {
  return (
    <Section id="tech" className="relative">
      {/* Dot Background Layer */}
      <DotBackground className="absolute inset-0" style={{ minHeight: '100%' }} />
      
      <div className="relative z-10">
        <SectionHeader
          title="Tech Stack"
          subtitle="Tools and technologies I use to get things done."
          centered={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((category) => (
          <Card key={category.category} className="p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-lg">{category.category}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-[var(--spot-color)] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
        </div>
      </div>
    </Section>
  );
}
