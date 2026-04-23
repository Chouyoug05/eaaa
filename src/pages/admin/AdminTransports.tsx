import React, { useState } from "react";
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
  ChevronRight,
  Eye,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const initialBookings = [
  { 
    id: "TR-9021", 
    customer: "Jean Dupont", 
    from: "Aéroport Mohammed V", 
    to: "Hôtel Sofitel", 
    time: "Aujourd'hui, 14:30",
    vehicle: "Mercedes Classe E",
    driver: "Ahmed K.",
    status: "Confirmé",
    details: "Vol AF1234, Arrivée prévue à 14:00."
  },
  { 
    id: "TR-9022", 
    customer: "Marie Martin", 
    from: "Gare Casa Voyageurs", 
    to: "Résidence Anfa", 
    time: "Aujourd'hui, 16:00",
    vehicle: "Toyota Prado",
    driver: "Said M.",
    status: "En attente",
    details: "Besoin de siège bébé."
  },
  { 
    id: "TR-9023", 
    customer: "Ali Yilmaz", 
    from: "Hôtel Kenzi Tower", 
    to: "Aéroport Mohammed V", 
    time: "Demain, 08:00",
    vehicle: "Mercedes Classe V",
    driver: "Yassine B.",
    status: "En cours",
    details: "Groupe de 4 personnes."
  },
  { 
    id: "TR-9024", 
    customer: "Sophie Dubois", 
    from: "Aéroport Mohammed V", 
    to: "Hôtel Barcelo", 
    time: "Hier, 10:15",
    vehicle: "Range Rover",
    driver: "Karim L.",
    status: "Terminé",
    details: "Trajet effectué sans encombre."
  },
];

const AdminTransports = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [filter, setFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  const filteredBookings = bookings.filter(b => {
    const matchesFilter = filter === "Tous" || b.status === filter;
    const matchesSearch = b.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         b.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
          <Button variant="outline" onClick={() => toast.info("Accès à la flotte bientôt disponible")}>Gestion Flotte</Button>
          <Button className="gap-2" onClick={() => toast.success("Ouverture du formulaire de réservation")}>
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
        <div className="p-4 border-b flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Rechercher par client ou ID..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {["Tous", "En attente", "Confirmé", "En cours", "Terminé"].map((s) => (
              <Button 
                key={s}
                variant={filter === s ? "default" : "ghost"} 
                size="sm"
                onClick={() => setFilter(s)}
              >
                {s}
              </Button>
            ))}
          </div>
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
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id} className="group hover:bg-muted/30 transition-colors">
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
                  <Button variant="ghost" size="icon" onClick={() => setSelectedBooking(booking)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedBooking} onOpenChange={() => setSelectedBooking(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Car className="h-5 w-5 text-primary" />
              Détails du transport {selectedBooking?.id}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1 uppercase font-bold tracking-wider">Client</p>
                <p className="font-medium">{selectedBooking?.customer}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 uppercase font-bold tracking-wider">Statut</p>
                {selectedBooking && getStatusBadge(selectedBooking.status)}
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Itinéraire</p>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <span className="text-sm">{selectedBooking?.from}</span>
              </div>
              <div className="flex items-center gap-2 pl-6 border-l-2 border-dashed ml-2">
                <span className="text-sm">{selectedBooking?.to}</span>
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-xs text-muted-foreground mb-2 uppercase font-bold tracking-wider">Note supplémentaire</p>
              <p className="text-sm bg-muted p-3 rounded-lg italic">
                "{selectedBooking?.details}"
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Separator = () => <div className="h-px bg-border w-full" />;

export default AdminTransports;
