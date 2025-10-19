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
  User,
  Building2,
  Phone,
  Mail,
  Home,
  Calendar as CalendarIcon,
  Users,
  MessageSquareText,
  Bed,
  Coffee,
  Car,
  ArrowRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface AccommodationBookingFormProps {
  children: React.ReactNode;
}

const AccommodationBookingForm = ({ children }: AccommodationBookingFormProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    roomType: "",
    checkInDate: undefined as Date | undefined,
    checkOutDate: undefined as Date | undefined,
    guests: 1,
    specialRequests: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const roomTypes = [
    { value: "standard", label: "Chambre Standard" },
    { value: "deluxe", label: "Chambre Deluxe" },
    { value: "suite", label: "Suite" },
    { value: "family", label: "Chambre Familiale" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Le nom est requis.";
    if (!formData.email) newErrors.email = "L'email est requis.";
    if (!formData.roomType) newErrors.roomType = "Le type de chambre est requis.";
    if (!formData.checkInDate) newErrors.checkInDate = "La date d'arrivée est requise.";
    if (!formData.checkOutDate) newErrors.checkOutDate = "La date de départ est requise.";
    if (formData.guests < 1) newErrors.guests = "Le nombre d'invités doit être au moins 1.";
    if (formData.checkInDate && formData.checkOutDate && formData.checkInDate >= formData.checkOutDate) {
      newErrors.checkOutDate = "La date de départ doit être après la date d'arrivée.";
    }

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
    console.log("Accommodation Booking Submitted:", formData);

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
      roomType: "",
      checkInDate: undefined,
      checkOutDate: undefined,
      guests: 1,
      specialRequests: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="bg-gradient-hero text-primary-foreground p-6 rounded-t-lg">
          <DialogTitle className="flex items-center gap-2 text-3xl font-bold">
            <Home className="h-7 w-7" />
            Réserver votre séjour
          </DialogTitle>
          <DialogDescription className="text-primary-foreground/90">
            Remplissez ce formulaire pour réserver votre hébergement à la Guest House EAAA.
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

          {/* Booking Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Bed className="h-5 w-5 text-primary" /> Détails de la Réservation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="roomType">Type de chambre *</Label>
                <Select onValueChange={(value) => handleSelectChange("roomType", value)} value={formData.roomType}>
                  <SelectTrigger className={cn(errors.roomType && "border-red-500")}>
                    <SelectValue placeholder="Sélectionnez le type de chambre" />
                  </SelectTrigger>
                  <SelectContent>
                    {roomTypes.map((room) => (
                      <SelectItem key={room.value} value={room.value}>
                        {room.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.roomType && <p className="text-red-500 text-sm">{errors.roomType}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Nombre d'invités *</Label>
                <Input id="guests" name="guests" type="number" value={formData.guests} onChange={handleChange} min={1} max={6} required />
                {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkInDate">Date d'arrivée *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.checkInDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.checkInDate ? format(formData.checkInDate, "PPP", { locale: fr }) : <span>Sélectionnez une date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.checkInDate}
                      onSelect={(date) => handleDateChange("checkInDate", date)}
                      initialFocus
                      locale={fr}
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
                {errors.checkInDate && <p className="text-red-500 text-sm">{errors.checkInDate}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkOutDate">Date de départ *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.checkOutDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.checkOutDate ? format(formData.checkOutDate, "PPP", { locale: fr }) : <span>Sélectionnez une date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.checkOutDate}
                      onSelect={(date) => handleDateChange("checkOutDate", date)}
                      initialFocus
                      locale={fr}
                      disabled={(date) => date < new Date() || (formData.checkInDate && date <= formData.checkInDate)}
                    />
                  </PopoverContent>
                </Popover>
                {errors.checkOutDate && <p className="text-red-500 text-sm">{errors.checkOutDate}</p>}
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <MessageSquareText className="h-5 w-5 text-primary" /> Demandes Spéciales
            </h3>
            <div className="space-y-2">
              <Label htmlFor="specialRequests">Demandes particulières (optionnel)</Label>
              <Textarea 
                id="specialRequests" 
                name="specialRequests" 
                value={formData.specialRequests} 
                onChange={handleChange} 
                placeholder="Ex: régime alimentaire spécial, accessibilité, transfert aéroport..." 
                rows={4} 
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 group">
            <Home className="mr-2 h-5 w-5" />
            Réserver votre séjour
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AccommodationBookingForm;
