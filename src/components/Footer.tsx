import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import logoEaaa from "@/assets/logo-eaaa.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logoEaaa} alt="EAAA Logo" className="h-12 w-auto brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Entreprise Accueil Assistance Approvisionnement - L'excellence logistique au cœur de vos opérations au Gabon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/software" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Solutions digitales
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Libreville */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Libreville</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Haut de Gué-Gué</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+24107372996" className="hover:text-accent transition-colors block">
                    07 37 29 96
                  </a>
                  <a href="tel:+24103295239" className="hover:text-accent transition-colors block">
                    03 29 52 39
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Port-Gentil */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Port-Gentil</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Route de l'aéroport</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+24103467881" className="hover:text-accent transition-colors">
                  03 46 78 81
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:eaaa@eaaa.pro" className="hover:text-accent transition-colors">
                  eaaa@eaaa.pro
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Globe className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="https://www.eaaa.pro" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  www.eaaa.pro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            © {currentYear} EAAA - Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
