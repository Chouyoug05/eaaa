import React from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import DashboardStats from "@/components/admin/DashboardStats";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Jan', users: 400, revenue: 2400 },
  { name: 'Fév', users: 300, revenue: 1398 },
  { name: 'Mar', users: 200, revenue: 9800 },
  { name: 'Avr', users: 278, revenue: 3908 },
  { name: 'Mai', users: 189, revenue: 4800 },
  { name: 'Juin', users: 239, revenue: 3800 },
  { name: 'Juil', users: 349, revenue: 4300 },
];

const recentActivity = [
  { id: 1, user: "Jean Dupont", action: "Réservation Transport", time: "Il y a 2h", status: "En attente" },
  { id: 2, user: "Marie Martin", action: "Assistance Aéroport", time: "Il y a 4h", status: "Confirmé" },
  { id: 3, user: "Ali Yilmaz", action: "Demarche Administrative", time: "Il y a 5h", status: "En cours" },
  { id: 4, user: "Sophie Dubois", action: "Hébergement", time: "Il y a 1 jour", status: "Terminé" },
];

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-muted/40">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Aperçu interactif</h1>
              <p className="text-muted-foreground mt-1">Gérez vos services et utilisateurs EAAA.</p>
            </div>
            
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors shadow-sm">
              Télécharger Rapport
            </button>
          </div>

          <DashboardStats />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
             {/* Chart Section */}
            <div className="bg-card rounded-xl p-6 border shadow-sm lg:col-span-2">
              <h3 className="text-lg font-semibold mb-6">Croissance Utilisateurs & Revenus</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '8px', border: '1px solid hsl(var(--border))' }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Area type="monotone" dataKey="users" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUsers)" />
                    <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Activity List */}
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Activité Récente</h3>
                <button className="text-sm text-primary hover:underline font-medium">Voir tout</button>
              </div>
              
              <div className="space-y-6">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium mr-4 shrink-0">
                      {activity.user.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{activity.user}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{activity.action}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                      <span className={`mt-1 inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                        activity.status === 'En attente' ? 'bg-orange-100 text-orange-700' :
                        activity.status === 'Confirmé' ? 'bg-blue-100 text-blue-700' :
                        activity.status === 'Terminé' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
