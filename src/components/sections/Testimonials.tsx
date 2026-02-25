import { Section, SectionHeader } from '@/components/ui/Section';
import { testimonials } from '@/data/testimonials';

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
          <div key={testimonial.id} className="neo-card p-6">
            <blockquote className="text-foreground-muted mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="border-t border-[var(--border-light)] pt-4">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-foreground-muted">
                {testimonial.title}
                {testimonial.company && `, ${testimonial.company}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
