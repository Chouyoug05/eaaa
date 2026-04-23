import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  FileText, 
  Car, 
  Home, 
  Settings2, 
  Eye, 
  ToggleRight,
  TrendingUp,
  Users
} from "lucide-react";

const services = [
  { 
    id: 1, 
    name: "Assistance Aéroport", 
    description: "Accueil et accompagnement des voyageurs à leur arrivée.",
    icon: Plane, 
    color: "bg-blue-500",
    status: "Actif",
    requests: 124,
    trend: "+12%"
  },
  { 
    id: 2, 
    name: "Démarches Administratives", 
    description: "Aide pour les visas, permis et autres documents officiels.",
    icon: FileText, 
    color: "bg-purple-500",
    status: "Actif",
    requests: 89,
    trend: "+5%"
  },
  { 
    id: 3, 
    name: "Transport & Logistique", 
    description: "Location de véhicules et transferts privés.",
    icon: Car, 
    color: "bg-orange-500",
    status: "Actif",
    requests: 215,
    trend: "+18%"
  },
  { 
    id: 4, 
    name: "Hébergement", 
    description: "Réservation d'hôtels et appartements meublés.",
    icon: Home, 
    color: "bg-green-500",
    status: "En pause",
    requests: 45,
    trend: "-2%"
  },
];

const AdminServices = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Gestion des Services</h1>
        <p className="text-muted-foreground mt-1">Configurez et surveillez les services offerts par EAAA.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
            <div className={`h-2 ${service.color}`} />
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${service.color} text-white`}>
                  <service.icon className="h-5 w-5" />
                </div>
                <Badge variant={service.status === "Actif" ? "default" : "secondary"}>
                  {service.status}
                </Badge>
              </div>
              <CardTitle className="mt-4 text-xl">{service.name}</CardTitle>
              <CardDescription className="line-clamp-2">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 py-4 border-y my-4">
                <div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users className="h-3 w-3" /> Demandes
                  </p>
                  <p className="text-lg font-bold">{service.requests}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> Tendance
                  </p>
                  <p className={`text-lg font-bold ${service.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {service.trend}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-1">
                  <Eye className="h-3.5 w-3.5" /> Voir
                </Button>
                <Button variant="outline" size="sm" className="flex-1 gap-1">
                  <Settings2 className="h-3.5 w-3.5" /> Config
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="border-dashed flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer">
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <ToggleRight className="h-6 w-6 text-muted-foreground" />
          </div>
          <CardTitle className="text-lg">Nouveau Service</CardTitle>
          <CardDescription>Ajoutez une nouvelle offre à votre catalogue.</CardDescription>
        </Card>
      </div>
      
      <div className="bg-muted/30 rounded-xl p-8 border border-dashed text-center">
        <h3 className="text-lg font-semibold mb-2">Statistiques Globales des Services</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Analysez les performances de tous vos services en un coup d'œil pour optimiser votre offre.
        </p>
        <Button variant="link" className="mt-4">Voir les rapports détaillés</Button>
      </div>
    </div>
  );
};

export default AdminServices;
