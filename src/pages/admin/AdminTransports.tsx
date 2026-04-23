import React from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  MapPin, 
  Clock, 
  User, 
  CheckCircle2, 
  AlertCircle,
  MoreHorizontal,
  ChevronRight
} from "lucide-react";

const bookings = [
  { 
    id: "TR-9021", 
    customer: "Jean Dupont", 
    from: "Aéroport Mohammed V", 
    to: "Hôtel Sofitel", 
    time: "Aujourd'hui, 14:30",
    vehicle: "Mercedes Classe E",
    driver: "Ahmed K.",
    status: "Confirmé" 
  },
  { 
    id: "TR-9022", 
    customer: "Marie Martin", 
    from: "Gare Casa Voyageurs", 
    to: "Résidence Anfa", 
    time: "Aujourd'hui, 16:00",
    vehicle: "Toyota Prado",
    driver: "Said M.",
    status: "En attente" 
  },
  { 
    id: "TR-9023", 
    customer: "Ali Yilmaz", 
    from: "Hôtel Kenzi Tower", 
    to: "Aéroport Mohammed V", 
    time: "Demain, 08:00",
    vehicle: "Mercedes Classe V",
    driver: "Yassine B.",
    status: "En cours" 
  },
  { 
    id: "TR-9024", 
    customer: "Sophie Dubois", 
    from: "Aéroport Mohammed V", 
    to: "Hôtel Barcelo", 
    time: "Hier, 10:15",
    vehicle: "Range Rover",
    driver: "Karim L.",
    status: "Terminé" 
  },
];

const AdminTransports = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Confirmé":
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">Confirmé</Badge>;
      case "En attente":
        return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-none">En attente</Badge>;
      case "En cours":
        return <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 border-none">En cours</Badge>;
      case "Terminé":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">Terminé</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestion des Transports</h1>
          <p className="text-muted-foreground mt-1">Suivez les trajets et gérez la flotte de véhicules.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Gestion Flotte</Button>
          <Button className="gap-2">
            <Car className="h-4 w-4" />
            Nouvelle Réservation
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-xl border shadow-sm flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Aujourd'hui</p>
            <p className="text-2xl font-bold">12 Trajets</p>
          </div>
        </div>
        <div className="bg-card p-4 rounded-xl border shadow-sm flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Terminés</p>
            <p className="text-2xl font-bold">45 ce mois</p>
          </div>
        </div>
        <div className="bg-card p-4 rounded-xl border shadow-sm flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
            <AlertCircle className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">En attente</p>
            <p className="text-2xl font-bold">3 demandes</p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="font-semibold">Réservations Récentes</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client / ID</TableHead>
              <TableHead>Itinéraire</TableHead>
              <TableHead>Véhicule / Chauffeur</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">{booking.customer}</span>
                    <span className="text-xs text-muted-foreground font-mono">{booking.id}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-sm">
                      <MapPin className="h-3.5 w-3.5 text-red-500" />
                      <span>{booking.from}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
                      <span>{booking.to}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-sm">
                      <Car className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{booking.vehicle}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm">
                      <User className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{booking.driver}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(booking.status)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminTransports;
