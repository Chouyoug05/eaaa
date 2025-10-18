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
  Globe,
  FileCheck,
  UserCheck,
  Briefcase,
  Certificate,
  Languages,
  Database,
  TrendingUp,
  Star,
  CheckCircle
} from "lucide-react";
import adminImage from "@/assets/admin-services.jpg";

const AdministrativeServices = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Briefcase,
      title: "Autorisations d'emploi",
      description: "Obtenez rapidement vos autorisations de travail pour le Gabon",
      features: ["Dossier complet", "Suivi administratif", "Validation rapide"],
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: UserCheck,
      title: "Visas et permis de séjour",
      description: "Gestion complète de vos documents de séjour",
      features: ["Visa touristique", "Visa d'affaires", "Permis de séjour"],
      color: "from-slate-700 to-slate-900",
      bgColor: "bg-slate-50",
      iconColor: "text-slate-700"
    },
    {
      icon: Certificate,
      title: "Cartes de séjour",
      description: "Renouvellement et obtention de cartes de séjour",
      features: ["Carte temporaire", "Carte permanente", "Renouvellement"],
      color: "from-indigo-600 to-indigo-800",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: Building2,
      title: "Inscription CNSS",
      description: "Inscription et gestion de vos cotisations sociales",
      features: ["Inscription employeur", "Déclarations", "Paiements"],
      color: "from-emerald-600 to-emerald-800",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: FileCheck,
      title: "Certificats et attestations",
      description: "Tous types de documents officiels et attestations",
      features: ["Certificats de travail", "Attestations", "Documents officiels"],
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Languages,
      title: "Traductions certifiées",
      description: "Traduction officielle de vos documents",
      features: ["Traduction officielle", "Certification", "Validation"],
      color: "from-amber-600 to-amber-800",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    }
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Consultation initiale",
      description: "Analyse de vos besoins et évaluation des documents requis",
      icon: FileText,
      color: "bg-blue-600"
    },
    {
      step: "02", 
      title: "Collecte des documents",
      description: "Rassemblement et vérification de tous les documents nécessaires",
      icon: Database,
      color: "bg-slate-600"
    },
    {
      step: "03",
      title: "Traitement administratif",
      description: "Dépôt et suivi de votre dossier auprès des administrations",
      icon: Building2,
      color: "bg-indigo-600"
    },
    {
      step: "04",
      title: "Validation et livraison",
      description: "Récupération et remise de vos documents validés",
      icon: CheckCircle,
      color: "bg-emerald-600"
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Expertise reconnue",
      description: "Plus de 15 ans d'expérience dans les démarches administratives au Gabon",
      stat: "15+ ans"
    },
    {
      icon: Clock,
      title: "Délais respectés",
      description: "Engagement sur les délais avec suivi en temps réel",
      stat: "98%"
    },
    {
      icon: Users,
      title: "Équipe dédiée",
      description: "Experts spécialisés dans chaque type de démarche",
      stat: "100%"
    },
    {
      icon: Award,
      title: "Taux de réussite",
      description: "Dossiers traités avec succès et conformité garantie",
      stat: "99%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section - Design Institutionnel */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
              <FileText className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Démarches <span className="text-blue-300">Administratives</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              L'excellence administrative au service de vos projets au Gabon
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <QuoteModal serviceName="de démarches administratives">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 text-xl px-12 py-6 rounded-full font-bold shadow-2xl transition-all duration-300 hover:scale-105">
                  <FileText className="mr-3 h-6 w-6" />
                  Demander un devis
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </QuoteModal>
              <a href="tel:+24107372996">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 text-xl px-8 py-6 rounded-full font-semibold backdrop-blur-sm">
                  <Phone className="mr-3 h-6 w-6" />
                  Nous contacter
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Nos Services Administratifs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une gamme complète de services pour simplifier vos démarches au Gabon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 cursor-pointer ${
                  hoveredCard === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
            </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Notre Processus
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un processus structuré et transparent pour vos démarches administratives
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Connection Line */}
                  {index < timelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-blue-300 transform translate-x-4 z-0"></div>
                  )}
                  
                  <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-200">
                    {/* Step Number */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${step.color} text-white font-bold text-lg mb-4`}>
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-blue-100 transition-colors duration-300">
                        <step.icon className="h-6 w-6 text-slate-600 group-hover:text-blue-600" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                </p>
              </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose EAAA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pourquoi choisir <span className="text-blue-300">EAAA</span> ?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Notre expertise et notre engagement font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Stat Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {advantage.stat}
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <advantage.icon className="h-8 w-8 text-blue-300" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Prêt à simplifier vos démarches ?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour un accompagnement personnalisé
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="flex items-center justify-center gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Phone className="h-8 w-8 text-blue-300" />
                <div className="text-left">
                  <p className="font-semibold">Appelez-nous</p>
                  <p className="text-blue-200">+241 07 37 29 96</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Mail className="h-8 w-8 text-blue-300" />
                <div className="text-left">
                  <p className="font-semibold">Email</p>
                  <p className="text-blue-200">eaaa@eaaa.pro</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <MapPin className="h-8 w-8 text-blue-300" />
                <div className="text-left">
                  <p className="font-semibold">Libreville</p>
                  <p className="text-blue-200">Haut de Gué-Gué</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <QuoteModal serviceName="de démarches administratives">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 text-xl px-12 py-6 rounded-full font-bold shadow-2xl transition-all duration-300 hover:scale-105">
                  <FileText className="mr-3 h-6 w-6" />
                  Demander un devis
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </QuoteModal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdministrativeServices;
