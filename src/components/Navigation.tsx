import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logoEaaa from "@/assets/logo-eaaa.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À propos" },
    { to: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    { to: "/assistance-aeroportuaire", label: "Assistance aéroportuaire" },
    { to: "/demarches-administratives", label: "Démarches administratives" },
    { to: "/transport", label: "Transport & Liaisons" },
    { to: "/hebergement", label: "Hébergement Premium" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoEaaa} alt="EAAA Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  ["/assistance-aeroportuaire", "/demarches-administratives", "/transport", "/hebergement"].includes(location.pathname)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.to}
                      to={service.to}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+24107372996" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>07 37 29 96</span>
            </a>
            <Link to="/contact">
              <Button size="sm" className="bg-gradient-hero hover:opacity-90">
                Demander une assistance
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 space-y-4 fade-in">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(link.to) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Services Mobile */}
            <div className="py-2">
              <div className="block text-sm font-medium text-foreground mb-2">
                Services
              </div>
              <div className="pl-4 space-y-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.to}
                    to={service.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(link.to) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+24107372996"
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>07 37 29 96</span>
              </a>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button size="sm" className="w-full bg-gradient-hero">
                  Demander une assistance
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
