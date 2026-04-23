import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  UserPlus, 
  MoreVertical, 
  Edit, 
  Trash2, 
  UserCheck, 
  UserX,
  Mail,
  Calendar
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const usersData = [
  { id: 1, name: "Jean Dupont", email: "jean.dupont@email.com", role: "Utilisateur", status: "Actif", date: "2024-03-15" },
  { id: 2, name: "Marie Martin", email: "marie.m@email.com", role: "Utilisateur", status: "Inactif", date: "2024-03-20" },
  { id: 3, name: "Ali Yilmaz", email: "ali.y@email.com", role: "Modérateur", status: "Actif", date: "2024-01-10" },
  { id: 4, name: "Sophie Dubois", email: "s.dubois@email.com", role: "Utilisateur", status: "Actif", date: "2024-04-02" },
  { id: 5, name: "Thomas Lefebvre", email: "t.lefe@email.com", role: "Utilisateur", status: "Banni", date: "2023-11-28" },
  { id: 6, name: "Lucas Bernard", email: "l.bernard@email.com", role: "Admin", status: "Actif", date: "2023-09-05" },
];

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Actif":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">Actif</Badge>;
      case "Inactif":
        return <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100 border-none">Inactif</Badge>;
      case "Banni":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-none">Banni</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestion des Utilisateurs</h1>
          <p className="text-muted-foreground mt-1">Gérez les comptes et les accès de vos membres.</p>
        </div>
        <Button className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" />
          Ajouter un utilisateur
        </Button>
      </div>

      <div className="bg-card rounded-xl border shadow-sm">
        <div className="p-4 border-b flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Rechercher par nom ou email..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Tous</Button>
            <Button variant="ghost" size="sm">Actifs</Button>
            <Button variant="ghost" size="sm">Inactifs</Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Utilisateur</TableHead>
              <TableHead>Rôle</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Inscription</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center font-medium text-sm">
                      {user.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{user.name}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Mail className="h-3 w-3" /> {user.email}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell>
                  <span className="text-sm flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {user.date}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" /> Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        {user.status === "Actif" ? (
                          <><UserX className="mr-2 h-4 w-4 text-orange-600" /> Désactiver</>
                        ) : (
                          <><UserCheck className="mr-2 h-4 w-4 text-green-600" /> Activer</>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" /> Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {filteredUsers.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">
            Aucun utilisateur trouvé pour "{searchTerm}"
          </div>
        )}

        <div className="p-4 border-t flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Affichage de {filteredUsers.length} sur {usersData.length} utilisateurs
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>Précédent</Button>
            <Button variant="outline" size="sm" disabled>Suivant</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
