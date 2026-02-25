import { Section, SectionHeader } from '@/components/ui/Section';
import { techStack } from '@/data/tech';

export function TechStack() {
  return (
    <Section id="tech">
      <SectionHeader
        title="Tech Stack"
        subtitle="Tools and technologies I use to get things done."
        centered={true}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((category) => (
          <div key={category.category} className="neo-card p-6">
            <h3 className="heading-md mb-4">{category.category}</h3>
            <ul className="space-y-2">
              {category.items.map((item, i) => (
                <li key={i} className="text-sm text-foreground-muted flex items-center gap-2">
                  <span className="w-1 h-1 bg-[var(--spot-color)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
