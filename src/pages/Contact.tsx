import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Globe, Send, Sun, Moon, ArrowRight, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-airport.jpg";
import transportImage from "@/assets/transport-fleet.jpg";
import guestHouseImage from "@/assets/guest-house.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          alt="Contact EAAA"
          className="h-full"
          autoPlay={true}
          autoPlayInterval={7000}
        />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-5xl mx-auto space-y-8 fade-in">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <MessageCircle className="h-12 w-12 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Contactez{" "}
                <span className="text-accent">EAAA</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos besoins
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <a href="#contact-form">
                  <Button
                    size="lg"
                    className="bg-accent text-primary-foreground hover:bg-accent/90 text-lg px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Envoyer un message
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
                    Nous appeler
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

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 bg-background -mt-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="space-y-6 fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-2">Envoyez-nous un message</h2>
                <p className="text-muted-foreground">
                  Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Société</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre société"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+241 XX XX XX XX"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre besoin..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-hero">
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 slide-in">
              {/* Libreville */}
              <div className="p-6 bg-card rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Libreville
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Haut de Gué-Gué</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <a href="tel:+24107372996" className="block text-primary hover:underline">
                        07 37 29 96
                      </a>
                      <a href="tel:+24103295239" className="block text-primary hover:underline">
                        03 29 52 39
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Port-Gentil */}
              <div className="p-6 bg-card rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Port-Gentil
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Route de l'aéroport</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <a href="tel:+24103467881" className="text-primary hover:underline">
                      03 46 78 81
                    </a>
                  </div>
                </div>
              </div>

              {/* General Contact */}
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold mb-4">Informations générales</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <a href="mailto:eaaa@eaaa.pro" className="text-foreground hover:text-primary transition-colors">
                      eaaa@eaaa.pro
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <a
                      href="https://www.eaaa.pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      www.eaaa.pro
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="p-6 bg-accent/10 rounded-xl border border-accent/30">
                <h3 className="text-xl font-bold mb-3">Contact rapide</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Besoin d'une réponse immédiate ? Contactez-nous via WhatsApp
                </p>
                <a
                  href="https://wa.me/24107372996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
