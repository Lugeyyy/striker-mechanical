# Striker Mechanical

A modern web application for Striker Mechanical - a professional mechanical repair service specializing in machines, vehicles, and equipment diagnostics and repair.

Built with React, Bun, Tailwind CSS, and shadcn/ui components for a fast, responsive, and accessible user experience.

## About Striker Mechanical

Striker Mechanical exists to keep machines, vehicles, and equipment running hard and reliably—without excuses or shortcuts.

### Who We Serve
- Off-road riders & powersports owners
- Small businesses with equipment or fleet vehicles
- Customers tired of unreliable or lazy mechanical work

### Our Approach
We diagnose properly, not guess. Our hands-on, mechanical-first approach focuses on durability and performance rather than temporary fixes. We speak straight—no upselling, no BS.

### Services Offered

**Priority Services:**
1. Mechanical repair & diagnostics
2. Engine & drivetrain work
3. Powersports / off-road vehicle repair
4. Preventative maintenance & inspections

**Coming Soon:**
- Performance upgrades
- Custom builds
- Merch (hats, hoodies, decals)

### Key Differentiators
- ✅ Proper diagnosis, not guessing
- ✅ Hands-on, mechanical-first (not just parts swappers)
- ✅ Focus on durability and performance
- ✅ Straight talk—no upselling, no BS
- ✅ Repairs you can trust, not repeat visits

## Tech Stack

- **Runtime**: Bun (fast all-in-one JavaScript runtime)
- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4.x
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Build Tool**: Bun's native build system
- **Icons**: Lucide React

## Quick Start

### Prerequisites
- Bun v1.3.4 or later ([install Bun](https://bun.sh/))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd striker-mechanical
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun dev
```

4. Open your browser and navigate to `http://localhost:3000`

The development server includes hot module replacement (HMR) for instant feedback during development.

## Development

### Available Scripts

- `bun dev` - Start development server with hot reload
- `bun start` - Run in production mode
- `bun run build` - Build for production

### Build Options

Customize your build with these options:

```bash
# Standard build
bun run build

# Custom output directory
bun run build --outdir=build

# Minified build with source maps
bun run build --minify --sourcemap=linked

# External dependencies (bundle size optimization)
bun run build --external=react,react-dom

# See all options
bun run build --help
```

### File Structure

```
striker-mechanical/
├── docs/
│   └── requirements.md          # Business requirements and guidelines
├── openspec/
│   ├── AGENTS.md                # AI agent instructions
│   └── project.md               # Project context and conventions
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── Hero.tsx            # Homepage hero section
│   │   ├── Services.tsx        # Services showcase
│   │   ├── Contact.tsx         # Contact form
│   │   └── ui/                 # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── select.tsx
│   │       ├── textarea.tsx
│   │       └── theme-toggle.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Theme provider (light/dark mode)
│   ├── lib/
│   │   └── utils.ts           # Utility functions (cn helper)
│   ├── APITester.tsx           # API testing component
│   ├── App.tsx                 # Main application component
│   ├── frontend.tsx            # Frontend entry point
│   ├── index.css               # Global styles and Tailwind directives
│   └── index.ts                # Server entry point with routing
├── AGENTS.md                   # Development guidelines
├── package.json
├── README.md
├── tsconfig.json              # TypeScript configuration
└── build.ts                   # Build script
```

### Component Architecture

The application follows a component-based architecture with clear separation of concerns:

- **App.tsx**: Root component with ThemeProvider
- **Hero.tsx**: Landing section with brand messaging
- **Services.tsx**: Service offerings showcase
- **Contact.tsx**: Contact form and information
- **UI Components**: Reusable shadcn/ui components with consistent styling

### Theme System

The application supports light and dark themes:

- **ThemeContext.tsx**: Manages theme state across the application
- **ThemeToggle.tsx**: UI component for switching themes
- Theme preferences are persisted in localStorage
- System preference detection for automatic theme selection

## Deployment

### Vercel Deployment

1. Install Vercel CLI:
```bash
bun install -g vercel
```

2. Build the project:
```bash
bun run build
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to configure your deployment

### Netlify Deployment

1. Create a `netlify.toml` file:
```toml
[build]
  command = "bun run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Deploy via Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

Or connect your repository in Netlify dashboard and use these build settings:
- **Build command**: `bun run build`
- **Publish directory**: `build`

### Docker Deployment

1. Create a `Dockerfile` in the project root:
```dockerfile
FROM oven/bun:latest

WORKDIR /app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --production

# Copy built files
COPY build ./build

# Expose port
EXPOSE 3000

# Start server
CMD ["bun", "start"]
```

2. Build and run:
```bash
# Build Docker image
docker build -t striker-mechanical .

# Run container
docker run -p 3000:3000 striker-mechanical
```

### Traditional Web Hosting

1. Build the project:
```bash
bun run build
```

2. Upload the contents of the `build` directory to your web host
3. Configure your server to serve static files and redirect all routes to `index.html`

### Environment Variables

No environment variables are currently required for the basic application. If you add features that need configuration, you can create a `.env` file:

```env
# Example environment variables
NODE_ENV=production
API_URL=https://your-api-url.com
```

## Customization

### Styling & Branding

- **Colors**: Modify CSS variables in `src/index.css` for theme colors
- **Typography**: Update font settings in Tailwind configuration
- **Icons**: Replace Lucide icons in components as needed

### Content Management

Update business information in these files:
- `src/components/Hero.tsx` - Homepage messaging
- `src/components/Services.tsx` - Service descriptions
- `src/components/Contact.tsx` - Contact details
- `docs/requirements.md` - Business requirements document

### Adding New Pages

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Add navigation if needed (use existing UI components)

### Adding UI Components

Follow the shadcn/ui pattern:
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const yourVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "variant-classes",
        // ...
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface YourComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof yourVariants> {
  // Your custom props
}

export const YourComponent = React.forwardRef<HTMLDivElement, YourComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(yourVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
YourComponent.displayName = "YourComponent"
```

## Development Practices

### Code Style

- **Components**: PascalCase (e.g., `Hero`, `Services`)
- **Files**: kebab-case for utilities, PascalCase for components
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Functions**: camelCase with descriptive verbs

### Import Conventions

```typescript
// External libraries first
import React from "react";
import { Slot } from "@radix-ui/react-slot";

// Internal imports with path alias (@/ maps to src/)
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Relative imports for local files
import { APITester } from "./APITester";
```

### TypeScript Configuration

- Strict mode enabled
- Path aliasing: `@/*` maps to `./src/*`
- React JSX with ESNext target
- Use `type` keyword for type-only imports

### Component Patterns

- Use function components with TypeScript interfaces
- Forward refs for UI components
- Use `cn` utility for conditional class merging
- Implement proper focus states and transitions
- Support both light and dark themes

### Accessibility

- Use semantic HTML5 elements
- Proper `htmlFor` associations between labels and inputs
- Include focus states for interactive elements
- Screen reader-only labels using `sr-only` class
- ARIA attributes where needed

## Support

For inquiries about services, quotes, or to contact Striker Mechanical:

- **Primary Actions**: Request a quote, Contact Striker Mechanical
- **Secondary**: Follow on social media, Check out merch

## License

This project is private and proprietary.

---

**Striker Mechanical** - Fixing it right, no shortcuts, no excuses.
