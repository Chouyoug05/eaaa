import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Car, 
  Home, 
  Settings,
  LogOut
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { title: "Tableau de bord", icon: LayoutDashboard, path: "/admin" },
    { title: "Utilisateurs", icon: Users, path: "/admin/users" },
    { title: "Services", icon: Briefcase, path: "/admin/services" },
    { title: "Transports", icon: Car, path: "/admin/transports" },
    { title: "Hébergements", icon: Home, path: "/admin/accommodations" },
    { title: "Paramètres", icon: Settings, path: "/admin/settings" },
  ];

  return (
    <aside className="w-64 bg-sidebar-background border-r border-sidebar-border h-screen sticky top-0 flex flex-col hidden md:flex">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gradient">EAAA Admin</h2>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <button className="flex w-full items-center space-x-3 px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
