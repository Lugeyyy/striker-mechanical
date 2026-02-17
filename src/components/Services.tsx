import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Cog, Bike, Search, Zap, Hammer, Settings, Wrench as Tool } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = [
    {
      title: "HEAVY REPAIR & DIAGNOSTICS",
      subtitle: "Industrial-Grade Analysis",
      description: "BRUTAL DIAGNOSTIC SYSTEMS • MECHANICAL FAILURE ANALYSIS • COMPREHENSIVE REPAIR PROTOCOLS",
      icon: Wrench,
      accent: "rust",
      features: ["ADVANCED OBD-II", "HYDRAULIC SYSTEMS", "HEAVY DUTY REPAIRS"],
      spec: "DIAGNOSTIC ACCURACY: 99.7%"
    },
    {
      title: "ENGINE & DRIVETRAIN",
      subtitle: "Powertrain Excellence", 
      description: "COMPLETE ENGINE OVERHAUL • TRANSMISSION CHANGE/SWAP • PERFORMANCE OPTIMIZATION • TORQUE MANAGEMENT",
      icon: Cog,
      accent: "warning",
      features: ["V8/V12 SPECIALISTS", "TURBO SYSTEMS", "DRIVETRAIN ENGINEERING"],
      spec: "TORQUE CAPACITY: 1000+ FT-LBS"
    },
    {
      title: "POWERSPORTS & OFF-ROAD",
      subtitle: "Extreme Terrain Specialists",
      description: "MOTORCYCLE • ATV • UTV • DIRT BIKE • SNOWMOBILE • OFF-ROAD VEHICLE EXPERT REPAIR",
      icon: Bike,
      accent: "safety",
      features: ["RACE TUNING", "SUSPENSION WORK", "ACCESSORY INSTALLATION"],
      spec: "TERRAIN RATING: EXTREME"
    },
    {
      title: "PREVENTATIVE MAINTENANCE",
      subtitle: "Scheduled Service Protocols",
      description: "FACTORY MAINTENANCE • CUSTOM SERVICE INTERVALS • PREDICTIVE ANALYSIS",
      icon: Settings,
      accent: "industrial",
      features: ["OEM PARTS", "FLEET SERVICE", "DIGITAL RECORDS"],
      spec: "UPTIME GUARANTEE: 99%"
    }
  ];

  const getAccentStyles = (accent: string) => {
    switch (accent) {
      case "rust":
        return {
          bg: "var(--blood-red)",
          light: "rgba(139, 0, 0, 0.2)",
          border: "#8B0000"
        };
      case "warning":
        return {
          bg: "var(--blood-red-bright)",
          light: "var(--blood-red-light)",
          border: "var(--blood-red-bright)"
        };
      case "safety":
        return {
          bg: "var(--blood-red)",
          light: "var(--blood-red-light)",
          border: "var(--blood-red)"
        };
      case "industrial":
        return {
          bg: "var(--silver-chrome)",
          light: "rgba(192, 192, 192, 0.15)",
          border: "var(--silver-chrome)"
        };
      default:
        return {
          bg: "var(--blood-red-bright)",
          light: "var(--blood-red-light)",
          border: "var(--blood-red-bright)"
        };
    }
  };

  return (
    <section id="services" className="py-32 concrete-texture relative overflow-hidden">
      {/* Industrial grid background */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `
            linear-gradient(var(--blood-red-pattern) 1px, transparent 1px),
            linear-gradient(90deg, var(--blood-red-pattern) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Weld seam decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'var(--blood-red-echo)', opacity: 0.4 }}></div>
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'var(--blood-red-echo)', opacity: 0.4 }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Brutalist header */}
        <div className="mb-24">
            <div className="flex items-center gap-8 mb-8">
              <div className="flex-grow h-px" style={{ background: 'var(--blood-red-echo)' }}></div>
              <div className="metal-surface px-8 py-4 transform -rotate-2">
                <div className="flex items-center gap-4">
                  <Hammer style={{ color: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 3px rgba(159, 1, 1, 0.4))' }} className="w-8 h-8 gear-grind" />
                  <span className="font-mono text-sm tracking-widest text-steel-gray">HEAVY DUTY SERVICES</span>
                </div>
              </div>
              <div className="flex-grow h-px" style={{ background: 'var(--blood-red-echo)' }}></div>
            </div>
          
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black stencil-text text-silver-chrome mb-6 leading-none">
              INDUSTRIAL
              <span style={{ color: 'var(--blood-red-bright)', textShadow: '0 0 4px rgba(159, 1, 1, 0.2)' }} className="block text-6xl md:text-7xl lg:text-8xl">
                SERVICES
              </span>
            </h2>
            <div className="metal-surface inline-block px-8 py-6 transform rotate-1">
              <p className="font-mono text-xl text-steel-gray leading-relaxed max-w-4xl">
                [ FABRICATION AND WELDING • INSTALLATION AND SETUP ]
              </p>
            </div>
          </div>
        </div>

        {/* Brutalist service cards with grid-breaking layout */}
        <div className="relative mb-32">
          {/* Main service card - full width */}
          <div className="mb-16">
            {(() => {
              const mainService = services[0];
              const Icon = mainService.icon;
              const accent = getAccentStyles(mainService.accent);
              
              return (
                <div className="metal-surface transform rotate-1 mechanical-hover">
                  <div className="relative overflow-hidden">
                    {/* Weld seam accent */}
                    <div className="absolute top-0 left-0 right-0 h-2" style={{ background: accent.bg }}></div>
                    
                    <div className="grid md:grid-cols-2 gap-12 p-12">
                      <div className="space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="w-20 h-20 metal-surface flex items-center justify-center">
                            <Icon className="w-12 h-12" style={{ color: accent.border, filter: accent.border === 'var(--blood-red-bright)' ? 'drop-shadow(0 0 3px rgba(159, 1, 1, 0.4))' : 'none' }} />
                          </div>
                          <div>
                         <h3 className="text-3xl font-black text-silver-chrome leading-none mb-2">
                               {mainService.title}
                             </h3>
                             <p className="font-mono text-sm text-steel-gray tracking-widest">
                               {mainService.subtitle}
                             </p>
                          </div>
                        </div>
                        
                         <div className="font-mono text-xl text-steel-gray leading-relaxed">
                           {mainService.description}
                         </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="w-px h-12" style={{ background: accent.border }}></div>
                          <span className="font-mono text-sm" style={{ color: accent.bg }}>
                            {mainService.spec}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {mainService.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-4">
                            <div className="w-8 h-8 flex items-center justify-center" style={{ background: accent.light }}>
                              <div className="w-2 h-2 rounded-full" style={{ background: accent.bg }}></div>
                            </div>
                             <span className="font-subheading font-bold text-steel-gray">
                               {feature}
                             </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
          
          {/* Secondary services - asymmetric grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {services.slice(1).map((service, index) => {
              const Icon = service.icon;
              const accent = getAccentStyles(service.accent);
              const rotateClass = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
              
              return (
                <div key={index} className={`metal-surface p-8 ${rotateClass} mechanical-hover`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-20 h-20 flex items-center justify-center" style={{ background: accent.light }}>
                      <Icon className="w-10 h-10" style={{ color: accent.bg }} />
                    </div>
                    
                    <div className="pt-16 space-y-6">
                       <h4 className="text-2xl font-black text-silver-chrome leading-none">
                         {service.title}
                       </h4>
                       
                       <p className="font-mono text-sm text-steel-gray tracking-widest uppercase">
                         {service.subtitle}
                       </p>
                       
                       <p className="font-mono text-steel-gray leading-relaxed">
                         {service.description}
                       </p>
                      
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ background: accent.bg }}></div>
                             <span className="font-subheading text-sm text-steel-gray">
                               {feature}
                             </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t" style={{ borderColor: accent.border, opacity: 0.3 }}>
                        <span className="font-mono text-xs" style={{ color: accent.bg }}>
                          {service.spec}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brutalist call-to-action */}
        <div className="relative">
          <div className="metal-surface transform -rotate-1">
            <div className="relative overflow-hidden">
              {/* Industrial pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                 <div className="absolute top-0 left-0 w-32 h-32 border-r-2 border-b-2 border-blood-red transform -translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute bottom-0 right-0 w-32 h-32 border-l-2 border-t-2 border-blood-red transform translate-x-1/2 translate-y-1/2"></div>
              </div>
              
              <div className="p-16 text-center relative z-10">
            <div className="inline-block mb-8">
              <Tool style={{ color: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 4px rgba(159, 1, 1, 0.4))' }} className="w-16 h-16" />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-silver-chrome mb-6">
              CUSTOM MECHANICAL
              <span style={{ color: 'var(--blood-red-bright)', textShadow: '0 0 4px rgba(159, 1, 1, 0.2)' }} className="block text-5xl md:text-6xl">
                SOLUTIONS
              </span>
            </h3>
                 
                 <div className="metal-surface inline-block px-8 py-6 transform rotate-1 mb-8">
                   <p className="font-mono text-xl text-steel-gray max-w-2xl">
                     SPECIALIZED PROTOTYPING • CUSTOM FABRICATION • MILITARY-SPEC • R&D CONSULTING
                   </p>
                 </div>
                
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <button 
                    className="industrial-button"
                    onClick={() => console.log('Custom solution clicked')}
                  >
                    <span className="flex items-center gap-3">
                      <Zap className="w-6 h-6" />
                      CUSTOM PROJECT
                    </span>
                  </button>
                  
                  <button 
                    className="metal-surface px-10 py-6 transform skewX-2 transition-transform hover:skewX-1 hover:scale-105"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                     <span className="font-subheading font-black text-xl tracking-widest text-steel-gray">
                       // ALL SERVICES
                     </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}