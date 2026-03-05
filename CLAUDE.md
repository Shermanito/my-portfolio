# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (uses webpack to avoid Turbopack bug in Next.js 16)
npm run build      # Build for production (outputs to dist/ for Coolify deployment)
npm run lint       # Run ESLint
npm run start      # Start production server
```

## Project Architecture

- **Framework**: Next.js 16 with App Router
- **UI Library**: shadcn/ui components
- **Styling**: Tailwind CSS 4 with CSS variables
- **Fonts**: Inter (sans-serif), JetBrains Mono (monospace)

### Key Directories

- `src/app/` - Next.js pages and layouts
- `src/components/ui/` - shadcn/ui components (button, card, badge, etc.)
- `src/components/sections/` - Page sections (Hero, About, Projects, etc.)
- `src/data/` - Static data files (personal.ts, projects.ts, etc.)
- `src/lib/` - Utilities (utils.ts, types.ts)

### Theme System

- **Dark theme**: Default, uses `.dark` class on `<html>`
- **Light theme**: Uses `.light` class on `<html>`
- **Theme toggle**: `src/components/ui/theme-toggle.tsx`
- **Theme provider**: `src/components/ui/theme-provider.tsx`
- **CSS variables**: Defined in `src/app/globals.css`

## Design Rules

1. **No absolute blacks/whites** - Use layered grays (gray-50 through gray-950)
2. **No gradients** - Flat design only
3. **No shadows** - Border-based separation only
4. **Border radius** - Use `--radius` CSS variable (0.625rem)
5. **Spot color** - Orange accent `#ff6b00` via `var(--spot-color)`

### Dark Theme Colors
- Background: `#171717` (gray-900)
- Card: `#1a1a1a`
- Border: `#333333`

### Light Theme Colors
- Background: `#f5f5f5` (gray-100)
- Card: `#ffffff`
- Border: `#d4d4d4` (gray-300)

## Browser Extension Warning

The dev server may show hydration mismatch errors due to browser extensions (e.g., Grammarly). This is not a code issue - use incognito mode to test.
