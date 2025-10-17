import { useState } from "react";
import { MapPin, Plane, Clock, Phone } from "lucide-react";

interface Airport {
  id: string;
  name: string;
  city: string;
  code: string;
  position: { x: number; y: number };
  services: string[];
  phone: string;
  hours: string;
}

const InteractiveMap = () => {
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);

  const airports: Airport[] = [
    {
      id: "libreville",
      name: "Aéroport International Léon M'ba",
      city: "Libreville",
      code: "LBV",
      position: { x: 20, y: 60 },
      services: ["Assistance VIP", "Formalités", "Transfert", "Bagages"],
      phone: "+241 07 37 29 96",
      hours: "24h/24 - 7j/7"
    },
    {
      id: "port-gentil",
      name: "Aéroport de Port-Gentil",
      city: "Port-Gentil",
      code: "POG",
      position: { x: 80, y: 70 },
      services: ["Accueil standard", "Formalités", "Transfert"],
      phone: "+241 03 46 78 81",
      hours: "24h/24 - 7j/7"
    }
  ];

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl overflow-hidden border border-border">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-blue-100">
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-6 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-12 right-1/3 w-1 h-1 bg-green-300 rounded-full animate-ping"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-200"/>
          </svg>
        </div>
      </div>

      {/* Airport Markers */}
      {airports.map((airport) => (
        <div
          key={airport.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={{
            left: `${airport.position.x}%`,
            top: `${airport.position.y}%`,
          }}
          onClick={() => setSelectedAirport(airport)}
        >
          {/* Airport Marker */}
          <div className="relative">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
              <Plane className="h-4 w-4 text-primary-foreground" />
            </div>
            
            {/* Pulse effect */}
            <div className="absolute inset-0 w-8 h-8 bg-primary rounded-full animate-ping opacity-20"></div>
            
            {/* Airport Label */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-3 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              <span className="text-sm font-semibold text-foreground">{airport.city}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Connection Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line
          x1="20%"
          y1="60%"
          x2="80%"
          y2="70%"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5,5"
          className="text-primary/30"
        />
      </svg>

      {/* Selected Airport Info */}
      {selectedAirport && (
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-6 shadow-xl border border-border animate-in slide-in-from-bottom-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground">{selectedAirport.name}</h3>
              <p className="text-muted-foreground">{selectedAirport.city} ({selectedAirport.code})</p>
            </div>
            <button
              onClick={() => setSelectedAirport(null)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{selectedAirport.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{selectedAirport.phone}</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Services disponibles :</h4>
              <div className="flex flex-wrap gap-1">
                {selectedAirport.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h4 className="text-sm font-semibold text-foreground mb-2">Légende</h4>
        <div className="space-y-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span>Aéroport EAAA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-primary/30 border-dashed border-t border-primary/30"></div>
            <span>Connexion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
