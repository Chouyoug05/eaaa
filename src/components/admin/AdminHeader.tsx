import React from "react";
import { Bell, Search, Menu } from "lucide-react";

const AdminHeader = () => {
  return (
    <header className="h-16 border-b bg-background flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center md:hidden">
        <button className="p-2 -ml-2 mr-2 text-muted-foreground hover:text-foreground">
          <Menu className="h-6 w-6" />
        </button>
        <span className="font-bold text-xl text-gradient">EAAA</span>
      </div>

      <div className="hidden md:flex items-center bg-muted/50 rounded-full px-4 border focus-within:ring-2 ring-primary/20 focus-within:border-primary transition-all">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Rechercher..." 
          className="bg-transparent border-none outline-none py-2 px-3 text-sm w-64"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive border border-background"></span>
        </button>
        
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
            <span className="text-sm font-semibold text-primary">AD</span>
          </div>
          <div className="hidden md:block 텍 text-sm">
            <p className="font-medium leading-none mb-1">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@eaaa.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
