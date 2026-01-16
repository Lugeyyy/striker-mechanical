import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./index.css";

function AppContent() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Contact />
      <ThemeToggle />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
