import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "Mechanical Repair & Diagnostics",
      description: "Comprehensive diagnostics and repair services for all mechanical systems. We identify issues quickly and fix them right the first time.",
      icon: "🔧"
    },
    {
      title: "Engine & Drivetrain Work",
      description: "Specialized engine repair, transmission service, and drivetrain maintenance for optimal performance and longevity.",
      icon: "⚙️"
    },
    {
      title: "Powersports & Off-Road Repair",
      description: "Expert service for motorcycles, ATVs, and other powersports vehicles. We understand the unique demands of off-road equipment.",
      icon: "🏍️"
    },
    {
      title: "Preventative Maintenance & Inspections",
      description: "Regular maintenance schedules and thorough inspections to keep your equipment running reliably and prevent costly breakdowns.",
      icon: "🔍"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From routine maintenance to complex repairs, we provide comprehensive mechanical services 
            to keep your equipment running at peak performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see what you need? Contact us for custom solutions.
          </p>
          <a 
            href="#contact" 
            className="text-primary hover:text-primary/90 font-semibold underline-offset-4 hover:underline"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}