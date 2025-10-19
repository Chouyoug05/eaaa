import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import { Target, Users, Shield, TrendingUp, Sun, Moon, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-airport.jpg";
import transportImage from "@/assets/transport-fleet.jpg";
import guestHouseImage from "@/assets/guest-house.jpg";

const About = () => {
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
          alt="À propos EAAA"
          className="h-full"
          autoPlay={true}
          autoPlayInterval={7000}
        />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-5xl mx-auto space-y-8 fade-in">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Target className="h-12 w-12 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                À propos de{" "}
                <span className="text-accent">EAAA</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Plus de 15 ans d'excellence au service de la logistique au Gabon
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <a href="#histoire">
                  <Button
                    size="lg"
                    className="bg-accent text-primary-foreground hover:bg-accent/90 text-lg px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    Découvrir notre histoire
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
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

      {/* Histoire */}
      <section id="histoire" className="py-20 bg-background -mt-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">EAAA (Entreprise Accueil Assistance Approvisionnement)</strong> a été créée en 2009 par M. François Éric CARDOT avec une vision claire : devenir le partenaire logistique de référence pour les entreprises opérant au Gabon.
                </p>
                <p>
                  Depuis nos débuts, nous avons construit notre réputation sur trois piliers fondamentaux : la disponibilité totale, la qualité de service irréprochable, et la maîtrise complète de la chaîne logistique des expatriés.
                </p>
                <p>
                  Aujourd'hui, avec nos deux bases opérationnelles à Libreville et Port-Gentil, notre flotte de 70 véhicules premium, et notre équipe de 53 collaborateurs qualifiés, nous sommes fiers de servir les plus grandes entreprises pétrolières et diplomatiques présentes au Gabon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Excellence",
                description: "Nous visons l'excellence dans chaque service fourni, sans compromis sur la qualité.",
              },
              {
                icon: Users,
                title: "Engagement",
                description: "Notre équipe formée et expérimentée s'engage pleinement pour votre satisfaction.",
              },
              {
                icon: Shield,
                title: "Sécurité",
                description: "La sécurité HSSE est au cœur de toutes nos opérations et procédures.",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description: "Nous investissons dans la digitalisation pour optimiser votre expérience client.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover-lift shadow-card text-center fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Notre Équipe</h2>
              <p className="text-xl text-muted-foreground">
                53 collaborateurs qualifiés dédiés à votre succès
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                L'équipe EAAA est composée de professionnels expérimentés et formés aux standards internationaux. Chaque membre de notre personnel est sélectionné pour sa compétence, son professionnalisme et son engagement envers l'excellence du service.
              </p>
              <p>
                Nos agents d'assistance aéroportuaire, nos chauffeurs, nos coordinateurs administratifs et notre équipe de support travaillent en synergie pour garantir une expérience fluide et sans stress à nos clients.
              </p>
              <p>
                La formation continue de notre personnel et notre investissement dans les outils digitaux nous permettent d'offrir un service toujours plus performant et adapté aux exigences de nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Notre Vision
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Devenir le leader régional de l'assistance logistique en étendant nos services à l'ensemble de la zone CEMAC et au-delà, tout en maintenant notre engagement indéfectible envers la qualité, la sécurité et l'innovation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
