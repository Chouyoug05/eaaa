import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import AirportAssistance from "./pages/AirportAssistance";
import AdministrativeServices from "./pages/AdministrativeServices";
import Transport from "./pages/Transport";
import Accommodation from "./pages/Accommodation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WhatsAppChatbot from "@/components/WhatsAppChatbot";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location.pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/assistance-aeroportuaire" element={<AirportAssistance />} />
          <Route path="/demarches-administratives" element={<AdministrativeServices />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/hebergement" element={<Accommodation />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppChatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
