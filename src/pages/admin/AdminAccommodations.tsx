import React from "react";
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
  Calendar
} from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=60"
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
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60"
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
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60"
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
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60"
  },
];

const AdminAccommodations = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestion des Hébergements</h1>
          <p className="text-muted-foreground mt-1">Gérez vos propriétés et les réservations en cours.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Ajouter une propriété
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {accommodations.map((property) => (
          <Card key={property.id} className="overflow-hidden border shadow-sm group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={property.image} 
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3">
                <Badge className={
                  property.status === "Disponible" ? "bg-green-500 hover:bg-green-600" : 
                  property.status === "Occupé" ? "bg-red-500 hover:bg-red-600" : 
                  "bg-orange-500 hover:bg-orange-600"
                }>
                  {property.status}
                </Badge>
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
              <Button variant="outline" size="sm" className="flex-1">Éditer</Button>
              <Button variant="outline" size="sm" className="flex-1 gap-1">
                <Calendar className="h-3.5 w-3.5" /> Agenda
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-card p-6 rounded-xl border shadow-sm">
        <h3 className="font-semibold mb-4">Aperçu des Réservations</h3>
        <div className="p-8 border border-dashed rounded-lg text-center text-muted-foreground">
          <Calendar className="h-8 w-8 mx-auto mb-2 opacity-20" />
          <p>Le calendrier de réservation sera affiché ici.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminAccommodations;
