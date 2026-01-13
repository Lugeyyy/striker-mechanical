# Project Context

## Purpose
Striker Mechanical exists to keep machines, vehicles, and equipment running hard and reliably—without excuses or shortcuts. The website serves as a digital platform to showcase mechanical repair services and connect with customers who depend on their equipment to work, make money, and stay safe. The site targets customers tired of unreliable or lazy mechanical work and positions Striker Mechanical as the solution that fixes it right the first time, minimizing costly downtime.

## Tech Stack
- **Runtime**: Bun (JavaScript runtime with built-in bundler, transpiler, and package manager)
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4.1.11 with shadcn/ui component library
- **UI Components**: Radix UI primitives (slots, labels, selects)
- **Build System**: Bun's native build system with custom build script
- **Development**: Hot Module Replacement (HMR) and browser console mirroring
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Project Conventions

### Code Style
- **TypeScript**: Strict mode enabled with ESNext target and React JSX
- **Imports**: External libraries first, then internal imports with `@/*` path alias, then relative imports
- **Components**: PascalCase naming, function components with TypeScript interfaces
- **Files**: kebab-case for utilities, PascalCase for components
- **Variables**: camelCase, Constants: UPPER_SNAKE_CASE
- **Styling**: Tailwind CSS classes only, use `cn` utility for conditional class merging
- **Comments**: No comments unless explicitly requested
- **Error Handling**: try-catch blocks for async operations, user-friendly error display

### Architecture Patterns
- **Server**: Bun serve with file-based routing, API routes under `/api/` prefix
- **SPA**: Single Page Application with fallback to index.html for client routes
- **Components**: shadcn/ui patterns with variants using class-variance-authority
- **State Management**: React hooks for local state (no global state management currently)
- **Build**: Customizable build script with support for minification, sourcemaps, code splitting

### Testing Strategy
- No formal test setup currently exists
- Manual testing via built-in API tester component at `/api/hello`
- Development relies on browser console mirroring and HMR for debugging

### Git Workflow
- Git repository initialized in project directory
- No specific branching strategy documented (should follow standard Git flow)
- Commit messages should follow conventional commit format when implemented

## Domain Context
- **Business Domain**: Mechanical repair and diagnostic services
- **Target Users**: 
  - Off-road riders & powersports owners
  - Small businesses with equipment or fleet vehicles  
  - People frustrated with unreliable or lazy mechanical work
- **Customer Problem**: Something mechanical isn't working, keeps breaking, or was fixed wrong before—they need someone who actually knows what they're doing and gives a damn
- **Key Differentiators**: 
  - Proper diagnosis, not guessing
  - Hands-on, mechanical-first approach (not just parts swappers)
  - Focus on durability and performance, not temporary fixes
  - Straight talk with no upselling or BS
- **Brand Personality**: Bold, tough, straightforward, mechanical, no-nonsense, confident (not flashy)
- **Core Message**: "Striker Mechanical fixes it right - no shortcuts, no excuses"

## Important Constraints
- **Performance**: Optimized for modern browsers with ESNext features
- **Accessibility**: Semantic HTML5, proper ARIA labels, shadcn/ui accessibility patterns
- **Bundle Size**: Build system supports external dependencies and code splitting for optimization
- **Development Environment**: Requires Bun runtime for optimal development experience
- **Browser Support**: Modern browsers with ESNext support
- **Brand Consistency**: Must maintain bold, tough, straightforward mechanical tone throughout
- **Customer Trust**: Site must address common concerns about cost, quality, timeline, and service scope
- **Primary CTAs**: Request a quote and Contact Striker Mechanical (secondary: social media follow, merch)

## External Dependencies
- **UI Framework**: Radix UI (@radix-ui/react-slot, @radix-ui/react-label, @radix-ui/react-select)
- **Icons**: Lucide React (v0.545.0)
- **CSS Framework**: Tailwind CSS with bun-plugin-tailwind integration
- **Animations**: tw-animate-css for Tailwind animations
- **Development**: TypeScript type definitions for React and Bun
- **Business Services**: 
  - Priority: Mechanical repair & diagnostics, Engine & drivetrain work, Powersports/off-road repair, Preventative maintenance & inspections
  - Future: Performance upgrades, Custom builds, Merch (hats, hoodies, decals)
- **Proof Points**: Real hands-on mechanical experience, before/after repairs, fixing issues others couldn't diagnose, word-of-mouth referrals, passion for engines and mechanical systems

## Build and Development Commands
- **Development**: `bun dev` - Hot-reloading development server
- **Production**: `bun start` - Production mode server
- **Build**: `bun run build.ts` - Customizable production build
- **Build Options**: Supports --outdir, --minify, --sourcemap, --external, and many more options
