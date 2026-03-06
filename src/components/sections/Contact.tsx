'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { IconButton, LinkedInIcon, GitHubIcon, MailIcon, MapPinIcon } from '@/components/ui/IconButton';
import { personalInfo } from '@/data/personal';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        title="Contact"
        subtitle="Let's work together. Get in touch."
        centered={true}
      />

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Info */}
        <div>
          <p className="text-muted-foreground mb-8 max-w-md">
            I'm always interested in hearing about new opportunities and projects.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <MailIcon />
              {personalInfo.email}
            </a>

            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPinIcon />
              {personalInfo.location}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
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

        {/* Contact Form / CTA */}
        <Card className="p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <Button className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
