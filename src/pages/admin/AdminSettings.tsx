import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Save,
  LogOut
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AdminSettings = () => {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Paramètres</h1>
        <p className="text-muted-foreground mt-1">Gérez votre profil et les configurations de l'application.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">Profil Administrateur</h3>
          <p className="text-sm text-muted-foreground">Vos informations personnelles et identifiants.</p>
        </div>
        <Card className="md:col-span-2 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <User className="h-4 w-4" /> Détails du profil
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" defaultValue="Admin" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" defaultValue="EAAA" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email professionnel</Label>
              <Input id="email" type="email" defaultValue="admin@eaaa.com" />
            </div>
          </CardContent>
          <Separator />
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Shield className="h-4 w-4" /> Sécurité
            </CardTitle>
            <CardDescription>Mettez à jour votre mot de passe pour plus de sécurité.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPass">Mot de passe actuel</Label>
              <Input id="currentPass" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPass">Nouveau mot de passe</Label>
              <Input id="newPass" type="password" placeholder="••••••••" />
            </div>
          </CardContent>
          <div className="p-6 border-t bg-muted/30 flex justify-end">
            <Button className="gap-2">
              <Save className="h-4 w-4" /> Sauvegarder les modifications
            </Button>
          </div>
        </Card>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">Notifications & Préférences</h3>
          <p className="text-sm text-muted-foreground">Contrôlez les alertes et l'apparence.</p>
        </div>
        <Card className="md:col-span-2 border shadow-sm">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Alertes de réservation</Label>
                <p className="text-sm text-muted-foreground">Recevoir une notification pour chaque nouvelle réservation.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Rapports hebdomadaires</Label>
                <p className="text-sm text-muted-foreground">Envoyer un résumé des statistiques par email chaque lundi.</p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Mode Maintenance</Label>
                <p className="text-sm text-muted-foreground">Désactiver temporairement l'accès client pour maintenance.</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="pt-8 flex justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Globe className="h-4 w-4" />
          Version de l'application: 1.0.4-beta
        </div>
        <Button variant="destructive" variant="outline" className="text-red-600 hover:text-red-600 hover:bg-red-50 gap-2">
          <LogOut className="h-4 w-4" /> Déconnexion
        </Button>
      </div>
    </div>
  );
};

export default AdminSettings;
