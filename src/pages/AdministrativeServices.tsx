import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";
import { 
  FileText, 
  CheckCircle2, 
  Monitor, 
  Clock, 
  Shield, 
  Users, 
  Award, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Building2,
  FileCheck,
  UserCheck,
  Briefcase,
  FileBadge,
  Languages,
  Database,
  CheckCircle
} from "lucide-react";

const AdministrativeServices = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Autorisations d'emploi",
      description: "Obtenez rapidement vos autorisations de travail pour le Gabon"
    },
    {
      icon: UserCheck,
      title: "Visas et permis de séjour",
      description: "Gestion complète de vos documents de séjour"
    },
    {
      icon: FileBadge,
      title: "Cartes de séjour",
      description: "Renouvellement et obtention de cartes de séjour"
    },
    {
      icon: Building2,
      title: "Inscription CNSS",
      description: "Inscription et gestion de vos cotisations sociales"
    },
    {
      icon: FileCheck,
      title: "Certificats et attestations",
      description: "Tous types de documents officiels et attestations"
    },
    {
      icon: Languages,
      title: "Traductions certifiées",
      description: "Traduction officielle de vos documents"
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
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Nos Services Incluent :</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{service.title}</span>
                    </div>
                  ))}
                </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.slice(0, 4).map((service, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-xl p-6 shadow-card hover-lift border border-border text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
