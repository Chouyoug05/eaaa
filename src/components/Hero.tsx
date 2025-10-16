import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-airport.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="EAAA Airport Assistance" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            EAAA – L'excellence logistique,{" "}
            <span className="text-accent">parfaitement orchestrée</span> au cœur de vos opérations
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Rien n'est laissé au hasard, tout est sous contrôle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link to="/assistance-aeroportuaire">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 group">
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                <Play className="mr-2 h-5 w-5" />
                Nous contacter
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;