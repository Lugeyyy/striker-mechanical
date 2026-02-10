import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin, AlertTriangle, CheckCircle, Wrench, Zap } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 concrete-texture relative overflow-hidden">
      {/* Industrial grid background */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `
            linear-gradient(var(--concrete-light) 1px, transparent 1px),
            linear-gradient(90deg, var(--concrete-light) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Weld seam decorative elements */}
      <div className="absolute top-1/3 left-0 right-0 h-px rust-accent opacity-40"></div>
      <div className="absolute bottom-1/3 left-0 right-0 h-px rust-accent opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Brutalist header */}
        <div className="mb-24">
          <div className="flex items-center gap-8 mb-8">
            <div className="flex-grow h-px bg-rust-accent"></div>
            <div className="metal-surface px-8 py-4 transform rotate-2">
              <div className="flex items-center gap-4">
                <Phone className="w-8 h-8 text-rust-accent gear-grind" />
                <span className="font-mono text-sm tracking-widest text-concrete-light">CONTACT OPERATIONS</span>
              </div>
            </div>
            <div className="flex-grow h-px bg-rust-accent"></div>
          </div>
          
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black stencil-text text-brushed-metal mb-6 leading-none">
              CONTACT
              <span className="block text-6xl md:text-7xl lg:text-8xl text-rust-accent">
                COMMAND
              </span>
            </h2>
            <div className="metal-surface inline-block px-8 py-6 transform -rotate-1">
              <p className="font-mono text-xl text-concrete-light leading-relaxed max-w-4xl">
                [ DIRECT COMMUNICATION • RAPID RESPONSE • 24/7 SUPPORT • EMERGENCY PROTOCOLS ]
              </p>
            </div>
          </div>
        </div>

        {/* Industrial contact grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {/* Phone Command */}
          <div className="metal-surface p-8 transform rotate-1 mechanical-hover">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-16 h-16 metal-surface flex items-center justify-center">
                <Phone className="w-10 h-10 text-safety-green" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-brushed-metal mb-2">
                    PHONE
                  </h3>
                  <p className="font-mono text-sm text-concrete-light tracking-widest uppercase">
                    Direct Line Command
                  </p>
                </div>
                
                <div className="font-mono text-concrete-light leading-relaxed">
                  IMMEDIATE TECHNICAL SUPPORT • EXPERT CONSULTATION • EMERGENCY DISPATCH
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-safety-green rounded-full animate-pulse"></div>
                    <span className="font-mono text-sm text-concrete-light">STATUS: ONLINE</span>
                  </div>
                  
                  <a 
                    href="tel:+17802681188"
                    className="inline-block metal-surface px-6 py-3 transform skewX-2 hover:skewX-1 transition-transform"
                  >
                    <span className="font-subheading font-black text-xl text-safety-green">
                      (780) 268-1188
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Email Terminal */}
          <div className="metal-surface p-8 transform -rotate-1 mechanical-hover" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-16 h-16 metal-surface flex items-center justify-center">
                <Mail className="w-10 h-10 text-warning-orange" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-brushed-metal mb-2">
                    EMAIL
                  </h3>
                  <p className="font-mono text-sm text-concrete-light tracking-widest uppercase">
                    Digital Terminal
                  </p>
                </div>
                
                <div className="font-mono text-concrete-light leading-relaxed">
                  DETAILED QUOTES • TECHNICAL SPECIFICATIONS • SERVICE SCHEDULING • PROJECT FILES
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-warning-orange rounded-full"></div>
                    <span className="font-mono text-sm text-concrete-light">RESPONSE: &lt;24HR</span>
                  </div>
                  
                  <a 
                    href="mailto:ryansteenhart@gmail.com"
                    className="inline-block metal-surface px-6 py-3 transform skewX-2 hover:skewX-1 transition-transform"
                  >
                    <span className="font-subheading font-black text-lg text-warning-orange">
                      RYANSTEENHART@GMAIL.COM
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Operations Schedule */}
          <div className="metal-surface p-8 transform rotate-1 mechanical-hover" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-16 h-16 metal-surface flex items-center justify-center">
                <Clock className="w-10 h-10 text-industrial-yellow" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-brushed-metal mb-2">
                    HOURS
                  </h3>
                  <p className="font-mono text-sm text-concrete-light tracking-widest uppercase">
                    Operations Schedule
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between metal-surface p-3">
                    <span className="font-mono text-sm text-concrete-light">MON-FRI</span>
                    <span className="font-subheading font-black text-industrial-yellow">0800-1800</span>
                  </div>
                  
                  <div className="flex items-center justify-between metal-surface p-3">
                    <span className="font-mono text-sm text-concrete-light">SAT</span>
                    <span className="font-subheading font-black text-warning-orange">EMERGENCY</span>
                  </div>
                  
                  <div className="flex items-center justify-between metal-surface p-3">
                    <span className="font-mono text-sm text-concrete-light">SUN</span>
                    <span className="font-subheading font-black text-warning-orange">EMERGENCY</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Zap className="w-4 h-4 text-warning-orange" />
                  <span className="font-mono text-xs text-concrete-light">24/7 EMERGENCY AVAILABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Service Area */}
        <div className="mb-24">
          <div className="metal-surface transform -rotate-1">
            <div className="relative overflow-hidden p-12">
              {/* Industrial pattern corners */}
              <div className="absolute top-0 left-0 w-24 h-24 border-r-2 border-b-2 border-rust-accent"></div>
              <div className="absolute top-0 right-0 w-24 h-24 border-l-2 border-b-2 border-rust-accent"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-r-2 border-t-2 border-rust-accent"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-l-2 border-t-2 border-rust-accent"></div>
              
              <div className="text-center space-y-8 relative z-10">
                <div className="inline-block metal-surface p-6">
                  <MapPin className="w-12 h-12 text-rust-accent" />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-brushed-metal leading-none">
                  SERVICE
                  <span className="block text-5xl md:text-6xl text-rust-accent">
                    ZONE
                  </span>
                </h3>
                
                <div className="metal-surface inline-block px-8 py-6 transform rotate-1">
                  <p className="font-mono text-xl text-concrete-light max-w-3xl leading-relaxed">
                    METROPOLITAN OPERATIONS • MOBILE UNITS • 50-MILE RADIUS • ON-SITE REPAIR • HEAVY EQUIPMENT TRANSPORT
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="metal-surface px-6 py-3 transform skewX-2">
                    <span className="font-mono text-sm text-industrial-yellow">🚐 MOBILE UNITS DEPLOYED</span>
                  </div>
                  <div className="metal-surface px-6 py-3 transform -skewX-2">
                    <span className="font-mono text-sm text-warning-orange">📍 50-MILE COVERAGE</span>
                  </div>
                  <div className="metal-surface px-6 py-3 transform skewX-2">
                    <span className="font-mono text-sm text-safety-green">⚡ RAPID DISPATCH</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Command Center */}
        <div className="metal-surface transform rotate-1 rust-accent relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-warning-orange transform rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-4 border-industrial-yellow transform -rotate-12"></div>
            </div>
          </div>
          
          <div className="relative z-10 p-16 text-center">
            <div className="inline-block mb-8">
              <div className="w-20 h-20 metal-surface flex items-center justify-center">
                <AlertTriangle className="w-16 h-16 text-warning-orange welding-spark" />
              </div>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              EMERGENCY
              <span className="block text-5xl md:text-6xl text-industrial-yellow">
                COMMAND
              </span>
            </h3>
            
            <div className="metal-surface inline-block px-8 py-6 transform -rotate-1 mb-8">
              <p className="font-mono text-xl text-white max-w-2xl leading-relaxed">
                24/7 CRITICAL RESPONSE • RAPID DEPLOYMENT • EMERGENCY REPAIRS • CITICAL SYSTEM FAILURE • DOWNTIME MINIMIZATION
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button 
                className="industrial-button bg-warning-orange hover:bg-red-600"
                onClick={() => window.location.href = 'tel:+17802681188'}
              >
                <span className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6" />
                  EMERGENCY LINE
                </span>
              </button>
              
              <button 
                className="metal-surface px-10 py-6 transform skewX-2 transition-transform hover:skewX-1 hover:scale-105"
                onClick={() => console.log('Service quote clicked')}
              >
                <span className="font-subheading font-black text-xl tracking-widest text-white">
                  // SERVICE REQUEST
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}