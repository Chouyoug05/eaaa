import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ImageSlider from "@/components/ImageSlider";
import { ArrowRight, Play, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-airport.jpg";
import transportImage from "@/assets/transport-fleet.jpg";
import guestHouseImage from "@/assets/guest-house.jpg";
const Hero = () => {
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

      {/* Full Screen Hero Slider */}
      <section className="relative h-screen">
        <ImageSlider 
          images={sliderImages}
          alt="EAAA Services"
          className="h-full"
          autoPlay={true}
          autoPlayInterval={7000}
        />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-5xl mx-auto space-y-8 fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                EAAA – L'excellence logistique,{" "}
                <span className="text-accent">parfaitement orchestrée</span> au cœur de vos opérations
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Rien n'est laissé au hasard, tout est sous contrôle.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <Link to="/assistance-aeroportuaire">
                  <Button
                    size="lg"
                    className="bg-accent text-primary-foreground hover:bg-accent/90 text-lg px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    Découvrir nos services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/10 text-white hover:bg-white/20 text-lg px-6 py-4 rounded-full font-semibold backdrop-blur-sm"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Nous contacter
                  </Button>
                </Link>
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
    </div>
  );
};
export default Hero;