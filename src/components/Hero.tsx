import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary text-foreground">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.08\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }} />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Brand logo/name */}
        <div className="mb-8">
          <img 
            src="./logo.png" 
            alt="Striker Mechanical" 
            className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-4 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Striker <span className="text-primary">Mechanical</span>
          </h1>
        </div>

        {/* Main headline */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 max-w-3xl mx-auto leading-tight">
          Professional Mechanical Repair & Diagnostics
        </h2>

        {/* Value proposition subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Expert mechanical solutions for engines, drivetrains, and powersports equipment. 
          Get back on the road with reliable, professional service.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold min-w-[200px]"
            onClick={() => console.log('Request quote clicked')}
          >
            Request Quote
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold min-w-[200px]"
            onClick={() => console.log('Contact clicked')}
          >
            Contact Us
          </Button>
        </div>

        {/* Additional trust indicators */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Emergency Service Available</span>
          </div>
          <div className="hidden md:block">|</div>
          <div>Licensed & Insured</div>
          <div className="hidden md:block">|</div>
          <div>Fast Turnaround</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-muted-foreground" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
}