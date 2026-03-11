# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 portfolio site using the App Router (`app/` directory). The project was bootstrapped with `create-next-app` and is in early development.

**Key choices:**
- **Tailwind CSS v4** — no `tailwind.config.*` file; theme customization goes in the `@theme` block inside `app/globals.css`
- **Path alias** — `@/*` resolves to the repo root (e.g., `import Foo from "@/app/components/Foo"`)
- **Fonts** — Geist Sans and Geist Mono loaded via `next/font/google`, exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`
- **TypeScript strict mode** is enabled

No test framework is configured yet.
