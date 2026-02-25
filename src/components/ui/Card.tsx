import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`neo-card p-6 ${hover ? 'hover:border-[var(--spot-color)]' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  title: string;
  subtitle?: string;
}

export function CardHeader({ title, subtitle }: CardHeaderProps) {
  return (
    <div className="mb-4">
      <h3 className="heading-md">{title}</h3>
      {subtitle && (
        <p className="text-foreground-muted text-sm mt-1">{subtitle}</p>
      )}
    </div>
  );
}
