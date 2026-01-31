import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Wrench, CheckCircle, Clock, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }} />
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/50" />
        
        {/* Animated mechanical elements */}
        <div className="absolute top-20 left-20 text-blue-500/20 mechanical-gear">
          <Wrench className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 right-20 text-blue-500/20 mechanical-gear-reverse">
          <Wrench className="w-40 h-40" />
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Enhanced brand presentation */}
        <div className="mb-8 sm:mb-12 animate-fade-in-up">
          {/* Logo with glow effect */}
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-blue-500/30 blur-3xl scale-110"></div>
            <img 
              src="/src/logo.png" 
              alt="Striker Mechanical" 
              className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-4 sm:mb-6 object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Enhanced typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black tracking-tight mb-2 sm:mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            STRIKER
            <br />
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-1 sm:mt-2">MECHANICAL</span>
          </h1>
          
          {/* Tagline */}
          <div className="text-blue-400 text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-widest uppercase mb-6 sm:mb-8">
            Precision Engineering • Expert Repairs
          </div>
        </div>

        {/* Enhanced headline */}
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight text-white/95">
          Professional Mechanical Repair & 
          <span className="block text-blue-400">Diagnostics Excellence</span>
        </h2>

        {/* Enhanced value proposition */}
        <p className="text-base sm:text-lg md:text-xl text-white/75 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
          Expert mechanical solutions for engines, drivetrains, and powersports equipment. 
          Get back on the road with reliable, professional service backed by years of experience.
        </p>

        {/* Enhanced CTAs with better visual hierarchy */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold min-w-[180px] sm:min-w-[220px] shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-2 border-blue-400/30"
            onClick={() => console.log('Request quote clicked')}
          >
            Get Free Quote
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold min-w-[180px] sm:min-w-[220px] shadow-xl backdrop-blur-sm hover:bg-white/90 transform hover:scale-105 transition-all duration-300"
            onClick={() => console.log('Contact clicked')}
          >
            Call Now
          </Button>
        </div>

        {/* Enhanced trust indicators with icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center gap-2 sm:gap-3 text-white/80 group">
            <div className="p-2 sm:p-3 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            </div>
            <span className="font-semibold text-green-400 text-sm sm:text-base">Emergency Service</span>
            <span className="text-xs sm:text-sm text-white/60">24/7 Available</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 text-white/80 group">
            <div className="p-2 sm:p-3 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </div>
            <span className="font-semibold text-blue-400 text-sm sm:text-base">Licensed & Insured</span>
            <span className="text-xs sm:text-sm text-white/60">Fully Certified</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 text-white/80 group">
            <div className="p-2 sm:p-3 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-colors">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
            </div>
            <span className="font-semibold text-purple-400 text-sm sm:text-base">Fast Turnaround</span>
            <span className="text-xs sm:text-sm text-white/60">Quick Service</span>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Scroll</span>
          <svg 
            className="w-6 h-6 text-white/40" 
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
      </div>
    </section>
  );
}