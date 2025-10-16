import { Plane, FileText, Car, Home, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const services = [
    {
      icon: Plane,
      title: "Assistance aéroportuaire",
      description: "Comment nous simplifions vos déplacements",
      steps: [
        "Réservation en ligne ou par téléphone",
        "Accueil personnalisé à l'aéroport",
        "Prise en charge des formalités",
        "Transfert vers votre destination"
      ],
      link: "/assistance-aeroportuaire",
    },
    {
      icon: FileText,
      title: "Démarches administratives",
      description: "Notre processus pour vos documents",
      steps: [
        "Évaluation de vos besoins",
        "Collecte des documents requis",
        "Traitement par nos experts",
        "Livraison des documents validés"
      ],
      link: "/demarches-administratives",
    },
    {
      icon: Car,
      title: "Transport & Liaisons",
      description: "Notre service de transport premium",
      steps: [
        "Réservation de votre véhicule",
        "Chauffeur professionnel assigné",
        "Suivi GPS en temps réel",
        "Service 24h/24 disponible"
      ],
      link: "/transport",
    },
    {
      icon: Home,
      title: "Hébergement Premium",
      description: "Votre séjour en toute sérénité",
      steps: [
        "Sélection de votre hébergement",
        "Réservation confirmée",
        "Accueil personnalisé",
        "Service complet sur place"
      ],
      link: "/hebergement",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Comment ça fonctionne
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre processus simple et efficace pour chaque service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-xl border border-border hover-lift shadow-card group fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light transition-colors group"
                  >
                    En savoir plus
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
