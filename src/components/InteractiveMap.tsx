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
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
        {/* Decorative elements */}
        <div className="absolute top-6 left-6 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-green-500 rounded-full animate-ping shadow-md"></div>
        <div className="absolute bottom-8 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute bottom-16 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping shadow-md"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-15">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-300"/>
          </svg>
        </div>

        {/* Subtle waves */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-100/30 to-transparent"></div>
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
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-xl group-hover:scale-125 transition-all duration-300 border-2 border-white">
              <Plane className="h-6 w-6 text-white" />
            </div>
            
            {/* Enhanced pulse effect */}
            <div className="absolute inset-0 w-12 h-12 bg-primary/30 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-12 h-12 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Airport Label */}
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-slate-200">
              <span className="text-sm font-bold text-slate-800">{airport.city}</span>
              <div className="text-xs text-slate-600 mt-1">{airport.code}</div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Connection Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
        <line
          x1="20%"
          y1="60%"
          x2="80%"
          y2="70%"
          stroke="url(#connectionGradient)"
          strokeWidth="3"
          strokeDasharray="8,4"
          className="animate-pulse"
        />
        {/* Animated dots along the line */}
        <circle cx="35%" cy="63%" r="2" fill="#3b82f6" opacity="0.6" className="animate-ping">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="65%" cy="66.5%" r="2" fill="#8b5cf6" opacity="0.6" className="animate-ping">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" begin="1s"/>
        </circle>
      </svg>

      {/* Enhanced Selected Airport Info */}
      {selectedAirport && (
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-slate-200 animate-in slide-in-from-bottom-4">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{selectedAirport.name}</h3>
              <p className="text-slate-600 font-medium">{selectedAirport.city} ({selectedAirport.code})</p>
            </div>
            <button
              onClick={() => setSelectedAirport(null)}
              className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 transition-all duration-200"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <span className="text-sm font-semibold text-slate-800">{selectedAirport.hours}</span>
                  <div className="text-xs text-slate-600">Disponibilité</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <Phone className="h-5 w-5 text-green-600" />
                <div>
                  <span className="text-sm font-semibold text-slate-800">{selectedAirport.phone}</span>
                  <div className="text-xs text-slate-600">Contact direct</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-slate-800 mb-3">Services disponibles :</h4>
              <div className="flex flex-wrap gap-2">
                {selectedAirport.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/20 text-primary text-sm font-medium rounded-full border border-primary/20"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Map Legend */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-lg rounded-xl p-4 shadow-xl border border-slate-200">
        <h4 className="text-sm font-bold text-slate-800 mb-3">Légende</h4>
        <div className="space-y-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-gradient-to-br from-primary to-primary/80 rounded-full border border-white shadow-md"></div>
            <span className="font-medium text-slate-700">Aéroport EAAA</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <span className="font-medium text-slate-700">Connexion</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-slate-700">Activité</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
