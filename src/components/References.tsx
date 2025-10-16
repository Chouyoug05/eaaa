const references = [
  { name: "ADDAX PETROLEUM", domain: "addaxpetroleum.com", local: "/logos/addax-petroleum.png" },
  { name: "ENI", domain: "eni.com", local: "/logos/eni.png" },
  { name: "ASSALA ENERGY", domain: "assalaenergy.com", local: "/logos/assala-energy.png" },
  { name: "SCHLUMBERGER", domain: "slb.com", local: "/logos/schlumberger.png" },
  { name: "BOLLORÉ LOGISTICS", domain: "bollore-logistics.com", local: "/logos/bollore-logistics.png" },
  { name: "PERENCO", domain: "perenco.com", local: "/logos/perenco.png" },
  { name: "TOTAL ENERGIES", domain: "totalenergies.com", local: "/logos/total-energies.png" },
  { name: "MAUREL & PROM", domain: "maureletprom.com", local: "/logos/maurel-prom.png" },
];

const getLogoUrl = (domain: string) => `https://logo.clearbit.com/${domain}?size=256`;

const References = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nos Références
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La confiance des leaders de l'industrie pétrolière et des services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {references.map((ref, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-lg shadow-card hover-lift"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <picture>
                {/* Essaye d'abord le logo local */}
                <source srcSet={ref.local} />
                {/* Fallback distant via Clearbit si le local manque */}
                <img
                  src={getLogoUrl(ref.domain)}
                  alt={ref.name}
                  loading="lazy"
                  className="max-h-12 md:max-h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-200 opacity-90 hover:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </picture>
              {/* Fallback texte si logo indisponible */}
              <span className="sr-only">{ref.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
