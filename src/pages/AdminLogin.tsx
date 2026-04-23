import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'une connexion
    setTimeout(() => {
      setIsLoading(false);
      if (email === "admin@eaaa.com" && password === "admin") {
        localStorage.setItem("isAdminAuthenticated", "true");
        toast.success("Connexion réussie");
        navigate("/admin");
      } else {
        toast.error("Identifiants incorrects (Essayez: admin@eaaa.com / admin)");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gradient mb-2">EAAA Admin</h1>
          <p className="text-muted-foreground">Connectez-vous à votre espace gestion</p>
        </div>

        <div className="bg-card shadow-elegant rounded-2xl p-8 border">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Adresse email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="admin@eaaa.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Mot de passe</label>
                <a href="#" className="text-xs text-primary hover:underline">Mot de passe oublié ?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <span className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
              ) : (
                <>
                  <span>Se connecter</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>
        
        <p className="text-center text-xs text-muted-foreground mt-8">
          &copy; {new Date().getFullYear()} EAAA. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
