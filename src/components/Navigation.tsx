import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Wrench, Menu, X, Phone, Mail, Zap, AlertTriangle } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    { label: 'COMMAND', id: 'hero', icon: Zap },
    { label: 'SERVICES', id: 'services', icon: Wrench },
    { label: 'CONTACT', id: 'contact', icon: AlertTriangle }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'metal-surface border-b-2 border-rust-accent' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Brutalist Logo */}
          <div className="flex items-center gap-4 group">
            <div className={`relative transform transition-all duration-500 group-hover:rotate-12 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <div className="absolute inset-0 bg-rust-accent blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative metal-surface p-3">
                <Wrench className="w-8 h-8 text-rust-accent gear-grind" />
              </div>
            </div>
            <div>
              <h1 className={`text-2xl md:text-3xl font-black transition-all duration-500 leading-none ${
                isScrolled ? 'text-brushed-metal' : 'text-brushed-metal'
              }`}>
                STRIKER
                <span className={`block text-lg md:text-xl font-black transition-colors duration-500 ${
                  isScrolled ? 'text-rust-accent' : 'text-rust-accent'
                }`}>
                  MECHANICAL
                </span>
              </h1>
              <div className="font-mono text-xs tracking-widest text-concrete-light mt-1">
                // HEAVY DUTY INDUSTRIAL
              </div>
            </div>
          </div>

          {/* Brutalist Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative transition-all duration-300 ${
                    isScrolled ? 'hover:scale-110' : 'hover:scale-105'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex items-center gap-2 px-4 py-2 metal-surface transform skewX-2 group-hover:skewX-1 transition-all ${
                    isScrolled ? 'opacity-90' : 'opacity-80'
                  }`}>
                    <Icon className="w-4 h-4 text-rust-accent" />
                    <span className="font-heading font-black tracking-wider text-concrete-light text-sm">
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-rust-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              );
            })}
            
            {/* Industrial Quick Actions */}
            <div className="flex items-center gap-4 pl-6 border-l-2 border-rust-accent">
              <button
                onClick={() => window.location.href = 'tel:+17802681188'}
                className="industrial-button bg-safety-green hover:bg-green-600"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">EMERGENCY</span>
              </button>
              <ThemeToggle />
            </div>
          </div>

          {/* Industrial Mobile Menu */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => window.location.href = 'tel:+17802681188'}
              className={`relative transition-all duration-300 ${
                isScrolled ? 'scale-90' : 'scale-100'
              }`}
            >
              <div className="metal-surface p-3">
                <Phone className="w-6 h-6 text-safety-green" />
              </div>
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`metal-surface p-3 transition-all duration-300 ${
                isScrolled ? 'transform rotate-0' : isOpen ? 'transform rotate-90' : 'transform rotate-0'
              }`}
            >
              {isOpen ? <X className="w-6 h-6 text-rust-accent" /> : <Menu className="w-6 h-6 text-rust-accent" />}
            </button>
          </div>
        </div>

        {/* Industrial Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t-2 border-rust-accent concrete-texture">
            <div className="py-6 space-y-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full metal-surface p-4 transform -rotate-1 hover:rotate-0 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 metal-surface flex items-center justify-center">
                        <Icon className="w-6 h-6 text-rust-accent" />
                      </div>
                      <div className="text-left">
                        <div className="font-heading font-black text-brushed-metal text-lg">
                          {item.label}
                        </div>
                        <div className="font-mono text-xs text-concrete-light">
                          {item.id === 'hero' && '// MAIN CONTROL'}
                          {item.id === 'services' && '// SERVICE DECK'}
                          {item.id === 'contact' && '// COMMUNICATIONS'}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
              
              {/* Mobile Industrial Actions */}
              <div className="pt-4 border-t-2 border-rust-accent space-y-3">
                <button
                  onClick={() => window.location.href = 'mailto:ryansteenhart@gmail.com'}
                  className="w-full metal-surface p-4 transform skewX-2 hover:skewX-1 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-warning-orange" />
                    <span className="font-heading font-black text-concrete-light">EMAIL TERMINAL</span>
                  </div>
                </button>
                <button
                  onClick={() => window.location.href = 'tel:+17802681188'}
                  className="w-full industrial-button bg-safety-green"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span className="font-heading font-black">EMERGENCY LINE</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}