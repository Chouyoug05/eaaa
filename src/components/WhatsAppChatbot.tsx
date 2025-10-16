import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X, Send, Phone, Mail, User, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface WhatsAppChatbotProps {
  phone?: string;
}

const WhatsAppChatbot = ({ phone = "24107372996" }: WhatsAppChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, text: string, isUser: boolean, timestamp: Date}>>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getServiceContext = () => {
    const path = location.pathname;
    const routeToService: Record<string, string> = {
      "/": "services généraux",
      "/assistance-aeroportuaire": "assistance aéroportuaire",
      "/demarches-administratives": "démarches administratives",
      "/transport": "transport & liaisons",
      "/hebergement": "hébergement premium",
      "/contact": "contact",
      "/about": "à propos",
    };
    return routeToService[path] ?? "services généraux";
  };

  const botMessages = [
    {
      text: "👋 Bonjour ! Je suis l'assistant EAAA. Décrivez-moi votre besoin ou posez-moi votre question :",
      input: "message",
      placeholder: "Tapez votre question ou décrivez votre besoin..."
    },
    {
      text: "Parfait ! Pour vous recontacter, quel est votre nom ?",
      input: "name",
      placeholder: "Votre nom complet"
    },
    {
      text: `Merci ${userData.name} ! Dans quelle société travaillez-vous ? (optionnel)`,
      input: "company",
      placeholder: "Nom de votre société"
    },
    {
      text: "Super ! Quel est votre numéro de téléphone ? (optionnel)",
      input: "phone",
      placeholder: "+241 XX XX XX XX"
    },
    {
      text: "Et votre adresse email ? (optionnel)",
      input: "email",
      placeholder: "votre.email@exemple.com"
    },
    {
      text: `Quel service vous intéresse ? (${getServiceContext()})`,
      input: "service",
      placeholder: getServiceContext()
    },
    {
      text: "Excellent ! Je vais maintenant vous rediriger vers WhatsApp avec toutes ces informations. Un instant...",
      action: "redirect"
    }
  ];

  const handleOpen = () => {
    setIsOpen(true);
    setMessages([]);
    setCurrentStep(0);
    setUserData({ name: "", company: "", phone: "", email: "", service: "", message: "" });
    setInputValue("");
    
    // Démarrer la conversation
    setTimeout(() => {
      addBotMessage(botMessages[0].text);
    }, 300);
  };

  const addBotMessage = (text: string) => {
    const newMessage = {
      id: Date.now(),
      text,
      isUser: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage = {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionClick = (value: string) => {
    addUserMessage(value === "devis" ? "Demander un devis" : value === "question" ? "Poser une question" : "En savoir plus sur vos services");
    
    setTimeout(() => {
      setCurrentStep(1);
      addBotMessage(botMessages[1].text);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    
    // Mettre à jour les données utilisateur
    const currentBotMessage = botMessages[currentStep];
    if (currentBotMessage.input) {
      setUserData(prev => ({
        ...prev,
        [currentBotMessage.input!]: inputValue
      }));
    }

    setInputValue("");

    // Passer à l'étape suivante
    setTimeout(() => {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);

      if (nextStep < botMessages.length) {
        const nextMessage = botMessages[nextStep];
        
        if (nextMessage.action === "redirect") {
          addBotMessage(nextMessage.text);
          setTimeout(() => {
            redirectToWhatsApp();
          }, 2000);
        } else {
          addBotMessage(nextMessage.text);
        }
      }
    }, 1000);
  };

  const redirectToWhatsApp = () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const pageUrl = `${origin}${location.pathname}`;
    const serviceContext = getServiceContext();

    let message = `Bonjour,\n\n`;
    message += `Je suis ${userData.name}`;
    if (userData.company) message += ` de ${userData.company}`;
    if (userData.phone) message += `\nTéléphone: ${userData.phone}`;
    if (userData.email) message += `\nEmail: ${userData.email}`;
    message += `\n\nJe m'intéresse à: ${userData.service || serviceContext}`;
    message += `\n\n${userData.message}`;
    message += `\n\nPage consultée: ${pageUrl}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encoded}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Bouton de déclenchement */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-white text-foreground shadow-lg text-sm font-medium animate-pulse select-none">
            Besoin d'aide ?
          </span>
          <button
            onClick={handleOpen}
            className="relative inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
          >
            <MessageCircle className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50">
          <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col border">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-[#25D366] text-white rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">EAAA Assistant</h3>
                  <p className="text-xs text-white/80">En ligne maintenant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      message.isUser
                        ? 'bg-[#25D366] text-white rounded-br-md'
                        : 'bg-gray-100 text-gray-800 rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}


              <div ref={messagesEndRef} />
            </div>

            {/* Input - Toujours visible après le premier message */}
            {messages.length > 0 && currentStep < botMessages.length - 1 && (
              <form onSubmit={handleSubmit} className="p-3 border-t bg-gray-50">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={botMessages[currentStep]?.placeholder || "Tapez votre message..."}
                    className="flex-1 text-sm"
                    autoFocus
                  />
                  <Button type="submit" size="sm" className="bg-[#25D366] hover:bg-[#20c55a] px-3">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChatbot;
