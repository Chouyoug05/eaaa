import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { MapPin, Plane, Clock, Phone } from "lucide-react";

interface Airport {
  id: string;
  name: string;
  city: string;
  code: string;
  position: { lat: number; lng: number };
  services: string[];
  phone: string;
  hours: string;
}

const GoogleMapGabon = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);

  const airports: Airport[] = [
    {
      id: "libreville",
      name: "Aéroport International Léon M'ba",
      city: "Libreville",
      code: "LBV",
      position: { lat: 0.4581, lng: 9.4123 },
      services: ["Assistance VIP", "Formalités", "Transfert", "Bagages"],
      phone: "+241 07 37 29 96",
      hours: "24h/24 - 7j/7"
    },
    {
      id: "port-gentil",
      name: "Aéroport de Port-Gentil",
      city: "Port-Gentil",
      code: "POG",
      position: { lat: -0.7117, lng: 8.7549 },
      services: ["Accueil standard", "Formalités", "Transfert"],
      phone: "+241 03 46 78 81",
      hours: "24h/24 - 7j/7"
    }
  ];

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", // Clé publique pour démo
        version: "weekly",
        libraries: ["places"]
      });

      try {
        const google = await loader.load();
        
        if (mapRef.current) {
          const mapInstance = new google.maps.Map(mapRef.current, {
            center: { lat: -0.5, lng: 9.5 }, // Centre du Gabon
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
              },
              {
                featureType: "land",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }]
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }]
              },
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
              }
            ],
            disableDefaultUI: false,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true
          });

          setMap(mapInstance);

          // Créer les marqueurs pour chaque aéroport
          const newMarkers = airports.map((airport) => {
            const marker = new google.maps.Marker({
              position: airport.position,
              map: mapInstance,
              title: airport.name,
              icon: {
                url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
                  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#3b82f6" stroke="#ffffff" stroke-width="3"/>
                    <path d="M12 20l6-6 4 4 6-6" stroke="#ffffff" stroke-width="2" fill="none"/>
                  </svg>
                `),
                scaledSize: new google.maps.Size(40, 40),
                anchor: new google.maps.Point(20, 20)
              },
              animation: google.maps.Animation.DROP
            });

            // InfoWindow pour chaque marqueur
            const infoWindow = new google.maps.InfoWindow({
              content: `
                <div style="padding: 10px; max-width: 250px;">
                  <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
                    ${airport.name}
                  </h3>
                  <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
                    ${airport.city} (${airport.code})
                  </p>
                  <div style="margin: 8px 0;">
                    <div style="display: flex; align-items: center; margin: 4px 0;">
                      <span style="color: #3b82f6; margin-right: 8px;">📞</span>
                      <span style="font-size: 12px; color: #374151;">${airport.phone}</span>
                    </div>
                    <div style="display: flex; align-items: center; margin: 4px 0;">
                      <span style="color: #3b82f6; margin-right: 8px;">🕒</span>
                      <span style="font-size: 12px; color: #374151;">${airport.hours}</span>
                    </div>
                  </div>
                  <div style="margin-top: 8px;">
                    <div style="font-size: 12px; color: #6b7280; margin-bottom: 4px;">Services :</div>
                    <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                      ${airport.services.map(service => 
                        `<span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 12px; font-size: 10px;">${service}</span>`
                      ).join('')}
                    </div>
                  </div>
                </div>
              `
            });

            marker.addListener("click", () => {
              setSelectedAirport(airport);
              infoWindow.open(mapInstance, marker);
            });

            return marker;
          });

          setMarkers(newMarkers);
        }
      } catch (error) {
        console.error("Erreur lors du chargement de Google Maps:", error);
      }
    };

    initMap();
  }, []);

  return (
    <div className="relative w-full h-96 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl">
      {/* Google Map Container */}
      <div ref={mapRef} className="w-full h-full" />
      
      {/* Overlay avec titre */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-lg rounded-xl px-4 py-2 shadow-xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800">GABON</h3>
        <p className="text-xs text-slate-600">République Gabonaise</p>
      </div>

      {/* Légende */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-lg rounded-xl p-4 shadow-xl border border-slate-200">
        <h4 className="text-sm font-bold text-slate-800 mb-3">Légende</h4>
        <div className="space-y-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-500 rounded-full border border-white shadow-md"></div>
            <span className="font-medium text-slate-700">Aéroport EAAA</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <span className="font-medium text-slate-700">Connexion</span>
          </div>
        </div>
      </div>

      {/* Panel d'informations détaillées */}
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

export default GoogleMapGabon;
