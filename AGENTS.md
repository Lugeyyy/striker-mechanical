<!-- OPENSPEC:START -->
# OpenSpec Instructions

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need to authoritative spec before coding

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Agent Development Guide

Striker Mechanical: React + Bun application with Tailwind CSS and shadcn/ui components for a mechanical repair business website.

## Build Commands

**Core:**
- `bun dev` - Start hot-reloading dev server on available port
- `bun start` - Run production server (NODE_ENV=production)
- `bun run build.ts` - Build for production (outputs to `dist/`)

**Build Options:**
```bash
bun run build.ts --outdir=build --minify --sourcemap=linked --external=react,react-dom
bun run build.ts --help
```

**Linting & Testing:**
- No formal linting or test configuration exists
- Manual testing via dev server
- Verify changes work in `bun dev` before proceeding

## Code Style Guidelines

### TypeScript
- Strict mode enabled (`strict: true`)
- JSX: `react-jsx`, Target: `ESNext`
- Path aliasing: `@/*` → `./src/*`
- Use `type` keyword for type-only imports: `import { type FormEvent } from "react"`

### Import Conventions
```typescript
// 1. External libraries
import React from "react";
import { Slot } from "@radix-ui/react-slot";
// 2. Internal imports with path alias
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// 3. Relative imports for local files
import { APITester } from "./APITester";
```

### Component Structure
**shadcn/ui components:**
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva("base-classes", {
  variants: { variant: { default: "..." } },
  defaultVariants: { variant: "default" },
})

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof componentVariants> {
  // Custom props
}

export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(componentVariants({ variant, className }))} {...props} />
  )
)
Component.displayName = "Component"
```

**Regular components:**
- Use function components with TypeScript interfaces
- Export default for main components, named exports for reusable ones
- Use `data-slot` attribute for component identification

### Naming Conventions
- **Components**: PascalCase (`Hero`, `Services`)
- **Files**: kebab-case for utilities, PascalCase for components
- **Variables/Functions**: camelCase with descriptive verbs
- **Constants**: UPPER_SNAKE_CASE

### Styling
- Tailwind CSS classes only (no inline styles)
- Use `cn()` utility for conditional class merging
- Support both light/dark themes via CSS variables
- Respect accessibility with proper ARIA labels and focus states

### Error Handling
```typescript
try {
  await asyncOperation();
} catch (error) {
  console.error(error);
}
```

### Form Handling
```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
};
```

### File Organization
```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   └── *.tsx         # Feature components (Hero, Services, Contact)
├── contexts/         # React contexts (ThemeContext)
├── lib/             # Utilities (cn helper)
├── App.tsx          # Main app with ThemeProvider
├── frontend.tsx     # Frontend entry
├── index.ts         # Server entry with routes
└── index.css        # Global styles + Tailwind
```

### Server/API Structure
- Bun serve with file-based routing in `src/index.ts`
- API routes under `/api/` prefix with method handlers: `GET`, `PUT`, `POST`
- SPA fallback: `/*` → `index.html`
- Example: `/api/hello/:name` for dynamic routes

### Theme System
- Context-based theme management in `src/contexts/ThemeContext.tsx`
- Theme persisted in localStorage with system preference fallback
- Use `useTheme()` hook to access theme context
- Wrap app with `<ThemeProvider>`

### Accessibility
- Use `sr-only` class for screen reader-only labels
- Proper `htmlFor` attribute on labels
- ARIA attributes where needed
- Focus states for all interactive elements
- Semantic HTML5 elements

## OpenSpec Workflow

For domain-specific info (business requirements, brand guidelines):
- Reference: `@docs/requirements.md`

When to use OpenSpec:
- Planning proposals or specs
- Breaking changes or architecture shifts
- Big performance/security work
- Ambiguous requirements

OpenSpec Workspace: `@openspec/` directory with `AGENTS.md` and `project.md`
- Read existing specs before making changes
- Update `project.md` when introducing new technologies
