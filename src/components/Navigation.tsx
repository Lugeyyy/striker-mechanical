import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Wrench, Menu, X, Phone, Mail } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <div className={`p-2 rounded-lg transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12 ${
              isScrolled ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Wrench className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-blue-600'
              }`} />
            </div>
            <div>
              <h1 className={`text-xl md:text-2xl font-black transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                STRIKER
                <span className={`block text-sm md:text-base font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-muted-foreground' : 'text-blue-400'
                }`}>
                  MECHANICAL
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-foreground hover:text-blue-600' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Quick Actions */}
            <div className="flex items-center gap-3 pl-4 border-l border-border">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.href = 'tel:+17802681188'}
                className={`transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-foreground hover:text-green-600' 
                    : 'text-white hover:text-green-400'
                }`}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">Call</span>
              </Button>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = 'tel:+17802681188'}
              className={`transition-all duration-300 ${
                isScrolled 
                  ? 'text-foreground hover:text-green-600' 
                  : 'text-white hover:text-green-400'
              }`}
            >
              <Phone className="w-5 h-5" />
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-all duration-300 ${
                isScrolled 
                  ? 'text-foreground hover:text-blue-600' 
                  : 'text-white hover:text-blue-400'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Quick Actions */}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.location.href = 'mailto:ryansteenhart@gmail.com'}
                  className="w-full justify-start gap-2 mb-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </Button>
                <Button
                  size="sm"
                  onClick={() => window.location.href = 'tel:+17802681188'}
                  className="w-full justify-start gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}