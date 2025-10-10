import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "sobre", label: "Sobre" },
    { id: "servicos", label: "Serviços" },
    { id: "galeria", label: "Galeria" },
    { id: "qualidade", label: "Qualidade" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/98 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-card/50 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("inicio")}
          className="flex items-center gap-2 group"
        >
          <Shield className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
          <span className="text-xl font-heading font-bold text-foreground">
            Vieira Redes
          </span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <ul className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
