'use client';

import { personalInfo } from '@/data/personal';
import { IconButton, LinkedInIcon, GitHubIcon, MailIcon } from '@/components/ui/IconButton';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-4 md:px-8">
      <div className="content-wrapper w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <p className="text-mono text-sm text-foreground-muted mb-4">
              DIGITAL MARKETING + DEVELOPMENT
            </p>
            <h1 className="heading-xl mb-6">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-lg">
              {personalInfo.title}
            </p>
            <p className="text-foreground-muted mb-8 max-w-md">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-[var(--spot-color)] bg-[var(--spot-color)] text-white hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-[var(--border-color)] hover:border-foreground transition-colors"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <IconButton href={personalInfo.socials[0].url} label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton href={personalInfo.socials[1].url} label="GitHub">
                <GitHubIcon />
              </IconButton>
              <IconButton href={`mailto:${personalInfo.email}`} label="Email">
                <MailIcon />
              </IconButton>
            </div>
          </div>

          {/* Right Content - Image (50% smaller) + 2x2 Grid */}
          <div className="space-y-4">
            {/* Hero Image */}
            <div className="relative">
              <div className="neo-card aspect-[4/3] flex items-center justify-center overflow-hidden">
                {/* Use the provided hero image - place in public folder */}
                <img 
                  src="/465997400 (1).jpeg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Available for Work Badge */}
              <div className="available-badge">
                <span className="live-dot"></span>
                <span>Available for Work</span>
              </div>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="neo-card p-4 text-center">
                <div className="text-2xl font-bold mb-1">5+</div>
                <div className="text-xs text-foreground-muted">Years Exp</div>
              </div>
              <div className="neo-card p-4 text-center">
                <div className="text-2xl font-bold mb-1">$500K+</div>
                <div className="text-xs text-foreground-muted">Ad Spend</div>
              </div>
              <div className="neo-card p-4 text-center">
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-xs text-foreground-muted">Clients</div>
              </div>
              <div className="neo-card p-4 text-center">
                <div className="text-2xl font-bold mb-1">200%</div>
                <div className="text-xs text-foreground-muted">Avg Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
