'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        title="About"
        subtitle="I combine digital marketing expertise with full-stack development skills to create data-driven solutions."
        centered={true}
      />

      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground mb-4">
            I'm a digital marketing professional with a unique combination of marketing expertise
            and technical skills. Specializing in PPC, SEO, and website development, I help
            businesses grow their online presence and achieve measurable results.
          </p>
          <p className="text-muted-foreground mb-4">
            My background in marketing gives me insight into what drives conversions and ROI,
            while my development skills allow me to build custom solutions that generic tools
            can't provide. I leverage AI and automation to streamline processes and deliver
            better results.
          </p>
          <p className="text-muted-foreground">
            When I'm not optimizing campaigns or writing code, I'm staying up-to-date with
            the latest marketing trends and AI technologies to ensure my clients get
            cutting-edge solutions.
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}
