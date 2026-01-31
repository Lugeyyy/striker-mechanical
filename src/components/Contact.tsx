import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin, AlertTriangle, CheckCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold mb-6">
            <Phone className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Our Experts</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to get your equipment running smoothly? Contact us today for a quote or to schedule service.
          </p>
        </div>

        {/* Enhanced contact cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Phone Contact */}
          <Card className="group bg-white dark:bg-slate-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600" />
            <CardHeader className="text-center pb-6">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                Speak directly with our mechanical experts for immediate assistance and detailed consultations.
              </CardDescription>
              <a 
                href="tel:+17802681188"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold text-xl group-hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5" />
                +1 (780) 268-1188
              </a>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="group bg-white dark:bg-slate-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
            <CardHeader className="text-center pb-6">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                Send detailed inquiries, service requests, and quotes. We typically respond within 24 hours.
              </CardDescription>
              <a 
                href="mailto:ryansteenhart@gmail.com"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-xl group-hover:scale-105 transition-transform"
              >
                <Mail className="w-5 h-5" />
                ryansteenhart@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card className="group bg-white dark:bg-slate-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600" />
            <CardHeader className="text-center pb-6">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                  <span>Saturday: Emergency Only</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                  <span>Sunday: Emergency Only</span>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Service Area */}
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-2xl mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
          <CardHeader className="text-center relative z-10">
            <div className="inline-flex p-3 rounded-full bg-white/10 backdrop-blur-sm mb-4">
              <MapPin className="w-8 h-8 text-blue-400" />
            </div>
            <CardTitle className="text-3xl font-bold">
              Service Area
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center relative z-10">
            <CardDescription className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
              We proudly serve the greater metropolitan area and surrounding regions. 
              Mobile service available within a 50-mile radius. Contact us to confirm service availability in your location.
            </CardDescription>
            <div className="mt-8 flex justify-center gap-4">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                🚐 Mobile Service Available
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                📍 50-Mile Radius
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Emergency Service CTA */}
        <Card className="bg-gradient-to-br from-red-600 to-orange-600 text-white border-0 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-700/50 to-orange-700/50" />
          <CardContent className="relative z-10 p-12 text-center">
            <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-6 animate-pulse">
              <AlertTriangle className="w-12 h-12" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              24/7 Emergency Service
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Mechanical problems don't always happen during business hours. 
              We offer 24/7 emergency service for critical situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-slate-100 px-10 py-6 text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = 'tel:+17802681188'}
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Call Emergency Line
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-red-600 px-10 py-6 text-xl font-bold backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Request Service Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}