import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Send } from "lucide-react";

interface WhatsAppFormProps {
  children: React.ReactNode;
  phone?: string;
}

const WhatsAppForm = ({ children, phone = "24107372996" }: WhatsAppFormProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const location = useLocation();

  const getServiceContext = () => {
    const path = location.pathname;
    const routeToService: Record<string, string> = {
      "/": "Services généraux",
      "/assistance-aeroportuaire": "Assistance aéroportuaire",
      "/demarches-administratives": "Démarches administratives",
      "/transport": "Transport & Liaisons",
      "/hebergement": "Hébergement Premium",
      "/contact": "Contact",
      "/about": "À propos",
    };
    return routeToService[path] ?? "Services généraux";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      return;
    }

    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const pageUrl = `${origin}${location.pathname}`;
    const serviceContext = getServiceContext();

    let message = `Bonjour,\n\n`;
    message += `Je suis ${formData.name}`;
    if (formData.company) message += ` de ${formData.company}`;
    if (formData.phone) message += `\nTéléphone: ${formData.phone}`;
    if (formData.email) message += `\nEmail: ${formData.email}`;
    message += `\n\nJe m'intéresse à: ${formData.service || serviceContext}`;
    message += `\n\n${formData.message}`;
    message += `\n\nPage consultée: ${pageUrl}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encoded}`;
    
    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
    
    // Fermer le modal
    setOpen(false);
    
    // Réinitialiser le formulaire
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      service: "",
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-[#25D366]" />
            Demande via WhatsApp
          </DialogTitle>
          <DialogDescription>
            Remplissez vos informations et nous vous redirigerons vers WhatsApp pour finaliser votre demande.
          </DialogDescription>
        </DialogHeader>
        
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
              value={formData.phone}
              onChange={handleChange}
              placeholder="+241 XX XX XX XX"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre.email@exemple.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service d'intérêt</Label>
            <Input
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder={getServiceContext()}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Votre message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre besoin..."
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#20c55a]">
            <Send className="mr-2 h-4 w-4" />
            Envoyer via WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppForm;
