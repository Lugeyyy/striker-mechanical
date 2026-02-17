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
        ? 'metal-surface border-b-2' 
        : 'bg-transparent'
    }`} style={{ borderColor: 'var(--blood-red)' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Brutalist Logo */}
          <div className="flex items-center gap-4 group">
            <div className={`relative transform transition-all duration-500 group-hover:rotate-12 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <div className="absolute inset-0" style={{ background: 'var(--blood-red-echo)', filter: 'blur-xl', opacity: 0.3 }} className="group-hover:opacity-50 transition-opacity"></div>
              <div className="relative metal-surface p-3">
                <Wrench style={{ color: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 3px rgba(159, 1, 1, 0.4))' }} className="w-8 h-8 gear-grind" />
              </div>
            </div>
            <div>
              <h1 className={`text-2xl md:text-3xl font-black transition-all duration-500 leading-none ${
                isScrolled ? 'text-silver-chrome' : 'text-silver-chrome'
              }`}>
                STRIKER
                <span style={{ color: 'var(--blood-red-bright)' }} className={`block text-lg md:text-xl font-black transition-colors duration-500 ${
                  isScrolled ? '' : ''
                }`}>
                  MECHANICAL
                </span>
              </h1>
              <div className="font-mono text-xs tracking-widest text-steel-gray mt-1">
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
                    <Icon style={{ color: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 2px rgba(159, 1, 1, 0.3))' }} className="w-4 h-4" />
                    <span className="font-heading font-black tracking-wider text-steel-gray text-sm">
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 left-0 right-0 h-px" style={{ background: 'var(--blood-red-echo)', opacity: 0 }} className="group-hover:opacity-100 transition-opacity"></div>
                </button>
              );
            })}
            
            {/* Industrial Quick Actions */}
            <div className="flex items-center gap-4 pl-6 border-l-2" style={{ borderColor: 'var(--blood-red-echo)' }}>
              <button
                onClick={() => window.location.href = 'tel:+17802681188'}
                className={`relative transition-all duration-300 ${
                  isScrolled ? 'scale-90' : 'scale-100'
                }`}
              >
                <div className="metal-surface p-3">
                  <Phone style={{ color: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 3px rgba(159, 1, 1, 0.4))' }} className="w-6 h-6" />
                </div>
              </button>
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="metal-surface p-3 transition-all duration-300"
              >
                {isOpen ? <X style={{ color: 'var(--blood-red-bright)' }} className="w-6 h-6" /> : <Menu style={{ color: 'var(--blood-red-bright)' }} className="w-6 h-6" />}
              </button>
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
                <Phone style={{ color: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 3px rgba(159, 1, 1, 0.4))' }} className="w-6 h-6" />
              </div>
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="metal-surface p-3 transition-all duration-300"
            >
              {isOpen ? <X style={{ color: 'var(--blood-red-bright)' }} className="w-6 h-6" /> : <Menu style={{ color: 'var(--blood-red-bright)' }} className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Industrial Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t-2" style={{ borderColor: 'var(--blood-red-echo)' }} className="concrete-texture">
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
                        <Icon style={{ color: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 2px rgba(159, 1, 1, 0.3))' }} className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <div className="font-heading font-black text-silver-chrome text-lg">
                          {item.label}
                        </div>
                        <div className="font-mono text-xs text-steel-gray">
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
              <div className="pt-4 border-t-2" style={{ borderColor: 'var(--blood-red-echo)' }} className="space-y-3">
                <button
                  onClick={() => window.location.href = 'mailto:ryansteenhart@gmail.com'}
                  className="w-full metal-surface p-4 transform skewX-2 hover:skewX-1 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Mail style={{ color: 'var(--blood-red-bright)', filter: 'drop-shadow(0 0 2px rgba(159, 1, 1, 0.3))' }} className="w-5 h-5" />
                    <span className="font-heading font-black text-steel-gray">EMAIL TERMINAL</span>
                  </div>
                </button>
                <button
                  onClick={() => window.location.href = 'tel:+17802681188'}
                  className="w-full industrial-button"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span className="font-heading font-black">CALL NOW</span>
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