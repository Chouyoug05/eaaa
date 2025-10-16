import { MapPin, Clock, Car, Users, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: MapPin, value: 2, suffix: "", label: "Bases opérationnelles", subtext: "Libreville & Port-Gentil" },
  { icon: Clock, value: 15, suffix: "+", label: "Ans d'expérience", subtext: "Depuis 2009" },
  { icon: Car, value: 70, suffix: "", label: "Véhicules premium", subtext: "Flotte moderne" },
  { icon: Users, value: 53, suffix: "", label: "Collaborateurs qualifiés", subtext: "Équipe dédiée" },
  { icon: Globe, value: 24, suffix: "/7", label: "Disponibilité", subtext: "Service continu" },
];

const Counter = ({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}
      {suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-3 p-6 rounded-lg bg-card hover-lift shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <Counter end={stat.value} suffix={stat.suffix} />
              <div className="space-y-1">
                <p className="font-semibold text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
