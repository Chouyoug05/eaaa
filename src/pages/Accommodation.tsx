import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";
import { Home, CheckCircle2, MapPin, Wifi } from "lucide-react";
import guestHouseImage from "@/assets/guest-house.jpg";

const Accommodation = () => {
  const features = [
    "Localisation à Okala (15 min de l'aéroport)",
    "Chambres climatisées tout confort",
    "Piscine extérieure",
    "Jardin tropical",
    "Terrasse aménagée",
    "Wifi haut débit",
    "Service de restauration",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-4">
              <Home className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Hébergement Premium
            </h1>
            <p className="text-xl text-white/90">
              Un cadre paisible et confortable pour vos séjours à Libreville
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-elegant hover-lift">
              <img src={guestHouseImage} alt="Guest House EAAA" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6 fade-in">
              <h2 className="text-4xl font-bold">Guest House Okala</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Notre maison d'hôtes située à Okala offre un cadre paisible et confortable pour vos séjours à Libreville, à seulement 15 minutes de l'aéroport international.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Idéale pour les expatriés et professionnels en mission, notre guest house allie confort, sécurité et services premium dans un environnement tropical apaisant.
              </p>
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Équipements & Services :</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <QuoteModal serviceName="d'hébergement">
                  <Button className="bg-gradient-hero text-white hover:opacity-90">
                    Demander un devis
                  </Button>
                </QuoteModal>
              </div>
              <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Localisation idéale</p>
                  <p className="text-sm text-muted-foreground">
                    15 minutes de l'aéroport • Accès facile au centre-ville
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Confort & Commodités
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Wifi className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Connexion Haut Débit</h3>
                <p className="text-sm text-muted-foreground">
                  Wifi fibre optique dans toute la propriété
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Espaces Communs</h3>
                <p className="text-sm text-muted-foreground">
                  Salon, terrasse et espaces de détente
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Jardin Tropical</h3>
                <p className="text-sm text-muted-foreground">
                  Piscine et espaces verts aménagés
                </p>
              </div>
            </div>
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
                <span>Sélection de votre hébergement</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Réservation confirmée</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Accueil personnalisé</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Service complet sur place</span>
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
              Réservez votre Séjour
            </h2>
            <p className="text-lg text-white/90">
              Contactez-nous pour vérifier les disponibilités et tarifs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="tel:+24107372996">
                <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md font-semibold transition-colors">
                  Nous contacter
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

export default Accommodation;
