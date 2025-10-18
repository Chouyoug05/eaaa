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

const RealisticMapGabon = () => {
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);

  const airports: Airport[] = [
    {
      id: "libreville",
      name: "Aéroport International Léon M'ba",
      city: "Libreville",
      code: "LBV",
      position: { x: 18, y: 28 },
      services: ["Assistance VIP", "Formalités", "Transfert", "Bagages"],
      phone: "+241 07 37 29 96",
      hours: "24h/24 - 7j/7"
    },
    {
      id: "port-gentil",
      name: "Aéroport de Port-Gentil",
      city: "Port-Gentil",
      code: "POG",
      position: { x: 28, y: 78 },
      services: ["Accueil standard", "Formalités", "Transfert"],
      phone: "+241 03 46 78 81",
      hours: "24h/24 - 7j/7"
    }
  ];

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl">
      {/* Map Background with realistic Gabon shape */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-blue-100">
        {/* Realistic Gabon outline */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            width="320" 
            height="360" 
            viewBox="0 0 320 360" 
            className="opacity-30"
          >
            {/* More accurate Gabon shape */}
            <path
              d="M 60 40 
                 L 90 35 
                 L 130 30 
                 L 170 35 
                 L 210 40 
                 L 240 50 
                 L 260 70 
                 L 270 90 
                 L 275 110 
                 L 280 130 
                 L 285 150 
                 L 290 170 
                 L 295 190 
                 L 300 210 
                 L 305 230 
                 L 310 250 
                 L 315 270 
                 L 320 290 
                 L 315 310 
                 L 310 330 
                 L 300 340 
                 L 280 350 
                 L 260 345 
                 L 240 340 
                 L 220 335 
                 L 200 330 
                 L 180 325 
                 L 160 320 
                 L 140 315 
                 L 120 310 
                 L 100 305 
                 L 80 300 
                 L 60 295 
                 L 40 290 
                 L 20 285 
                 L 10 280 
                 L 5 260 
                 L 10 240 
                 L 15 220 
                 L 20 200 
                 L 25 180 
                 L 30 160 
                 L 35 140 
                 L 40 120 
                 L 45 100 
                 L 50 80 
                 L 55 60 
                 L 60 50 
                 Z"
              fill="currentColor"
              className="text-green-600"
              stroke="currentColor"
              strokeWidth="3"
              className="text-green-700"
            />
            
            {/* Major cities */}
            <circle cx="80" cy="100" r="3" fill="#ef4444" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="120" cy="280" r="3" fill="#ef4444" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" begin="1s"/>
            </circle>
            
            {/* Roads */}
            <path
              d="M 80 100 Q 100 150 120 200 Q 140 250 120 280"
              stroke="#f59e0b"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Ocean effects */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-200/50 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-200/50 to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute top-16 right-16 w-3 h-3 bg-green-500 rounded-full animate-ping shadow-md"></div>
        <div className="absolute bottom-12 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-ping shadow-md"></div>
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
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-all duration-300 border-3 border-white">
              <Plane className="h-7 w-7 text-white" />
            </div>
            
            {/* Enhanced pulse effects */}
            <div className="absolute inset-0 w-14 h-14 bg-primary/40 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-14 h-14 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-0 w-14 h-14 bg-primary/10 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            
            {/* Airport Label */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-slate-200">
              <span className="text-sm font-bold text-slate-800">{airport.city}</span>
              <div className="text-xs text-slate-600 mt-1">{airport.code}</div>
            </div>
          </div>
        </div>
      ))}

      {/* Connection Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5"/>
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5"/>
          </linearGradient>
        </defs>
        {/* Curved line following Gabon's shape */}
        <path
          d="M 18% 28% Q 23% 53% 28% 78%"
          stroke="url(#connectionGradient)"
          strokeWidth="5"
          strokeDasharray="12,6"
          fill="none"
          className="animate-pulse"
        />
        {/* Animated dots along the path */}
        <circle cx="20%" cy="40%" r="3" fill="#3b82f6" opacity="0.8" className="animate-ping">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="23%" cy="53%" r="3" fill="#8b5cf6" opacity="0.8" className="animate-ping">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        <circle cx="25%" cy="65%" r="3" fill="#06b6d4" opacity="0.8" className="animate-ping">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" begin="1s"/>
        </circle>
      </svg>

      {/* Gabon Title */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-lg rounded-xl px-4 py-2 shadow-xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800">GABON</h3>
        <p className="text-xs text-slate-600">République Gabonaise</p>
      </div>

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
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-slate-700">Villes</span>
          </div>
        </div>
      </div>

      {/* Selected Airport Info */}
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
    </div>
  );
};

export default RealisticMapGabon;
