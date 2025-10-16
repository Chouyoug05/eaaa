import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, User, Building2, Phone as PhoneIcon, Mail, FileText, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  serviceName?: string;
  onSuccess?: () => void;
  showHeader?: boolean; // masque l'en-tête lorsqu'utilisé dans un modal
}

const ContactForm = ({ serviceName, onSuccess, showHeader = true }: ContactFormProps) => {
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
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    });

    // Call onSuccess callback if provided
    if (onSuccess) {
      onSuccess();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-card overflow-hidden">
      {showHeader && (
        <div className="bg-gradient-hero text-white px-6 py-5">
          <h3 className="text-2xl font-bold">Demander un devis</h3>
          <p className="text-white/90 mt-1 text-sm">
            {serviceName 
              ? `Intéressé par notre service ${serviceName} ?` 
              : "Remplissez le formulaire et nous vous recontacterons rapidement"}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              Nom complet *
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                maxLength={100}
                required
                className="pl-9"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              Email *
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre.email@exemple.com"
                maxLength={255}
                required
                className="pl-9"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              Société
            </Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nom de votre société"
                maxLength={100}
                className="pl-9"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-muted-foreground" />
              Téléphone
            </Label>
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+241 XX XX XX XX"
                maxLength={20}
                className="pl-9"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="service" className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-muted-foreground" />
            Service d'intérêt (optionnel)
          </Label>
          <Input
            id="service"
            name="service"
            value={(formData as any).service || ""}
            onChange={handleChange as any}
            placeholder={serviceName ? `Ex: ${serviceName}` : "Ex: Assistance aéroportuaire"}
            maxLength={100}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre besoin..."
            rows={5}
            maxLength={1000}
            required
          />
        </div>

        <Button type="submit" size="lg" className="w-full bg-gradient-hero">
          <Send className="mr-2 h-5 w-5" />
          Envoyer la demande
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
