import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 px-4 md:px-8 ${className}`}
    >
      <div className="content-wrapper">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-6 ${centered ? 'centered-header' : ''}`}>
      {/* Divider with + on both sides */}
      <div className="divider-plus mb-4">
        <div className="divider-line" />
      </div>

      <h2 className="heading-lg">{title}</h2>

      {subtitle && (
        <p className={`text-muted-foreground mt-2 ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Divider() {
  return (
    <div className="divider-plus">
      <div className="divider-line" />
    </div>
  );
}
