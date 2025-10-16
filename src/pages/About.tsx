import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Users, Shield, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              À propos de EAAA
            </h1>
            <p className="text-xl text-white/90">
              Plus de 15 ans d'excellence au service de la logistique au Gabon
            </p>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">EAAA (Entreprise Accueil Assistance Approvisionnement)</strong> a été créée en 2009 par M. François Éric CARDOT avec une vision claire : devenir le partenaire logistique de référence pour les entreprises opérant au Gabon.
                </p>
                <p>
                  Depuis nos débuts, nous avons construit notre réputation sur trois piliers fondamentaux : la disponibilité totale, la qualité de service irréprochable, et la maîtrise complète de la chaîne logistique des expatriés.
                </p>
                <p>
                  Aujourd'hui, avec nos deux bases opérationnelles à Libreville et Port-Gentil, notre flotte de 70 véhicules premium, et notre équipe de 53 collaborateurs qualifiés, nous sommes fiers de servir les plus grandes entreprises pétrolières et diplomatiques présentes au Gabon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Excellence",
                description: "Nous visons l'excellence dans chaque service fourni, sans compromis sur la qualité.",
              },
              {
                icon: Users,
                title: "Engagement",
                description: "Notre équipe formée et expérimentée s'engage pleinement pour votre satisfaction.",
              },
              {
                icon: Shield,
                title: "Sécurité",
                description: "La sécurité HSSE est au cœur de toutes nos opérations et procédures.",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description: "Nous investissons dans la digitalisation pour optimiser votre expérience client.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover-lift shadow-card text-center fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Notre Équipe</h2>
              <p className="text-xl text-muted-foreground">
                53 collaborateurs qualifiés dédiés à votre succès
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                L'équipe EAAA est composée de professionnels expérimentés et formés aux standards internationaux. Chaque membre de notre personnel est sélectionné pour sa compétence, son professionnalisme et son engagement envers l'excellence du service.
              </p>
              <p>
                Nos agents d'assistance aéroportuaire, nos chauffeurs, nos coordinateurs administratifs et notre équipe de support travaillent en synergie pour garantir une expérience fluide et sans stress à nos clients.
              </p>
              <p>
                La formation continue de notre personnel et notre investissement dans les outils digitaux nous permettent d'offrir un service toujours plus performant et adapté aux exigences de nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Notre Vision
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Devenir le leader régional de l'assistance logistique en étendant nos services à l'ensemble de la zone CEMAC et au-delà, tout en maintenant notre engagement indéfectible envers la qualité, la sécurité et l'innovation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
