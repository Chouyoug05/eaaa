import { useState } from "react";

interface Reference {
  name: string;
  domain: string;
  localLogo?: string;
}

const references: Reference[] = [
  { name: "ADDAX PETROLEUM", domain: "addaxpetroleum.com" },
  { name: "ENI", domain: "eni.com" },
  { name: "ASSALA ENERGY", domain: "assalaenergy.com" },
  { name: "SCHLUMBERGER", domain: "slb.com" },
  { name: "BOLLORÉ LOGISTICS", domain: "bollore-logistics.com" },
  { name: "PERENCO", domain: "perenco.com" },
  { name: "TOTAL ENERGIES", domain: "totalenergies.com" },
  { name: "MAUREL & PROM", domain: "maureletprom.com" },
];

const References = () => {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleImageError = (name: string) => {
    setImageErrors(prev => ({ ...prev, [name]: true }));
  };

  const getLogoUrl = (domain: string) => `https://logo.clearbit.com/${domain}?size=128`;

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
              className="flex items-center justify-center p-6 bg-card rounded-lg shadow-card hover-lift group min-h-[120px]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {!imageErrors[ref.name] ? (
                <img
                  src={getLogoUrl(ref.domain)}
                  alt={`${ref.name} logo`}
                  className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={() => handleImageError(ref.name)}
                  onLoad={() => console.log(`Logo loaded: ${ref.name}`)}
                />
              ) : (
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-primary font-bold text-lg">
                      {ref.name.charAt(0)}
                    </span>
                  </div>
                  <p className="font-semibold text-xs text-foreground leading-tight">
                    {ref.name}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;