import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TransportBookingForm from "@/components/TransportBookingForm";
import ImageSlider from "@/components/ImageSlider";
import { 
  Car, 
  CheckCircle2, 
  MapPin, 
  Shield, 
  Navigation as NavigationIcon,
  Thermometer,
  User,
  Clock,
  ArrowRight,
  Phone,
  Star,
  ChevronLeft,
  ChevronRight,
  Route,
  Zap,
  Sun,
  Moon
} from "lucide-react";
import transportImage from "@/assets/transport-fleet.jpg";

const Transport = () => {
  const [currentFleetIndex, setCurrentFleetIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Images pour le slider (utilisant la même image pour l'exemple)
  const sliderImages = [
    transportImage,
    transportImage, // En production, vous ajouterez d'autres images
    transportImage,
  ];

  const fleetVehicles = [
    {
      image: transportImage,
      title: "Berlines Premium",
      description: "Confort et élégance pour vos déplacements d'affaires",
      features: ["Climatisation", "GPS", "WiFi", "Chauffeur formé"]
    },
    {
      image: transportImage,
      title: "Véhicules 4x4",
      description: "Robustesse pour les terrains difficiles et sites pétroliers",
      features: ["4x4", "GPS", "Équipement sécurité", "Chauffeur expérimenté"]
    },
    {
      image: transportImage,
      title: "Bus de Transport",
      description: "Capacité pour les équipes et groupes importants",
      features: ["Jusqu'à 50 places", "Climatisation", "GPS", "Confort optimisé"]
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Sécurité Garantie",
      description: "Chauffeurs formés aux standards internationaux",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: NavigationIcon,
      title: "Suivi GPS",
      description: "Traçabilité en temps réel de vos déplacements",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Thermometer,
      title: "Climatisation",
      description: "Confort optimal dans tous nos véhicules",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: User,
      title: "Chauffeur Formé",
      description: "Personnel professionnel et expérimenté",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  const routes = [
    {
      from: "Libreville",
      to: "Port-Gentil",
      distance: "150 km",
      duration: "2h30",
      fromPos: { x: 20, y: 30 },
      toPos: { x: 30, y: 70 }
    },
    {
      from: "Libreville",
      to: "Onal",
      distance: "80 km",
      duration: "1h45",
      fromPos: { x: 20, y: 30 },
      toPos: { x: 25, y: 45 }
    },
    {
      from: "Port-Gentil",
      to: "Mandji",
      distance: "60 km",
      duration: "1h15",
      fromPos: { x: 30, y: 70 },
      toPos: { x: 35, y: 80 }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextFleetVehicle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentFleetIndex((prev) => (prev + 1) % fleetVehicles.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevFleetVehicle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentFleetIndex((prev) => (prev - 1 + fleetVehicles.length) % fleetVehicles.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

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
          alt="Transport EAAA"
          className="h-full"
          autoPlay={true}
          autoPlayInterval={6000}
        />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-5xl mx-auto space-y-8 fade-in">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Car className="h-12 w-12 text-white" />
            </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transport &{" "}
                <span className="text-accent">Liaisons Terrestres</span>
            </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Déplacements en toute sécurité avec notre flotte premium
            </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <TransportBookingForm>
                  <Button
                    size="lg"
                    className="bg-accent text-primary-foreground hover:bg-accent/90 text-lg px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <Car className="mr-2 h-5 w-5" />
                    Réserver maintenant
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </TransportBookingForm>

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

      {/* Interactive Map Section */}
      <section className="py-24 bg-background -mt-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nos Trajets au Gabon
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos principales liaisons terrestres avec suivi GPS en temps réel
            </p>
          </div>

          <div className="relative w-full h-96 bg-gradient-to-br from-green-50 via-blue-50 to-green-100 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl">
            {/* Gabon Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-blue-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  width="320" 
                  height="360" 
                  viewBox="0 0 320 360" 
                  className="opacity-20"
                >
                  <path
                    d="M 60 40 
                       L 90 35 
                       L 130 30 
                       L 170 35 
                       L 210 40 
                       L 240 50 
                       L 260 70 
                       L 270 90 
                       L 275 110 
                       L 280 130 
                       L 285 150 
                       L 290 170 
                       L 295 190 
                       L 300 210 
                       L 305 230 
                       L 310 250 
                       L 315 270 
                       L 320 290 
                       L 315 310 
                       L 310 330 
                       L 300 340 
                       L 280 350 
                       L 260 345 
                       L 240 340 
                       L 220 335 
                       L 200 330 
                       L 180 325 
                       L 160 320 
                       L 140 315 
                       L 120 310 
                       L 100 305 
                       L 80 300 
                       L 60 295 
                       L 40 290 
                       L 20 285 
                       L 10 280 
                       L 5 260 
                       L 10 240 
                       L 15 220 
                       L 20 200 
                       L 25 180 
                       L 30 160 
                       L 35 140 
                       L 40 120 
                       L 45 100 
                       L 50 80 
                       L 55 60 
                       L 60 50 
                       Z"
                    fill="currentColor"
                    className="text-green-600"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-green-700"
                  />
                </svg>
              </div>
            </div>

            {/* City Markers */}
            {routes.map((route, index) => (
              <div key={index}>
                {/* From City */}
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `${route.fromPos.x}%`,
                    top: `${route.fromPos.y}%`,
                  }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-xl group-hover:scale-125 transition-all duration-300 border-2 border-white">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                      <span className="text-sm font-bold text-slate-800">{route.from}</span>
                    </div>
                  </div>
                </div>

                {/* To City */}
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `${route.toPos.x}%`,
                    top: `${route.toPos.y}%`,
                  }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-xl group-hover:scale-125 transition-all duration-300 border-2 border-white">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                      <span className="text-sm font-bold text-slate-800">{route.to}</span>
                    </div>
                  </div>
                </div>

                {/* Animated Route Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id={`routeGradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6"/>
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <path
                    d={`M ${route.fromPos.x}% ${route.fromPos.y}% Q ${(route.fromPos.x + route.toPos.x) / 2}% ${(route.fromPos.y + route.toPos.y) / 2}% ${route.toPos.x}% ${route.toPos.y}%`}
                    stroke={`url(#routeGradient${index})`}
                    strokeWidth="4"
                    strokeDasharray="10,5"
                    fill="none"
                    className="animate-pulse"
                  />
                  {/* Animated dots along the route */}
                  <circle cx={`${route.fromPos.x + (route.toPos.x - route.fromPos.x) * 0.3}%`} cy={`${route.fromPos.y + (route.toPos.y - route.fromPos.y) * 0.3}%`} r="3" fill="#3b82f6" opacity="0.8" className="animate-ping">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx={`${route.fromPos.x + (route.toPos.x - route.fromPos.x) * 0.7}%`} cy={`${route.fromPos.y + (route.toPos.y - route.fromPos.y) * 0.7}%`} r="3" fill="#8b5cf6" opacity="0.8" className="animate-ping">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" begin="1s"/>
                  </circle>
                </svg>
              </div>
            ))}

            {/* Route Info Panel */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Principales Liaisons</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {routes.map((route, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <Route className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-slate-800">{route.from} → {route.to}</div>
                      <div className="text-sm text-slate-600">{route.distance} • {route.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section with Carousel */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Notre Flotte
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une gamme complète de véhicules pour tous vos besoins de transport
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentFleetIndex * 100}%)` }}
                >
                  {fleetVehicles.map((vehicle, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                          <h3 className="text-3xl font-bold text-foreground">{vehicle.title}</h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {vehicle.description}
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {vehicle.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <TransportBookingForm vehicleType={vehicle.title}>
                            <Button size="lg" className="bg-gradient-hero text-white hover:opacity-90">
                              Réserver ce véhicule
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </TransportBookingForm>
                        </div>
                        <div className="relative">
                          <img 
                            src={vehicle.image} 
                            alt={vehicle.title}
                            className="w-full h-80 object-cover rounded-xl shadow-2xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevFleetVehicle}
                disabled={isAnimating}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 disabled:opacity-50"
              >
                <ChevronLeft className="h-6 w-6 text-slate-700" />
              </button>
              <button
                onClick={nextFleetVehicle}
                disabled={isAnimating}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 disabled:opacity-50"
              >
                <ChevronRight className="h-6 w-6 text-slate-700" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {fleetVehicles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFleetIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentFleetIndex ? 'bg-primary' : 'bg-slate-300'
                    }`}
                  />
                ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section with Animated Icons */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nos Avantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pourquoi choisir EAAA pour vos déplacements ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
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
                    <advantage.icon className="h-10 w-10 text-primary group-hover:text-primary group-hover:rotate-12 transition-all duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {advantage.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Comment ça fonctionne</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Réservation de votre véhicule",
                "Chauffeur professionnel assigné", 
                "Suivi GPS en temps réel",
                "Service disponible 24h/24"
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

      {/* Dynamic Booking CTA Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Réservez en quelques clics
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Service disponible 24h/24 pour tous vos déplacements au Gabon
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="flex items-center justify-center gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Clock className="h-8 w-8 text-accent" />
                <div className="text-left">
                  <p className="font-semibold">Disponible 24h/24</p>
                  <p className="text-white/80">Service continu</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <NavigationIcon className="h-8 w-8 text-accent" />
                <div className="text-left">
                  <p className="font-semibold">Suivi GPS</p>
                  <p className="text-white/80">En temps réel</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Star className="h-8 w-8 text-accent" />
                <div className="text-left">
                  <p className="font-semibold">Service Premium</p>
                  <p className="text-white/80">Qualité garantie</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <TransportBookingForm>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 rounded-full font-bold shadow-2xl transition-all duration-300 hover:scale-105">
                  <Car className="mr-3 h-6 w-6" />
                  Réserver maintenant
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </TransportBookingForm>
              <a href="tel:+24107372996">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 text-xl px-8 py-6 rounded-full font-semibold backdrop-blur-sm">
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

export default Transport;
