import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";
import { FileText, CheckCircle2, Monitor } from "lucide-react";
import adminImage from "@/assets/admin-services.jpg";

const AdministrativeServices = () => {
  const services = [
    "Autorisations d'emploi",
    "Visas et permis de séjour",
    "Cartes de séjour",
    "Inscription CNSS",
    "Certificats et attestations",
    "Traductions certifiées",
    "Suivi en ligne via logiciel EAAA",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-4">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Démarches Administratives
            </h1>
            <p className="text-xl text-white/90">
              Gestion complète de vos formalités avec efficacité et transparence
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-elegant hover-lift">
              <img src={adminImage} alt="Démarches administratives EAAA" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6 fade-in">
              <h2 className="text-4xl font-bold">Simplifiez vos Démarches</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Nous gérons l'ensemble de vos démarches administratives au Gabon avec efficacité et transparence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre expertise et nos relations avec les administrations locales garantissent un traitement rapide et conforme de tous vos dossiers. Suivez l'avancement en temps réel via notre plateforme digitale.
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
                <QuoteModal serviceName="de démarches administratives">
                  <Button className="bg-gradient-hero text-white hover:opacity-90">
                    Demander un devis
                  </Button>
                </QuoteModal>
              </div>
              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                <Monitor className="h-6 w-6 text-primary" />
                <p className="text-sm text-foreground">
                  <strong>Suivi en ligne :</strong> Consultez l'état de vos dossiers en temps réel via notre logiciel EAAA
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
                <span>Évaluation de vos besoins</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Collecte des documents requis</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Traitement par nos experts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Livraison des documents validés</span>
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
              Confiez-nous vos Démarches
            </h2>
            <p className="text-lg text-white/90">
              Notre équipe d'experts vous accompagne à chaque étape
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

export default AdministrativeServices;
