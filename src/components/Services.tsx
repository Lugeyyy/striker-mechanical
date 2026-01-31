import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Cog, Bike, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = [
    {
      title: "Mechanical Repair & Diagnostics",
      description: "Comprehensive diagnostics and repair services for all mechanical systems. We identify issues quickly and fix them right the first time.",
      icon: Wrench,
      color: "blue",
      features: ["Advanced Diagnostics", "Quick Turnaround", "Quality Parts"]
    },
    {
      title: "Engine & Drivetrain Work",
      description: "Specialized engine repair, transmission service, and drivetrain maintenance for optimal performance and longevity.",
      icon: Cog,
      color: "green",
      features: ["Engine Overhaul", "Transmission Service", "Performance Tuning"]
    },
    {
      title: "Powersports & Off-Road Repair",
      description: "Expert service for motorcycles, ATVs, and other powersports vehicles. We understand the unique demands of off-road equipment.",
      icon: Bike,
      color: "purple",
      features: ["Motorcycle Service", "ATV Repair", "Off-Road Expertise"]
    },
    {
      title: "Preventative Maintenance",
      description: "Regular maintenance schedules and thorough inspections to keep your equipment running reliably and prevent costly breakdowns.",
      icon: Search,
      color: "orange",
      features: ["Scheduled Service", "Safety Inspections", "Performance Checks"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700";
      case "green":
        return "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700";
      case "purple":
        return "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700";
      case "orange":
        return "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700";
      default:
        return "from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700";
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-6">
            <Wrench className="w-4 h-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expert Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From routine maintenance to complex repairs, we provide comprehensive mechanical services 
            to keep your equipment running at peak performance.
          </p>
        </div>

        {/* Enhanced service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group relative bg-white dark:bg-slate-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getColorClasses(service.color)}`} />
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-transparent to-black dark:to-white" />
                
                <CardHeader className="text-center pb-6 relative z-10">
                  {/* Enhanced icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${getColorClasses(service.color)} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground leading-relaxed mb-6 text-center">
                    {service.description}
                  </CardDescription>
                  
                  {/* Service features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getColorClasses(service.color)} mr-3`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn more button */}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={`w-full group/btn bg-gradient-to-r ${getColorClasses(service.color)} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced call-to-action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
            <CardContent className="relative z-10 p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Don't see exactly what you need? Our expert team specializes in custom mechanical solutions 
                tailored to your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => console.log('Custom solution clicked')}
                >
                  Discuss Your Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View All Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}