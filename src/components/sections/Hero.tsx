'use client';

import { personalInfo } from '@/data/personal';
import { IconButton, LinkedInIcon, GitHubIcon, MailIcon, DribbbleIcon } from '@/components/ui/IconButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { DotBackground } from '@/components/ui/DotBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-4 md:px-8 overflow-hidden">
      {/* Dot Background Layer */}
      <DotBackground className="absolute inset-0" style={{ minHeight: '100vh' }} />
      
      <div className="content-wrapper w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
                    <div className="relative">
            <div className="absolute top-0 right-0">
              <ThemeToggle />
            </div>
            <p className="text-mono text-sm text-muted-foreground mb-4">
              DIGITAL MARKETING + DEVELOPMENT
            </p>
            <h1 className="heading-xl mb-6">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg">
              {personalInfo.title}
            </p>
            <p className="text-muted-foreground mb-8 max-w-md">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <IconButton href={personalInfo.socials[0].url} label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton href={personalInfo.socials[1].url} label="GitHub">
                <GitHubIcon />
              </IconButton>
              <IconButton href={personalInfo.socials[2].url} label="Dribbble">
                <DribbbleIcon />
              </IconButton>
              <IconButton href={`mailto:${personalInfo.email}`} label="Email">
                <MailIcon />
              </IconButton>
            </div>
          </div>

          {/* Right Content - Image + 2x2 Grid */}
          <div className="space-y-4">
            {/* Hero Image */}
            <div className="relative">
              <Card className="aspect-[4/3] overflow-hidden p-0">
                <img
                  src="/465997400 (1).jpeg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </Card>

              {/* Available for Work Badge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-card border border-border px-3 py-1.5 text-xs">
                <span className="w-2 h-2 rounded-full bg-[var(--spot-color)] animate-pulse" />
                <span>Available for Work</span>
              </div>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold mb-1">6+</div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold mb-1">$500K+</div>
                  <div className="text-xs text-muted-foreground">Ad Spend</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-xs text-muted-foreground">Clients</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold mb-1">100+</div>
                  <div className="text-xs text-muted-foreground">Websites Delivered</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
