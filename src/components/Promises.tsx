import { Clock, Award, Shield } from "lucide-react";

const promises = [
  {
    icon: Clock,
    title: "Disponibilité & réactivité 24h/24 – 7j/7",
    description: "Assistance continue, coordination fluide, intervention immédiate.",
    gradient: "from-primary to-primary-light",
  },
  {
    icon: Award,
    title: "Qualité de service premium",
    description: "Standards conformes aux exigences des majors pétrolières et diplomatiques.",
    gradient: "from-accent/80 to-accent",
  },
  {
    icon: Shield,
    title: "Maîtrise complète de la chaîne logistique",
    description: "De l'arrivée à l'intégration, tout est sous contrôle.",
    gradient: "from-secondary to-secondary/70",
  },
];

const Promises = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Nos 3 Promesses Différenciantes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            L'excellence au service de votre réussite opérationnelle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl bg-card border border-border hover-lift shadow-card overflow-hidden fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${promise.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 space-y-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${promise.gradient} p-0.5`}>
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <promise.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {promise.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {promise.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promises;
