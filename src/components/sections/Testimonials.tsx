'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { testimonials } from '@/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader
        title="Testimonials"
        subtitle="What clients say about working with me."
        centered={true}
      />

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-6">
            <CardContent className="p-0">
              <blockquote className="text-muted-foreground mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <Separator className="my-4" />
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}
                  {testimonial.company && `, ${testimonial.company}`}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
