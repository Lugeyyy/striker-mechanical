<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Agent Development Guide

## Project Overview

Striker Mechanical is a React + Bun application using Tailwind CSS and shadcn/ui components. This is a modern web application for a mechanical repair business.

## Spec-Driven Development with OpenSpec

This project uses **OpenSpec** for spec-driven development. OpenSpec is a methodology and toolset for creating, managing, and applying technical specifications in a structured way.

### OpenSpec Workspace
- **Location**: `@openspec/` directory
- **Key Files**:
  - `AGENTS.md` - Instructions for AI agents (this file)
  - `project.md` - Project context, tech stack, and conventions

### When to Use OpenSpec
Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

### OpenSpec Benefits
- **Consistency**: Ensures all changes follow established patterns
- **Quality**: Forces thinking through requirements before implementation
- **Collaboration**: Provides shared understanding between team members and AI agents
- **Documentation**: Creates living documentation that stays in sync with code

### Working with OpenSpec
- Read existing specs before making changes to understand context
- Create change proposals for significant work
- Update project.md when introducing new technologies or patterns
- Keep the managed OpenSpec block intact so 'openspec update' can refresh instructions

### Domain-Specific Information
For detailed business requirements, target audience, service offerings, and brand guidelines:
- **Reference**: `@docs/requirements.md`
- **Contains**: Business purpose, ideal customers, service priorities, brand personality, customer concerns
- **Use When**: Implementing features that align with business goals, writing copy, designing user flows, or making decisions about prioritization

## Build and Development Commands

### Core Commands
- **Development server**: `bun dev` - Starts hot-reloading development server
- **Production start**: `bun start` - Runs the application in production mode
- **Build**: `bun run build.ts` - Builds the application for production
- **Build with options**: `bun run build.ts [options]` - Use --help for full options

### Build Options (Key Examples)
```bash
# Standard build
bun run build.ts

# Custom output directory
bun run build.ts --outdir=build

# Minified build with source maps
bun run build.ts --minify --sourcemap=linked

# External dependencies (bundle size optimization)
bun run build.ts --external=react,react-dom
```

### Testing
- No formal test setup currently exists
- Manual testing via the built-in API tester component at `/api/hello`
- When implementing features, create comprehensive testing strategies before coding
- Always run development server to verify changes work correctly

## Code Style Guidelines

### TypeScript Configuration
- Strict mode enabled
- React JSX with ESNext target
- Path aliasing: `@/*` maps to `./src/*`
- Bundler module resolution

### Import Conventions
```typescript
// External libraries first
import React from "react";
import { Slot } from "@radix-ui/react-slot";

// Internal imports with path alias
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Relative imports for local files
import { APITester } from "./APITester";
```

**Import Rules:**
- Group imports: external → internal (path alias) → relative
- Use `@/` prefix for all internal imports from `src/`
- Import React components with braces for named exports, default for `React`
- Import types with `type` keyword: `import { type FormEvent } from "react"`

### Component Structure
- Use function components with TypeScript interfaces
- Forward refs for UI components
- Use shadcn/ui patterns for component variants (cva)
- Use `data-slot` attribute for component identification
- Export both component and variants: `export { Button, buttonVariants }`

### Styling
- Tailwind CSS classes only (no inline styles)
- Use the `cn` utility for conditional class merging
- Follow shadcn/ui component patterns
- Respect accessibility with proper aria labels

### Error Handling
- Use try-catch blocks for async operations
- Display errors in user-friendly format
- Console logging for debugging

### Naming Conventions
- **Components**: PascalCase (e.g., `APITester`, `Button`)
- **Files**: kebab-case for utilities, PascalCase for components
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Functions**: camelCase, descriptive verbs

### File Organization
```
src/
├── components/
│   └── ui/           # shadcn/ui components
├── lib/              # Utility functions
├── App.tsx           # Main application component
├── index.ts          # Server entry point
└── index.html        # HTML template
```

### Server Structure
- Bun serve with file-based routing
- API routes in `src/index.ts` under `/api/` prefix
- SPA fallback to index.html for client routes

### UI Components
- Use Radix UI primitives with Tailwind styling
- Follow shadcn/ui patterns for variants and props
- Implement proper focus states and transitions
- Support both light and dark themes via CSS variables

### State Management
- React hooks for local state
- No global state management currently implemented
- Use refs for DOM manipulation when necessary

### Forms and Input
- Use semantic HTML5 form elements
- Proper labeling with htmlFor associations
- Form validation on submission
- Accessible input components from shadcn/ui

## Development Notes
- Hot Module Replacement (HMR) enabled in development
- Browser console logging mirrored to server console
- Supports dynamic imports and code splitting
- Tailwind processing handled by bun-plugin-tailwind

## Linting and Code Quality
- TypeScript strict mode enforced
- No explicit linting configuration found
- Follow React best practices for hooks and component lifecycle

## Special Development Guidelines

### Animations and Motion
- Use CSS animations defined in `src/index.css`
- Respect `prefers-reduced-motion` media queries
- Bun logo background animation uses `slide` keyframe animation
- React logo uses `spin` keyframe animation for visual interest

### API Development
- API routes defined in `src/index.ts` under `/api/` prefix
- Use Bun's file-based routing pattern
- Support multiple HTTP methods per route (GET, PUT, POST, etc.)
- Return JSON responses with appropriate status codes
- Include method information in responses for debugging

### Form Handling
- Use semantic HTML5 form elements with proper labels
- Implement `onSubmit` handlers with `FormEvent` typing
- Use `FormData` API for form data extraction
- Handle errors gracefully with try-catch blocks
- Display errors in user-friendly format
- Use refs for direct DOM manipulation when needed (e.g., textarea values)

### Component Props and Types
- Use `React.ComponentProps` for extending native element props
- Use `VariantProps` from class-variance-authority for variant typing
- Combine props with intersection operator (`&`)
- Use optional chaining and non-null assertion (`!`) when appropriate
- Export types for component reuse in other files

### Accessibility Requirements
- Use `sr-only` class for screen reader-only labels
- Implement proper `htmlFor` associations between labels and inputs
- Include focus states and transitions for interactive elements
- Support keyboard navigation and ARIA attributes
- Use semantic HTML5 elements appropriately

### Performance Considerations
- Leverage Bun's fast build times and hot module replacement
- Use dynamic imports for code splitting when appropriate
- Minimize bundle size with external dependencies in build
- Optimize images and assets for web delivery
- Use React's built-in optimization patterns (memo, callback when needed)