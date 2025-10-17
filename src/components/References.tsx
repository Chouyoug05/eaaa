import { useState } from "react";

interface Reference {
  name: string;
  domain: string;
  localLogo?: string;
}

const references: Reference[] = [
  { name: "ADDAX PETROLEUM", domain: "addaxpetroleum.com", localLogo: "/logos/addax-petroleum.png" },
  { name: "ENI", domain: "eni.com", localLogo: "/logos/eni.png" },
  { name: "ASSALA ENERGY", domain: "assalaenergy.com", localLogo: "/logos/assala-energy.png" },
  { name: "SCHLUMBERGER", domain: "slb.com", localLogo: "/logos/schlumberger.png" },
  { name: "BOLLORÉ LOGISTICS", domain: "bollore-logistics.com", localLogo: "/logos/bollore-logistics.png" },
  { name: "PERENCO", domain: "perenco.com", localLogo: "/logos/perenco.png" },
  { name: "TOTAL ENERGIES", domain: "totalenergies.com", localLogo: "/logos/total-energies.png" },
  { name: "MAUREL & PROM", domain: "maureletprom.com", localLogo: "/logos/maurel-prom.png" },
];

const References = () => {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleImageError = (name: string) => {
    setImageErrors(prev => ({ ...prev, [name]: true }));
  };

  const getLogoUrl = (domain: string) => `https://logo.clearbit.com/${domain}?size=256`;

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
              className="flex items-center justify-center p-6 bg-card rounded-lg shadow-card hover-lift group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {!imageErrors[ref.name] ? (
                <img
                  src={ref.localLogo || getLogoUrl(ref.domain)}
                  alt={`${ref.name} logo`}
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={() => handleImageError(ref.name)}
                />
              ) : (
                <div className="text-center">
                  <p className="font-semibold text-sm md:text-base text-foreground">
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