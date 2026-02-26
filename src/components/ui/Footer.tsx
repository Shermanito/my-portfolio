import { personalInfo } from '@/data/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4 md:px-8">
      <div className="content-wrapper">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
