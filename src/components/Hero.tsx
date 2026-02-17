import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Wrench, CheckCircle, Clock, Shield, Zap, AlertTriangle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center concrete-texture overflow-hidden">
      {/* Industrial background layers */}
      <div className="absolute inset-0">
        {/* Weld seam vertical lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-blood-red opacity-60" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-blood-red opacity-60" />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 0, 0, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 0, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Mechanical elements */}
        <div className="absolute top-20 left-20 text-blood-red-echo gear-grind">
          <Wrench className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 right-20 text-blood-red-pattern gear-grind" style={{ animationDelay: '2s' }}>
          <Wrench className="w-40 h-40" />
        </div>
        
        {/* Welding sparks */}
        <div className="absolute top-1/3 left-1/3 welding-spark">
          <Zap className="w-8 h-8" style={{ color: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 4px rgba(159, 1, 1, 0.6))' }} />
        </div>
        <div className="absolute bottom-1/3 right-1/3 welding-spark" style={{ animationDelay: '0.3s' }}>
          <Zap className="w-6 h-6 text-silver-chrome" />
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Brutalist brand presentation */}
        <div className="mb-12 industrial-reveal">
          {/* Industrial logo presentation */}
          <div className="relative inline-block mb-8 transform rotate(-2deg)">
            <div className="absolute inset-0 bg-blood-red-echo blur-xl scale-110"></div>
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
            <div className="absolute -left-4 -top-2" style={{ color: 'var(--blood-red-bright)', textShadow: '0 0 4px rgba(159, 1, 1, 0.2)' }} className="text-6xl font-black opacity-20 transform rotate-90">
              //
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter stencil-text text-silver-chrome mb-2 leading-none">
              STRIKER
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-blood-red-echo flex-grow"></div>
              <span style={{ color: 'var(--blood-red-bright)' }} className="text-xl font-subheading">ESTD • 2024</span>
              <div className="h-px bg-blood-red-echo flex-grow"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-steel-gray mb-4">
              MECHANICAL
            </h2>
            
            {/* Industrial tagline */}
            <div className="metal-surface inline-block px-6 py-3 transform -rotate-1">
              <p className="text-silver-chrome font-mono text-sm tracking-widest uppercase">
                [ PRECISION ENGINEERING • EXPERT REPAIRS • HEAVY DUTY ]
              </p>
            </div>
          </div>
        </div>

        {/* Brutalist headline */}
        <div className="relative mb-12">
            <div className="absolute left-0 top-1/2 w-24 h-px" style={{ background: 'var(--blood-red-echo)', transform: 'translateY(-50%)' }}></div>
          <div className="ml-32">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-silver-chrome leading-tight industrial-reveal" style={{ animationDelay: '0.2s' }}>
              HEAVY-DUTY REPAIR
              <span style={{ color: 'var(--blood-red-bright)' }} className="block text-4xl md:text-5xl lg:text-6xl">
                & DIAGNOSTICS
              </span>
            </h3>
          </div>
        </div>

        {/* Industrial value proposition */}
        <div className="max-w-4xl mx-auto mb-16 industrial-reveal" style={{ animationDelay: '0.4s' }}>
          <div className="metal-surface p-8 transform rotate-1">
            <p className="text-xl md:text-2xl font-subheading text-steel-gray leading-relaxed font-medium">
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
            <div className="absolute inset-0" style={{ background: 'var(--blood-red-bright)', opacity: 0 }} className="group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button 
            className="relative metal-surface px-8 py-6 transform skewX-2deg transition-transform hover:skewX-1 hover:scale-105"
            onClick={() => console.log('Contact clicked')}
          >
            <span className="font-subheading font-black text-xl tracking-widest text-steel-gray">
              // CALL NOW
            </span>
          </button>
        </div>

        {/* Industrial trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto industrial-reveal" style={{ animationDelay: '0.8s' }}>
          <div className="metal-surface p-6 transform -rotate-1 mechanical-hover">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12" style={{ background: 'var(--blood-red-light)' }} className="flex items-center justify-center">
                <CheckCircle style={{ color: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 2px rgba(159, 1, 1, 0.4))' }} className="w-8 h-8" />
              </div>
              <div className="h-px bg-steel-gray flex-grow"></div>
            </div>
            <h4 className="font-heading text-xl font-black text-steel-gray mb-2">PROFESSIONAL SERVICE</h4>
            <p className="font-mono text-sm text-silver-chrome">GREAT SERVICE AND PRICES</p>
          </div>
          
          <div className="metal-surface p-6 transform rotate-1 mechanical-hover" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12" style={{ background: 'var(--blood-red-light)' }} className="flex items-center justify-center">
                <Shield style={{ color: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 2px rgba(159, 1, 1, 0.4))' }} className="w-8 h-8" />
              </div>
              <div className="h-px bg-steel-gray flex-grow"></div>
            </div>
            <h4 className="font-heading text-xl font-black text-steel-gray mb-2">CERTIFIED TECHS</h4>
            <p className="font-mono text-sm text-silver-chrome">LICENSED • TRAINED</p>
          </div>
          
          <div className="metal-surface p-6 transform -rotate-1 mechanical-hover" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12" style={{ background: 'rgba(192, 192, 192, 0.15)' }} className="flex items-center justify-center">
                <Clock style={{ color: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 2px rgba(159, 1, 1, 0.3))' }} className="w-8 h-8" />
              </div>
              <div className="h-px bg-steel-gray flex-grow"></div>
            </div>
            <h4 className="font-heading text-xl font-black text-steel-gray mb-2">HEAVY DUTY</h4>
            <p className="font-mono text-sm text-silver-chrome">COMMERCIAL • INDUSTRIAL • MILITARY</p>
          </div>
        </div>
      </div>

      {/* Industrial scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hydraulic-motion">
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0" style={{ background: 'var(--blood-red-bright)', filter: 'blur(8px)' }} className="opacity-40"></div>
            <span className="relative font-mono text-sm tracking-widest text-silver-chrome">SCROLL</span>
          </div>
          <div className="relative">
            <div className="w-16 h-16 border-2 border-blood-red-echo flex items-center justify-center metal-surface">
              <div className="w-8 h-8" style={{ background: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 6px rgba(159, 1, 1, 0.5))' }} className="animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}