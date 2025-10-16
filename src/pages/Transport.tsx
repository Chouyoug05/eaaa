import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";
import { Car, CheckCircle2, MapPin, Shield } from "lucide-react";
import transportImage from "@/assets/transport-fleet.jpg";

const Transport = () => {
  const services = [
    "Parc de 70 véhicules premium",
    "Berlines, bus, 4x4",
    "Chauffeurs professionnels formés",
    "Liaisons vers sites pétroliers",
    "Suivi GPS en temps réel",
    "Maintenance régulière",
  ];

  const destinations = [
    "Onal",
    "Mandji",
    "Kougouleu",
    "Sites pétroliers majeurs",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-4">
              <Car className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Transport & Liaisons Terrestres
            </h1>
            <p className="text-xl text-white/90">
              Déplacements en toute sécurité avec notre flotte premium
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <h2 className="text-4xl font-bold">Confort et Sécurité</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Notre flotte de 70 véhicules premium et nos chauffeurs professionnels assurent vos déplacements en toute sécurité et confort.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Équipés de systèmes GPS en temps réel, nous garantissons une traçabilité complète de vos transports et une réactivité optimale pour tous vos besoins de mobilité au Gabon.
              </p>
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Notre Flotte & Services :</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <QuoteModal serviceName="de transport">
                  <Button className="bg-gradient-hero text-white hover:opacity-90">
                    Demander un devis
                  </Button>
                </QuoteModal>
              </div>
              <div className="bg-primary/10 p-6 rounded-xl">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-semibold">Liaisons vers sites pétroliers :</h3>
                </div>
                <div className="flex flex-wrap gap-2 pl-8">
                  {destinations.map((dest, index) => (
                    <span key={index} className="px-3 py-1 bg-background rounded-full text-sm">
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-elegant hover-lift">
              <img src={transportImage} alt="Flotte de transport EAAA" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Shield className="h-16 w-16 mx-auto text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Sécurité & Fiabilité</h2>
            <p className="text-muted-foreground text-lg">
              Tous nos véhicules font l'objet d'une maintenance rigoureuse et nos chauffeurs sont formés aux standards internationaux de sécurité routière.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Comment ça fonctionne</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Réservation de votre véhicule</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Chauffeur professionnel assigné</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Suivi GPS en temps réel</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Service disponible 24h/24</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Réservez votre Transport
            </h2>
            <p className="text-lg text-white/90">
              Service disponible 24h/24 pour tous vos déplacements
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="tel:+24107372996">
                <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md font-semibold transition-colors">
                  Réserver maintenant
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transport;
