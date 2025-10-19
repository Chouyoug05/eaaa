import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";
import { 
  FileText, 
  CheckCircle2, 
  Monitor, 
  ArrowRight, 
  Phone, 
  Briefcase,
  UserCheck,
  FileBadge,
  Building2,
  FileCheck,
  Languages
} from "lucide-react";
import adminImage from "@/assets/admin-services.jpg";

const AdministrativeServices = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      icon: Briefcase,
      title: "Autorisations d'emploi",
      description: "Obtenez rapidement vos autorisations de travail pour le Gabon",
      details: "Dossier complet, suivi administratif, validation rapide"
    },
    {
      icon: UserCheck,
      title: "Visas et permis de séjour",
      description: "Gestion complète de vos documents de séjour",
      details: "Visa touristique, visa d'affaires, permis de séjour"
    },
    {
      icon: FileBadge,
      title: "Cartes de séjour",
      description: "Renouvellement et obtention de cartes de séjour",
      details: "Carte temporaire, carte permanente, renouvellement"
    },
    {
      icon: Building2,
      title: "Inscription CNSS",
      description: "Inscription et gestion de vos cotisations sociales",
      details: "Inscription employeur, déclarations, paiements"
    },
    {
      icon: FileCheck,
      title: "Certificats et attestations",
      description: "Tous types de documents officiels et attestations",
      details: "Certificats de travail, attestations, documents officiels"
    },
    {
      icon: Languages,
      title: "Traductions certifiées",
      description: "Traduction officielle de vos documents",
      details: "Traduction officielle, certification, validation"
    }
  ];

  const timelineSteps = [
    {
      title: "Évaluation de vos besoins",
      description: "Analyse de vos besoins et évaluation des documents requis"
    },
    {
      title: "Collecte des documents",
      description: "Rassemblement et vérification de tous les documents nécessaires"
    },
    {
      title: "Traitement par nos experts",
      description: "Dépôt et suivi de votre dossier auprès des administrations"
    },
    {
      title: "Livraison des documents validés",
      description: "Récupération et remise de vos documents validés"
    }
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <QuoteModal serviceName="de démarches administratives">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 group">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </QuoteModal>
              <a href="tel:+24107372996">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                  <Phone className="mr-2 h-5 w-5" />
                  Nous contacter
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <h2 className="text-4xl font-bold">Simplifiez vos Démarches</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Nous gérons l'ensemble de vos démarches administratives au Gabon avec efficacité et transparence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre expertise et nos relations avec les administrations locales garantissent un traitement rapide et conforme de tous vos dossiers. Suivez l'avancement en temps réel via notre plateforme digitale.
              </p>
              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                <Monitor className="h-6 w-6 text-primary" />
                <p className="text-sm text-foreground">
                  <strong>Suivi en ligne :</strong> Consultez l'état de vos dossiers en temps réel via notre logiciel EAAA
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-elegant hover-lift">
              <img src={adminImage} alt="Démarches administratives EAAA" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nos Services Administratifs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choisissez le service qui correspond à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-card rounded-xl p-6 shadow-card hover-lift border-2 cursor-pointer transition-all duration-300 ${
                  selectedService === service.title 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedService(selectedService === service.title ? null : service.title)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 ${
                    selectedService === service.title 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                  }`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {selectedService === service.title && (
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm text-primary font-medium">
                        {service.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          {selectedService && (
            <div className="mt-12 text-center">
              <div className="bg-card rounded-xl p-8 shadow-card border border-border max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Intéressé par : {selectedService} ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Obtenez un devis personnalisé pour ce service
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <QuoteModal serviceName={selectedService}>
                    <Button size="lg" className="bg-gradient-hero text-white hover:opacity-90">
                      <FileText className="mr-2 h-5 w-5" />
                      Demander un devis pour {selectedService}
                    </Button>
                  </QuoteModal>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedService(null)}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Voir tous les services
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* General CTA */}
          {!selectedService && (
            <div className="mt-12 text-center">
              <div className="bg-card rounded-xl p-8 shadow-card border border-border max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Besoin d'aide pour choisir ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Notre équipe vous conseille sur le service le plus adapté à vos besoins
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <QuoteModal serviceName="de démarches administratives">
                    <Button size="lg" className="bg-gradient-hero text-white hover:opacity-90">
                      <FileText className="mr-2 h-5 w-5" />
                      Demander un devis général
                    </Button>
                  </QuoteModal>
                  <a href="tel:+24107372996">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Phone className="mr-2 h-5 w-5" />
                      Nous contacter
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Comment ça fonctionne</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timelineSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary transform translate-x-4"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
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
              <QuoteModal serviceName="de démarches administratives">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md font-semibold transition-colors">
                  Demander un devis
                </Button>
              </QuoteModal>
              <a href="tel:+24107372996">
                <Button variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-3 rounded-md font-semibold transition-colors">
                  <Phone className="mr-2 h-5 w-5" />
                  Nous contacter
                </Button>
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
