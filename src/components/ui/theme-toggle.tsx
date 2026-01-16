import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { Settings, Sun, Moon, Wrench } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'system':
        return <Settings className="h-4 w-4" />;
      default:
        return <Moon className="h-4 w-4" />;
    }
  };

  const getTooltip = () => {
    switch (theme) {
      case 'dark':
        return 'Dark Mode (Click: Light → System → Dark)';
      case 'light':
        return 'Light Mode (Click: System → Dark → Light)';
      case 'system':
        return 'System Mode (Click: Dark → Light → System)';
      default:
        return 'Dark Mode';
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className={cn(
          "relative h-14 w-14 rounded-full border-2 shadow-lg transition-all duration-300 hover:scale-110",
          "bg-background border-primary hover:bg-primary hover:text-primary-foreground",
          "group overflow-hidden"
        )}
        title={getTooltip()}
      >
        {/* Mechanical gear background animation */}
        <div className="absolute inset-0 opacity-10">
          <Wrench className="h-full w-full animate-spin" style={{ animationDuration: '8s' }} />
        </div>
        
        {/* Theme icon */}
        <div className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
          {getIcon()}
        </div>
        
        {/* Active state indicator */}
        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary animate-pulse" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
        <div className="bg-popover text-popover-foreground rounded-md px-2 py-1 text-xs shadow-md whitespace-nowrap">
          {getTooltip()}
        </div>
      </div>
    </div>
  );
}