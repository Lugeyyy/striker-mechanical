import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Wrench, CheckCircle, Clock, Shield, Zap, AlertTriangle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center concrete-texture overflow-hidden">
      {/* Industrial background layers */}
      <div className="absolute inset-0">
        {/* Weld seam vertical lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px rust-accent opacity-60" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px rust-accent opacity-60" />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `
              linear-gradient(var(--concrete-light) 1px, transparent 1px),
              linear-gradient(90deg, var(--concrete-light) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Mechanical elements */}
        <div className="absolute top-20 left-20 text-rust-accent/30 gear-grind">
          <Wrench className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 right-20 text-warning-orange/20 gear-grind" style={{ animationDelay: '2s' }}>
          <Wrench className="w-40 h-40" />
        </div>
        
        {/* Welding sparks */}
        <div className="absolute top-1/3 left-1/3 welding-spark">
          <Zap className="w-8 h-8 text-warning-orange" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 welding-spark" style={{ animationDelay: '0.3s' }}>
          <Zap className="w-6 h-6 text-industrial-yellow" />
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Brutalist brand presentation */}
        <div className="mb-12 industrial-reveal">
          {/* Industrial logo presentation */}
          <div className="relative inline-block mb-8 transform rotate(-2deg)">
            <div className="absolute inset-0 bg-rust-accent/20 blur-xl scale-110"></div>
            <div className="relative metal-surface p-8 transform skewX-2deg">
              <img 
                src="/src/logo.png" 
                alt="Striker Mechanical" 
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto object-contain"
              />
            </div>
          </div>
          
          {/* Brutalist typography */}
          <div className="relative mb-8">
            <div className="absolute -left-4 -top-2 text-warning-orange text-6xl font-black opacity-20 transform rotate-90">
              //
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter stencil-text text-brushed-metal mb-2 leading-none">
              STRIKER
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-rust-accent flex-grow"></div>
              <span className="text-warning-orange text-xl font-subheading">ESTD • 2024</span>
              <div className="h-px bg-rust-accent flex-grow"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-concrete-light mb-4">
              MECHANICAL
            </h2>
            
            {/* Industrial tagline */}
            <div className="metal-surface inline-block px-6 py-3 transform -rotate-1">
              <p className="text-industrial-yellow font-mono text-sm tracking-widest uppercase">
                [ PRECISION ENGINEERING • EXPERT REPAIRS • HEAVY DUTY ]
              </p>
            </div>
          </div>
        </div>

        {/* Brutalist headline */}
        <div className="relative mb-12">
          <div className="absolute left-0 top-1/2 w-24 h-px bg-warning-orange transform -translate-y-1/2"></div>
          <div className="ml-32">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brushed-metal leading-tight industrial-reveal" style={{ animationDelay: '0.2s' }}>
              HEAVY-DUTY REPAIR
              <span className="block text-4xl md:text-5xl lg:text-6xl text-rust-accent">
                & DIAGNOSTICS
              </span>
            </h3>
          </div>
        </div>

        {/* Industrial value proposition */}
        <div className="max-w-4xl mx-auto mb-16 industrial-reveal" style={{ animationDelay: '0.4s' }}>
          <div className="metal-surface p-8 transform rotate-1">
            <p className="text-xl md:text-2xl font-subheading text-concrete-light leading-relaxed font-medium">
              INDUSTRIAL-GRADE MECHANICAL SOLUTIONS FOR ENGINES, DRIVETRAINS, AND POWERSPORTS EQUIPMENT. 
              WE FIX WHAT OTHERS CAN'T — GUARANTEED PERFORMANCE AND RELIABILITY.
            </p>
          </div>
        </div>

        {/* Brutalist CTAs */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mb-20 industrial-reveal" style={{ animationDelay: '0.6s' }}>
          <button 
            className="industrial-button group relative overflow-hidden"
            onClick={() => console.log('Request quote clicked')}
          >
            <span className="relative z-10 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6" />
              GET FREE QUOTE
            </span>
            <div className="absolute inset-0 bg-warning-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button 
            className="relative metal-surface px-8 py-6 transform skewX-2deg transition-transform hover:skewX-1 hover:scale-105"
            onClick={() => console.log('Contact clicked')}
          >
            <span className="font-subheading font-black text-xl tracking-widest text-concrete-light">
              // CALL NOW
            </span>
          </button>
        </div>

        {/* Industrial trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto industrial-reveal" style={{ animationDelay: '0.8s' }}>
          <div className="metal-surface p-6 transform -rotate-1 mechanical-hover">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-safety-green/20 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-safety-green" />
              </div>
              <div className="h-px bg-concrete-light flex-grow"></div>
            </div>
            <h4 className="font-heading text-xl font-black text-concrete-light mb-2">EMERGENCY SERVICE</h4>
            <p className="font-mono text-sm text-raw-steel">24/7 • RAPID RESPONSE • ON-SITE</p>
          </div>
          
          <div className="metal-surface p-6 transform rotate-1 mechanical-hover" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-rust-accent/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-rust-accent" />
              </div>
              <div className="h-px bg-concrete-light flex-grow"></div>
            </div>
            <h4 className="font-heading text-xl font-black text-concrete-light mb-2">CERTIFIED TECHS</h4>
            <p className="font-mono text-sm text-raw-steel">LICENSED • INSURED • FACTORY-TRAINED</p>
          </div>
          
          <div className="metal-surface p-6 transform -rotate-1 mechanical-hover" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-industrial-yellow/20 flex items-center justify-center">
                <Clock className="w-8 h-8 text-industrial-yellow" />
              </div>
              <div className="h-px bg-concrete-light flex-grow"></div>
            </div>
            <h4 className="font-heading text-xl font-black text-concrete-light mb-2">HEAVY DUTY</h4>
            <p className="font-mono text-sm text-raw-steel">COMMERCIAL • INDUSTRIAL • MILITARY</p>
          </div>
        </div>
      </div>

      {/* Industrial scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hydraulic-motion">
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-warning-orange blur-lg opacity-50"></div>
            <span className="relative font-mono text-sm tracking-widest text-industrial-yellow">SCROLL</span>
          </div>
          <div className="relative">
            <div className="w-16 h-16 border-2 border-rust-accent flex items-center justify-center metal-surface">
              <div className="w-8 h-8 bg-warning-orange animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}