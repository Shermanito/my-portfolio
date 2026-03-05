'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { testimonials as testimonialData } from '@/data/testimonials';
import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01';

// Adapt existing data to new component format
const testimonials = testimonialData.map((t) => ({
  name: t.author,
  role: t.title,
  company: t.company || '',
  avatar: '',
  rating: 5,
  content: t.quote,
  summary: t.summary || '',
}));

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader
        title="Testimonials"
        subtitle="What clients say about working with me."
        centered={true}
      />

      <TestimonialsComponent testimonials={testimonials} />
    </Section>
  );
}
