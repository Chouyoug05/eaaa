import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  MapPin, 
  Bed, 
  Bath, 
  Plus, 
  Star,
  DollarSign,
  Calendar as CalendarIcon,
  Eye,
  Settings
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

const accommodations = [
  { 
    id: 1, 
    name: "Appartement Luxe - Anfa", 
    location: "Casablanca, Anfa", 
    price: "1200 DH / nuit",
    rooms: 3,
    baths: 2,
    rating: 4.9,
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=60",
    description: "Superbe appartement situé au coeur d'Anfa, offrant une vue imprenable et des équipements haut de gamme."
  },
  { 
    id: 2, 
    name: "Studio Moderne - Maarif", 
    location: "Casablanca, Maarif", 
    price: "600 DH / nuit",
    rooms: 1,
    baths: 1,
    rating: 4.7,
    status: "Occupé",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60",
    description: "Studio fonctionnel et élégant, idéal pour les voyageurs d'affaires ou les couples."
  },
  { 
    id: 3, 
    name: "Villa Prestige - Bouskoura", 
    location: "Bouskoura", 
    price: "3500 DH / nuit",
    rooms: 5,
    baths: 4,
    rating: 5.0,
    status: "Maintenance",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60",
    description: "Villa d'exception dans la forêt de Bouskoura, avec piscine privée et jardin paysager."
  },
  { 
    id: 4, 
    name: "Loft Industriel - Centre Ville", 
    location: "Casablanca, Gauthier", 
    price: "950 DH / nuit",
    rooms: 2,
    baths: 1,
    rating: 4.8,
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60",
    description: "Loft spacieux au design industriel, situé dans le quartier branché de Gauthier."
  },
];

const AdminAccommodations = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestion des Hébergements</h1>
          <p className="text-muted-foreground mt-1">Gérez vos propriétés et les réservations en cours.</p>
        </div>
        <Button className="gap-2" onClick={() => toast.success("Ouverture de l'ajout de propriété")}>
          <Plus className="h-4 w-4" />
          Ajouter une propriété
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {accommodations.map((property) => (
          <Card key={property.id} className="overflow-hidden border shadow-sm group hover:shadow-md transition-all">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={property.image} 
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <Badge className={
                  property.status === "Disponible" ? "bg-green-500 hover:bg-green-600 border-none" : 
                  property.status === "Occupé" ? "bg-red-500 hover:bg-red-600 border-none" : 
                  "bg-orange-500 hover:bg-orange-600 border-none"
                }>
                  {property.status}
                </Badge>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="sm" variant="secondary" className="gap-1" onClick={() => setSelectedProperty(property)}>
                  <Eye className="h-4 w-4" /> Détails
                </Button>
              </div>
            </div>
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-start mb-1">
                <CardTitle className="text-lg line-clamp-1">{property.name}</CardTitle>
                <div className="flex items-center gap-1 text-sm font-medium text-orange-500">
                  <Star className="h-3 w-3 fill-current" />
                  {property.rating}
                </div>
              </div>
              <CardDescription className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {property.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" /> {property.rooms} Ch.
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" /> {property.baths} Sdb.
                </div>
              </div>
              <div className="text-lg font-bold text-primary flex items-center">
                <DollarSign className="h-4 w-4" /> {property.price}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" onClick={() => toast.info("Édition bientôt disponible")}>
                <Settings className="h-3.5 w-3.5 mr-1" /> Gérer
              </Button>
              <Button variant="outline" size="sm" className="flex-1 gap-1" onClick={() => setShowCalendar(true)}>
                <CalendarIcon className="h-3.5 w-3.5" /> Agenda
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-card p-6 rounded-xl border shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-lg">Aperçu des Réservations</h3>
          <Button variant="outline" size="sm" onClick={() => setShowCalendar(!showCalendar)}>
            {showCalendar ? "Masquer le calendrier" : "Voir le calendrier complet"}
          </Button>
        </div>
        
        {showCalendar ? (
          <div className="flex flex-col md:flex-row gap-8 items-start justify-center animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="border rounded-xl p-4 bg-background shadow-sm">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h4 className="font-medium text-muted-foreground">Événements pour le {date?.toLocaleDateString('fr-FR')}</h4>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                  <p className="text-sm font-bold text-green-800">Check-in: Jean Dupont</p>
                  <p className="text-xs text-green-700">Appartement Luxe - Anfa (14:00)</p>
                </div>
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <p className="text-sm font-bold text-red-800">Check-out: Marie Martin</p>
                  <p className="text-xs text-red-700">Studio Moderne - Maarif (11:00)</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-12 border border-dashed rounded-xl text-center text-muted-foreground bg-muted/20">
            <CalendarIcon className="h-10 w-10 mx-auto mb-3 opacity-20" />
            <p className="font-medium">Le calendrier interactif est masqué.</p>
            <Button variant="link" className="mt-2" onClick={() => setShowCalendar(true)}>Afficher maintenant</Button>
          </div>
        )}
      </div>

      {/* Property Details Modal */}
      <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedProperty?.name}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            <div className="h-64 rounded-xl overflow-hidden border">
              <img src={selectedProperty?.image} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Localisation</p>
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="h-4 w-4 text-primary" /> {selectedProperty?.location}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Description</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {selectedProperty?.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-muted/50 rounded-lg text-center">
                  <p className="text-xs text-muted-foreground mb-1">Prix</p>
                  <p className="font-bold text-primary">{selectedProperty?.price}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg text-center">
                  <p className="text-xs text-muted-foreground mb-1">Note</p>
                  <div className="flex items-center justify-center gap-1 font-bold text-orange-500">
                    <Star className="h-3 w-3 fill-current" /> {selectedProperty?.rating}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAccommodations;
