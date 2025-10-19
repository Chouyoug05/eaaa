import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AccommodationBookingForm from "@/components/AccommodationBookingForm";
import ImageSlider from "@/components/ImageSlider";
import { 
  Home, 
  CheckCircle2, 
  MapPin, 
  Wifi, 
  Shield, 
  Waves, 
  Utensils, 
  Car,
  Star,
  ArrowRight,
  Calendar,
  Users,
  Coffee,
  Bed,
  Sun,
  Moon
} from "lucide-react";
import guestHouseImage from "@/assets/guest-house.jpg";

const Accommodation = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Images pour le slider (utilisant la même image pour l'exemple)
  const sliderImages = [
    guestHouseImage,
    guestHouseImage, // En production, vous ajouterez d'autres images
    guestHouseImage,
  ];

  const amenities = [
    {
      icon: Wifi,
      title: "Wifi Haut Débit",
      description: "Connexion fibre optique dans toute la propriété",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Shield,
      title: "Sécurité 24/7",
      description: "Surveillance et gardiennage permanent",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Waves,
      title: "Piscine Extérieure",
      description: "Bassin privé avec espace détente",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Utensils,
      title: "Restauration",
      description: "Service de repas et petit-déjeuner",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Car,
      title: "Transport",
      description: "Navette aéroport et service de voiturier",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const features = [
    "Localisation à Okala (15 min de l'aéroport)",
    "Chambres climatisées tout confort",
    "Piscine extérieure",
    "Jardin tropical",
    "Terrasse aménagée",
    "Wifi haut débit",
    "Service de restauration",
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
          alt="Guest House EAAA"
          className="h-full"
          autoPlay={true}
          autoPlayInterval={6000}
        />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-5xl mx-auto space-y-8 fade-in">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Home className="h-12 w-12 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Guest House{" "}
                <span className="text-accent">EAAA</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Votre oasis de tranquillité à Libreville
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <AccommodationBookingForm>
                  <Button
                    size="lg"
                    className="bg-accent text-primary-foreground hover:bg-accent/90 text-lg px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <Bed className="mr-2 h-5 w-5" />
                    Réserver votre séjour
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </AccommodationBookingForm>

                <a href="tel:+24107372996">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/10 text-white hover:bg-white/20 text-lg px-6 py-4 rounded-full font-semibold backdrop-blur-sm"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
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

      {/* Nos Atouts Section */}
      <section className="py-24 bg-background relative -mt-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nos Atouts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez les services qui font de notre guest house un lieu d'exception
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {amenities.map((amenity, index) => (
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
                    <amenity.icon className="h-10 w-10 text-primary group-hover:text-primary group-hover:rotate-12 transition-all duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {amenity.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <h2 className="text-4xl font-bold">Guest House Okala</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Notre maison d'hôtes située à Okala offre un cadre paisible et confortable pour vos séjours à Libreville, à seulement 15 minutes de l'aéroport international.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Idéale pour les expatriés et professionnels en mission, notre guest house allie confort, sécurité et services premium dans un environnement tropical apaisant.
              </p>
              
              <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Star className="h-6 w-6 text-primary" />
                  Équipements & Services
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-foreground group-hover:text-primary transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-foreground text-lg">Localisation idéale</p>
                  <p className="text-muted-foreground">
                    15 minutes de l'aéroport • Accès facile au centre-ville • Quartier résidentiel calme
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift">
                <img src={guestHouseImage} alt="Guest House EAAA" className="w-full h-full object-cover" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-gentle-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-gentle-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Comment ça fonctionne
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un processus simple et fluide pour votre réservation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Sélection", desc: "Choisissez votre type de chambre et dates" },
              { step: "2", title: "Réservation", desc: "Confirmez votre séjour en ligne" },
              { step: "3", title: "Accueil", desc: "Arrivée et installation personnalisée" },
              { step: "4", title: "Séjour", desc: "Profitez de nos services premium" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-gentle-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-gentle-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Moon className="h-12 w-12 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Réservez votre Séjour
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Découvrez le confort et la sérénité de notre guest house à Libreville
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <AccommodationBookingForm>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 rounded-full font-bold shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <Bed className="mr-3 h-6 w-6" />
                  Réserver votre séjour
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </AccommodationBookingForm>

              <a href="tel:+24107372996">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 text-xl px-8 py-6 rounded-full font-semibold backdrop-blur-sm"
                >
                  <Calendar className="mr-3 h-6 w-6" />
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

export default Accommodation;
