import { personalInfo } from '@/data/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border pt-8 pb-[calc(2rem+4.5rem+env(safe-area-inset-bottom))] md:py-8 px-4 md:px-8">
      <div className="content-wrapper">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Sherman. Available for contract and full-time.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
