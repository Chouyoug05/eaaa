import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AssistanceForm from "@/components/AssistanceForm";
import RealisticMapGabon from "@/components/RealisticMapGabon";
import ImageSlider from "@/components/ImageSlider";
import { 
  Plane, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Shield, 
  Users, 
  Briefcase,
  ArrowRight,
  Phone,
  Globe,
  Calendar,
  Sun,
  Moon,
  LogOut,
  Crown,
  Luggage
} from "lucide-react";
import heroImage from "@/assets/transport-fleet.jpg";
import transportImage from "@/assets/transport-fleet.jpg";
import guestHouseImage from "@/assets/guest-house.jpg";

const AirportAssistance = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Images pour le slider
  const sliderImages = [
    heroImage,
    transportImage,
    guestHouseImage,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Plane,
      title: "Accueil et Assistance à l'Arrivée",
      description: "Prise en charge dès la descente de l'avion, formalités simplifiées.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: LogOut,
      title: "Assistance au Départ",
      description: "Accompagnement jusqu'à l'embarquement, gestion des bagages.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Crown,
      title: "Service VIP Personnalisé",
      description: "Expérience exclusive avec salon privé et accompagnement dédié.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Luggage,
      title: "Gestion des Bagages",
      description: "Prise en charge et suivi sécurisé de vos bagages.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Globe,
      title: "Service Travel & Conciergerie",
      description: "Organisation complète de votre séjour, au-delà de l'aéroport.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Disponibilité 24h/7j",
      description: "Service continu, même les weekends et jours fériés",
      stat: "100%"
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Personnel formé et certifié",
      stat: "15+"
    },
    {
      icon: MapPin,
      title: "Couverture nationale",
      description: "Libreville et Port-Gentil",
      stat: "2"
    },
    {
      icon: Users,
      title: "Équipe experte",
      description: "Plus de 15 ans d'expérience",
      stat: "53"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30"></div>
        {/* Floating light orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <Navigation />

      {/* Full Screen Hero Slider */}
      <section className="relative h-screen">
        <ImageSlider 
          images={sliderImages}
          alt="Assistance Aéroportuaire EAAA"
          className="h-full"
          autoPlay={true}
          autoPlayInterval={6000}
        />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-5xl mx-auto space-y-8 fade-in">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Plane className="h-12 w-12 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Assistance{" "}
                <span className="text-accent">Aéroportuaire</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Votre voyage commence dès l'aéroport avec notre excellence logistique
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <AssistanceForm>
                  <Button
                    size="lg"
                    className="bg-accent text-primary-foreground hover:bg-accent/90 text-lg px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <Plane className="mr-2 h-5 w-5" />
                    Demander une assistance
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </AssistanceForm>

                <a href="tel:+24107372996">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/10 text-white hover:bg-white/20 text-lg px-6 py-4 rounded-full font-semibold backdrop-blur-sm"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Nous contacter
                  </Button>
                </a>
              </div>

              {/* Live Time Display */}
              <div className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Sun className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-medium">
                  {currentTime.toLocaleTimeString('fr-FR', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    timeZone: 'Africa/Libreville'
                  })} - Libreville
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30 -mt-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une gamme complète de services d'assistance pour rendre votre voyage fluide et sans stress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 hover-lift shadow-card border border-border text-center transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon with Animation */}
                <div className="relative z-10 mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500">
                    <service.icon className="h-10 w-10 text-primary group-hover:text-primary group-hover:rotate-12 transition-all duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Couverture Nationale
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nos équipes sont présentes dans les deux principaux aéroports du Gabon pour vous offrir un service de qualité partout où vous allez.
              </p>
              
              {/* Airport Cards */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-muted/30 rounded-xl hover-lift">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Libreville</h3>
                    <p className="text-muted-foreground">Aéroport International Léon M'ba</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-muted/30 rounded-xl hover-lift">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Port-Gentil</h3>
                    <p className="text-muted-foreground">Aéroport de Port-Gentil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte Réaliste du Gabon */}
            <div className="relative">
              <RealisticMapGabon />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Atouts
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Pourquoi choisir EAAA pour votre assistance aéroportuaire ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent text-primary group-hover:rotate-12 transition-transform duration-500">
                    <advantage.icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Stat Number */}
                <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {advantage.stat}
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors duration-300">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Comment ça fonctionne
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Réservation en ligne ou par téléphone",
                "Accueil personnalisé à l'aéroport",
                "Prise en charge des formalités",
                "Transfert vers votre destination"
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary transform translate-x-4"></div>
                    )}
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Clock className="h-20 w-20 mx-auto text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Disponible 24h/24 – 7j/7
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Notre équipe d'experts est prête à vous accueillir à tout moment, 
              même les weekends et jours fériés
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <AssistanceForm>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 rounded-full font-bold shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Plane className="mr-3 h-6 w-6" />
                  Demander une assistance
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </AssistanceForm>
              
              <a href="tel:+24107372996">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 text-xl px-8 py-6 rounded-full font-semibold backdrop-blur-sm"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Appeler maintenant
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

export default AirportAssistance;