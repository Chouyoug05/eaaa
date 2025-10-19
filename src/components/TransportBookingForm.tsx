import React, { useState } from "react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Car,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Building2,
  Users,
  MessageSquareText,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface TransportBookingFormProps {
  children: React.ReactNode;
  vehicleType?: string;
}

const TransportBookingForm = ({ children, vehicleType }: TransportBookingFormProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    vehicleType: vehicleType || "",
    pickupLocation: "",
    destination: "",
    pickupDate: undefined as Date | undefined,
    pickupTime: "",
    returnDate: undefined as Date | undefined,
    returnTime: "",
    passengers: 1,
    specialRequests: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const vehicleTypes = [
    "Berlines Premium",
    "Véhicules 4x4", 
    "Bus de Transport",
    "Véhicule de luxe",
    "Minibus"
  ];

  const destinations = [
    "Libreville",
    "Port-Gentil", 
    "Onal",
    "Mandji",
    "Kougouleu",
    "Sites pétroliers",
    "Autre destination"
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Le nom est requis.";
    if (!formData.email) newErrors.email = "L'email est requis.";
    if (!formData.vehicleType) newErrors.vehicleType = "Le type de véhicule est requis.";
    if (!formData.pickupLocation) newErrors.pickupLocation = "Le lieu de prise en charge est requis.";
    if (!formData.destination) newErrors.destination = "La destination est requise.";
    if (!formData.pickupDate) newErrors.pickupDate = "La date de prise en charge est requise.";
    if (!formData.pickupTime) newErrors.pickupTime = "L'heure de prise en charge est requise.";
    if (formData.passengers < 1) newErrors.passengers = "Le nombre de passagers doit être au moins 1.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors(prev => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleDateChange = (name: string, date: Date | undefined) => {
    setFormData({
      ...formData,
      [name]: date,
    });
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Erreur de validation",
        description: "Veuillez corriger les erreurs dans le formulaire.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to a backend service
    console.log("Transport Booking Submitted:", formData);

    toast({
      title: "Réservation envoyée !",
      description: "Votre demande de réservation a été envoyée avec succès. Nous vous recontacterons bientôt.",
      variant: "success",
    });

    setOpen(false);
    // Reset form
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      vehicleType: vehicleType || "",
      pickupLocation: "",
      destination: "",
      pickupDate: undefined,
      pickupTime: "",
      returnDate: undefined,
      returnTime: "",
      passengers: 1,
      specialRequests: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="bg-gradient-hero text-white p-6 rounded-t-lg">
          <DialogTitle className="flex items-center gap-2 text-3xl font-bold">
            <Car className="h-7 w-7" />
            Réserver un Transport
          </DialogTitle>
          <DialogDescription className="text-white/90">
            Remplissez ce formulaire pour réserver votre véhicule de transport.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <User className="h-5 w-5 text-primary" /> Vos Informations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet *</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" required />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Société (optionnel)</Label>
                <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Nom de votre société" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone (optionnel)</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+241 XX XX XX XX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="votre.email@exemple.com" required />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>
          </div>

          {/* Transport Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Car className="h-5 w-5 text-primary" /> Détails du Transport
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vehicleType">Type de véhicule *</Label>
                <Select onValueChange={(value) => handleSelectChange("vehicleType", value)} value={formData.vehicleType}>
                  <SelectTrigger className={cn(errors.vehicleType && "border-red-500")}>
                    <SelectValue placeholder="Sélectionnez le type de véhicule" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicleTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.vehicleType && <p className="text-red-500 text-sm">{errors.vehicleType}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="passengers">Nombre de passagers *</Label>
                <Input id="passengers" name="passengers" type="number" value={formData.passengers} onChange={handleChange} min={1} required />
                {errors.passengers && <p className="text-red-500 text-sm">{errors.passengers}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupLocation">Lieu de prise en charge *</Label>
                <Input id="pickupLocation" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} placeholder="Adresse de prise en charge" required />
                {errors.pickupLocation && <p className="text-red-500 text-sm">{errors.pickupLocation}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination *</Label>
                <Select onValueChange={(value) => handleSelectChange("destination", value)} value={formData.destination}>
                  <SelectTrigger className={cn(errors.destination && "border-red-500")}>
                    <SelectValue placeholder="Sélectionnez la destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map((dest) => (
                      <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.destination && <p className="text-red-500 text-sm">{errors.destination}</p>}
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-primary" /> Planning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickupDate">Date de prise en charge *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.pickupDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.pickupDate ? format(formData.pickupDate, "PPP", { locale: fr }) : <span>Sélectionnez une date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.pickupDate}
                      onSelect={(date) => handleDateChange("pickupDate", date)}
                      initialFocus
                      locale={fr}
                    />
                  </PopoverContent>
                </Popover>
                {errors.pickupDate && <p className="text-red-500 text-sm">{errors.pickupDate}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupTime">Heure de prise en charge *</Label>
                <Input id="pickupTime" name="pickupTime" type="time" value={formData.pickupTime} onChange={handleChange} required />
                {errors.pickupTime && <p className="text-red-500 text-sm">{errors.pickupTime}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="returnDate">Date de retour (optionnel)</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.returnDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.returnDate ? format(formData.returnDate, "PPP", { locale: fr }) : <span>Sélectionnez une date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.returnDate}
                      onSelect={(date) => handleDateChange("returnDate", date)}
                      initialFocus
                      locale={fr}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="returnTime">Heure de retour (optionnel)</Label>
                <Input id="returnTime" name="returnTime" type="time" value={formData.returnTime} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-2">
            <Label htmlFor="specialRequests">Demandes spéciales (optionnel)</Label>
            <Textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleChange} placeholder="Ex: besoin d'un chauffeur bilingue, équipement spécifique..." rows={4} />
          </div>

          <Button type="submit" size="lg" className="w-full bg-gradient-hero">
            <Car className="mr-2 h-5 w-5" />
            Confirmer la réservation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TransportBookingForm;
