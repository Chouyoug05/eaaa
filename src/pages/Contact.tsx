import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

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
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90">
              Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos besoins
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
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
