import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Promises from "@/components/Promises";
import HowItWorks from "@/components/HowItWorks";
import References from "@/components/References";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="bg-background">
        <Stats />
        <Promises />
        <HowItWorks />
        <References />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
