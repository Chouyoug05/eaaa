import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";
import { Plane, CheckCircle2, Clock, FileText } from "lucide-react";
import heroImage from "@/assets/hero-airport.jpg";

const AirportAssistance = () => {
  const services = [
    "Accueil VIP et standard",
    "Assistance à l'arrivée et au départ",
    "Formalités police et douane",
    "Gestion des bagages",
    "Coordination avec les compagnies aériennes",
    "Service disponible 24h/24 – 7j/7",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-4">
              <Plane className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Assistance Aéroportuaire
            </h1>
            <p className="text-xl text-white/90">
              Un accueil professionnel et une prise en charge complète, 24h/24 et 7j/7
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <h2 className="text-4xl font-bold">Excellence et Disponibilité</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Notre service d'assistance aéroportuaire garantit un accueil professionnel et une prise en charge complète de vos voyageurs aux aéroports de Libreville et Port-Gentil.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Avec plus de 15 ans d'expérience, nos équipes formées assurent une coordination parfaite avec les compagnies aériennes et les autorités locales pour faciliter vos déplacements.
              </p>
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Nos Services Incluent :</h3>
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
              <QuoteModal serviceName="d'assistance aéroportuaire">
                <Button className="bg-gradient-hero text-white hover:opacity-90">
                  <FileText className="h-5 w-5 mr-2" />
                  Demander un devis
                </Button>
              </QuoteModal>
            </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-elegant hover-lift">
              <img src={heroImage} alt="Assistance aéroportuaire EAAA" className="w-full h-full object-cover" />
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
                <span>Réservation en ligne ou par téléphone</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Accueil personnalisé à l'aéroport</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Prise en charge des formalités police et douane</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Transfert sécurisé vers votre destination</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Clock className="h-16 w-16 mx-auto text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Disponible 24h/24 – 7j/7
            </h2>
            <p className="text-lg text-white/90">
              Notre équipe est prête à vous accueillir à tout moment
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="tel:+24107372996">
                <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md font-semibold transition-colors">
                  Appeler maintenant
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

export default AirportAssistance;
