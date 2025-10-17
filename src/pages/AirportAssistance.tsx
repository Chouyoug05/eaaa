import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";
import { 
  Plane, 
  CheckCircle2, 
  Clock, 
  FileText, 
  MapPin, 
  Shield, 
  Users, 
  Briefcase,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Globe
} from "lucide-react";
import heroImage from "@/assets/hero-airport.jpg";

const AirportAssistance = () => {
  const services = [
    {
      icon: Plane,
      title: "Arrivée",
      description: "Accueil personnalisé dès la sortie d'avion",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: ArrowRight,
      title: "Départ",
      description: "Assistance complète jusqu'à l'embarquement",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Star,
      title: "VIP",
      description: "Service premium avec accès prioritaire",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Briefcase,
      title: "Bagages",
      description: "Gestion et suivi de vos bagages",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Service Travel",
      description: "Accompagnement personnalisé",
      color: "from-pink-500 to-pink-600"
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

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-900/80 z-10"></div>
          <img 
            src={heroImage} 
            alt="Aéroport" 
            className="w-full h-full object-cover"
          />
          {/* Animated Airplane */}
          <div className="absolute top-20 right-10 z-20">
            <div className="airplane-animation">
              <Plane className="h-16 w-16 text-white/60 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="max-w-5xl mx-auto space-y-8 fade-in">
            {/* Animated Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-bounce">
              <Plane className="h-12 w-12 text-white" />
            </div>
            
            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Assistance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Aéroportuaire
              </span>
            </h1>
            
            {/* Catchphrase */}
            <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto font-light">
              Votre voyage commence dès l'aéroport avec notre{" "}
              <span className="text-yellow-400 font-semibold">excellence logistique</span>
            </p>
            
            {/* CTA Button with Pulse Effect */}
            <div className="pt-8">
              <QuoteModal serviceName="d'assistance aéroportuaire">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 text-xl px-12 py-6 rounded-full font-bold shadow-2xl animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
                >
                  <Plane className="mr-3 h-6 w-6" />
                  Demander une assistance
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </QuoteModal>
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

      {/* Animated Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Premium
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services d'assistance pour rendre votre voyage fluide et sans stress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Animated Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Couverture{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  Nationale
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Nos équipes sont présentes dans les deux principaux aéroports du Gabon pour vous offrir un service de qualité partout où vous allez.
              </p>
              
              {/* Airport Cards */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">Libreville</h3>
                    <p className="text-blue-700">Aéroport International Léon M'ba</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900">Port-Gentil</h3>
                    <p className="text-green-700">Aéroport de Port-Gentil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-24 w-24 text-blue-600 mx-auto mb-4 animate-spin-slow" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Carte Interactive</h3>
                  <p className="text-gray-600">Visualisation des aéroports couverts</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section with Hover Effects */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Atouts
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pourquoi choisir EAAA pour votre assistance aéroportuaire ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20 hover:border-white/40"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-black group-hover:rotate-12 transition-transform duration-500">
                    <advantage.icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Stat Number */}
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {advantage.stat}
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                  {advantage.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Comment ça{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                fonctionne
              </span>
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform translate-x-4"></div>
                    )}
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Pulsing Button */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <Clock className="h-20 w-20 mx-auto text-yellow-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Disponible{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                24h/24 – 7j/7
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Notre équipe d'experts est prête à vous accueillir à tout moment, 
              même les weekends et jours fériés
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <QuoteModal serviceName="d'assistance aéroportuaire">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 text-xl px-12 py-6 rounded-full font-bold shadow-2xl animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
                >
                  <Plane className="mr-3 h-6 w-6" />
                  Demander une assistance
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </QuoteModal>
              
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