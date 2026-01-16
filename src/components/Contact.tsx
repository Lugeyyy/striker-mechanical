import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary text-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to get your equipment running smoothly? Contact us today for a quote or to schedule service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone Contact */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <div className="text-3xl mb-4">📞</div>
              <CardTitle className="text-xl font-semibold text-foreground">
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground mb-4">
                Speak directly with our mechanical experts
              </CardDescription>
              <a 
                href="tel:+15551234567"
                className="text-primary hover:text-primary/90 font-bold text-xl block"
              >
                (555) 123-4567
              </a>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <div className="text-3xl mb-4">✉️</div>
              <CardTitle className="text-xl font-semibold text-foreground">
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground mb-4">
                Send detailed inquiries and requests
              </CardDescription>
              <a 
                href="mailto:info@strikermechanical.com"
                className="text-primary hover:text-primary/90 font-bold text-xl block"
              >
                info@strikermechanical.com
              </a>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <div className="text-3xl mb-4">🕐</div>
              <CardTitle className="text-xl font-semibold text-foreground">
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground">
                <div className="space-y-1">
                  <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 4:00 PM</div>
                  <div>Sunday: Emergency Only</div>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Service Area Information */}
        <Card className="bg-slate-800 border-slate-700 mb-12">
          <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold text-foreground">
              Service Area
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
              <CardDescription className="text-muted-foreground text-lg">
              We proudly serve the greater metropolitan area and surrounding regions. 
              Mobile service available within a 50-mile radius. Contact us to confirm service availability in your location.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Emergency Service CTA */}
        <div className="text-center bg-primary rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
            Emergency Service Available
          </h3>
          <p className="text-primary-foreground/90 mb-6 text-lg">
            Mechanical problems don't always happen during business hours. 
            We offer 24/7 emergency service for critical situations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-background text-primary hover:bg-muted px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = 'tel:+15551234567'}
            >
              Call Emergency Line
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold"
            >
              Request Service Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}