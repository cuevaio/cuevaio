# Agent Guidelines

## Commands
- **Dev**: `bun run dev` (Next.js with Turbopack)
- **Build**: `bun run build`
- **Lint**: `bun run lint` (Biome)
- **Format**: `bun run format`
- **No test suite** currently configured

## Code Style
- **Formatter**: Biome with 2-space indentation
- **Imports**: Use `@/` for src imports; organize imports automatically (Biome assist enabled)
- **Types**: TypeScript strict mode; prefer explicit types for props and returns
- **Components**: Use `"use client"` directive when using React hooks/interactivity; forwardRef pattern for refs
- **Naming**: PascalCase for components, camelCase for functions/variables, SCREAMING_SNAKE_CASE for constants
- **Styling**: Tailwind CSS with `cn()` utility from `@/lib/utils`; prefer `dvh` over `vh`
- **UI Components**: shadcn/ui patterns with Radix UI primitives
- **Animation**: Use `motion/react` (Framer Motion v12+), not `framer-motion`
- **No comments**: Code should be self-documenting unless complex logic requires explanation

## Dependencies
- Next.js 15, React 19, TypeScript 5
- UI: Radix UI, Tailwind CSS, class-variance-authority, lucide-react
- Animation: motion (Framer Motion), use-sound
- hi
