import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Send, 
  User, 
  Building2, 
  Phone, 
  Mail, 
  Plane, 
  Calendar,
  MapPin,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AssistanceFormProps {
  children: React.ReactNode;
}

const AssistanceForm = ({ children }: AssistanceFormProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    arrivalDate: "",
    arrivalTime: "",
    departureDate: "",
    departureTime: "",
    flightNumber: "",
    airport: "",
    passengers: "",
    assistanceType: "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir les champs obligatoires (nom, email, téléphone).",
        variant: "destructive",
      });
      return;
    }

    // Simuler l'envoi
    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons dans les plus brefs délais pour confirmer votre assistance.",
    });
    
    setOpen(false);
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      arrivalDate: "",
      arrivalTime: "",
      departureDate: "",
      departureTime: "",
      flightNumber: "",
      airport: "",
      passengers: "",
      assistanceType: "",
      specialRequests: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="bg-gradient-hero text-white p-6 rounded-t-lg">
          <DialogTitle className="flex items-center gap-3 text-3xl font-bold">
            <Plane className="h-8 w-8" />
            Demander une assistance aéroportuaire
          </DialogTitle>
          <DialogDescription className="text-white/90 text-lg">
            Remplissez ce formulaire pour réserver votre assistance personnalisée
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Informations personnelles */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground border-b pb-2">Informations personnelles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" /> Nom complet *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" /> Société
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre société"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" /> Téléphone *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+241 XX XX XX XX"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" /> Email *
                  </Label>
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
              </div>
            </div>

            {/* Détails du voyage */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground border-b pb-2">Détails du voyage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="airport" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" /> Aéroport
                  </Label>
                  <select
                    id="airport"
                    name="airport"
                    value={formData.airport}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Sélectionner un aéroport</option>
                    <option value="libreville">Libreville - Aéroport International Léon M'ba</option>
                    <option value="port-gentil">Port-Gentil - Aéroport de Port-Gentil</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="flightNumber" className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-muted-foreground" /> Numéro de vol
                  </Label>
                  <Input
                    id="flightNumber"
                    name="flightNumber"
                    value={formData.flightNumber}
                    onChange={handleChange}
                    placeholder="Ex: AF1234"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="arrivalDate" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" /> Date d'arrivée
                  </Label>
                  <Input
                    id="arrivalDate"
                    name="arrivalDate"
                    type="date"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="arrivalTime" className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" /> Heure d'arrivée
                  </Label>
                  <Input
                    id="arrivalTime"
                    name="arrivalTime"
                    type="time"
                    value={formData.arrivalTime}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="departureDate" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" /> Date de départ
                  </Label>
                  <Input
                    id="departureDate"
                    name="departureDate"
                    type="date"
                    value={formData.departureDate}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="departureTime" className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" /> Heure de départ
                  </Label>
                  <Input
                    id="departureTime"
                    name="departureTime"
                    type="time"
                    value={formData.departureTime}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="passengers" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" /> Nombre de passagers
                  </Label>
                  <Input
                    id="passengers"
                    name="passengers"
                    type="number"
                    min="1"
                    value={formData.passengers}
                    onChange={handleChange}
                    placeholder="1"
                  />
                </div>
              </div>
            </div>

            {/* Type d'assistance */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground border-b pb-2">Type d'assistance</h3>
              <div className="space-y-2">
                <Label htmlFor="assistanceType">Sélectionnez le type d'assistance souhaité</Label>
                <select
                  id="assistanceType"
                  name="assistanceType"
                  value={formData.assistanceType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Sélectionner un type d'assistance</option>
                  <option value="arrival">Assistance à l'arrivée uniquement</option>
                  <option value="departure">Assistance au départ uniquement</option>
                  <option value="both">Assistance complète (arrivée + départ)</option>
                  <option value="vip">Service VIP premium</option>
                </select>
              </div>
            </div>

            {/* Demandes spéciales */}
            <div className="space-y-2">
              <Label htmlFor="specialRequests">Demandes spéciales ou commentaires</Label>
              <Textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Décrivez vos besoins spécifiques, mobilité réduite, bagages spéciaux, etc."
                rows={4}
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-gradient-hero text-white hover:opacity-90">
              <Send className="mr-2 h-5 w-5" />
              Envoyer la demande d'assistance
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssistanceForm;
