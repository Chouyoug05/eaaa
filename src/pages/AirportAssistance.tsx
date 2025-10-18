import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AssistanceForm from "@/components/AssistanceForm";
import GoogleMapGabon from "@/components/GoogleMapGabon";
import { 
  Plane, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Shield, 
  Users, 
  Briefcase,
  Star,
  ArrowRight,
  Phone,
  Globe,
  Calendar
} from "lucide-react";
import heroImage from "@/assets/transport-fleet.jpg";

const AirportAssistance = () => {
  const services = [
    {
      icon: Plane,
      title: "Arrivée",
      description: "Accueil personnalisé dès la sortie d'avion",
    },
    {
      icon: ArrowRight,
      title: "Départ",
      description: "Assistance complète jusqu'à l'embarquement",
    },
    {
      icon: Star,
      title: "VIP",
      description: "Service premium avec accès prioritaire",
    },
    {
      icon: Briefcase,
      title: "Bagages",
      description: "Gestion et suivi de vos bagages",
    },
    {
      icon: Users,
      title: "Service Travel",
      description: "Accompagnement personnalisé",
    }
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
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Aéroport" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 fade-in">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-4">
              <Plane className="h-10 w-10 text-white" />
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Assistance{" "}
              <span className="text-accent">Aéroportuaire</span>
            </h1>
            
            {/* Catchphrase */}
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Votre voyage commence dès l'aéroport avec notre excellence logistique
            </p>
            
            {/* CTA Button */}
            <div className="pt-6">
              <AssistanceForm>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Plane className="mr-3 h-6 w-6" />
                  Demander une assistance
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </AssistanceForm>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une gamme complète de services d'assistance pour rendre votre voyage fluide et sans stress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-xl p-8 shadow-card hover-lift border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>
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

            {/* Google Maps Gabon */}
            <div className="relative">
              <GoogleMapGabon />
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