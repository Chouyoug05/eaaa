import React from "react";
import { ArrowUpRight, ArrowDownRight, Users, Briefcase, Car, CreditCard } from "lucide-react";

const statCards = [
  {
    title: "Total Utilisateurs",
    value: "2,543",
    change: "+12.5%",
    isPositive: true,
    icon: Users,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Services Actifs",
    value: "142",
    change: "+5.2%",
    isPositive: true,
    icon: Briefcase,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Réservations Transport",
    value: "85",
    change: "-2.4%",
    isPositive: false,
    icon: Car,
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Chiffre d'Affaires",
    value: "12,450 €",
    change: "+18.2%",
    isPositive: true,
    icon: CreditCard,
    color: "bg-green-500/10 text-green-600",
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statCards.map((stat, index) => (
        <div key={index} className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
          </div>
          
          <div className="flex items-center text-sm">
            <span className={`flex items-center font-medium ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {stat.isPositive ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
              {stat.change}
            </span>
            <span className="text-muted-foreground ml-2">vs le mois dernier</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
