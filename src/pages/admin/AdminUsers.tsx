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
  Calendar,
  Filter
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const initialUsers = [
  { id: 1, name: "Jean Dupont", email: "jean.dupont@email.com", role: "Utilisateur", status: "Actif", date: "2024-03-15" },
  { id: 2, name: "Marie Martin", email: "marie.m@email.com", role: "Utilisateur", status: "Inactif", date: "2024-03-20" },
  { id: 3, name: "Ali Yilmaz", email: "ali.y@email.com", role: "Modérateur", status: "Actif", date: "2024-01-10" },
  { id: 4, name: "Sophie Dubois", email: "s.dubois@email.com", role: "Utilisateur", status: "Actif", date: "2024-04-02" },
  { id: 5, name: "Thomas Lefebvre", email: "t.lefe@email.com", role: "Utilisateur", status: "Banni", date: "2023-11-28" },
  { id: 6, name: "Lucas Bernard", email: "l.bernard@email.com", role: "Admin", status: "Actif", date: "2023-09-05" },
];

const AdminUsers = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tous");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Utilisateur" });

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "Tous" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    const userToAdd = {
      id: users.length + 1,
      ...newUser,
      status: "Actif",
      date: new Date().toISOString().split('T')[0]
    };
    setUsers([userToAdd, ...users]);
    setNewUser({ name: "", email: "", role: "Utilisateur" });
    setIsAddModalOpen(false);
    toast.success("Utilisateur ajouté avec succès");
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(u => u.id !== id));
    toast.success("Utilisateur supprimé");
  };

  const toggleUserStatus = (id: number) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        return { ...u, status: u.status === "Actif" ? "Inactif" : "Actif" };
      }
      return u;
    }));
    toast.info("Statut mis à jour");
  };

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
        
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Ajouter un utilisateur
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Ajouter un nouvel utilisateur</DialogTitle>
              <DialogDescription>
                Remplissez les informations pour créer un nouveau compte.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddUser} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input 
                  id="name" 
                  placeholder="Jean Dupont" 
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="jean@example.com" 
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Rôle</Label>
                <select 
                  id="role"
                  className="w-full border rounded-md p-2 bg-background"
                  value={newUser.role}
                  onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                >
                  <option>Utilisateur</option>
                  <option>Modérateur</option>
                  <option>Admin</option>
                </select>
              </div>
              <DialogFooter>
                <Button type="submit">Créer l'utilisateur</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
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
            <Filter className="h-4 w-4 text-muted-foreground mr-2" />
            {["Tous", "Actif", "Inactif", "Banni"].map((status) => (
              <Button 
                key={status}
                variant={statusFilter === status ? "default" : "ghost"} 
                size="sm"
                onClick={() => setStatusFilter(status)}
              >
                {status}
              </Button>
            ))}
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
              <TableRow key={user.id} className="group transition-colors">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-sm">
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
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => toast.info("Édition bientôt disponible")}>
                        <Edit className="mr-2 h-4 w-4" /> Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toggleUserStatus(user.id)}>
                        {user.status === "Actif" ? (
                          <><UserX className="mr-2 h-4 w-4 text-orange-600" /> Désactiver</>
                        ) : (
                          <><UserCheck className="mr-2 h-4 w-4 text-green-600" /> Activer</>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteUser(user.id)}>
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
          <div className="p-12 text-center text-muted-foreground">
            <div className="flex flex-col items-center gap-2">
              <Search className="h-8 w-8 opacity-20" />
              <p>Aucun utilisateur trouvé pour "{searchTerm}"</p>
              <Button variant="link" onClick={() => {setSearchTerm(""); setStatusFilter("Tous");}}>
                Réinitialiser les filtres
              </Button>
            </div>
          </div>
        )}

        <div className="p-4 border-t flex items-center justify-between bg-muted/20">
          <p className="text-xs text-muted-foreground font-medium">
            Affichage de {filteredUsers.length} sur {users.length} utilisateurs
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
