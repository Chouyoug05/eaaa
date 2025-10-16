import { MessageCircle } from "lucide-react";
import WhatsAppForm from "./WhatsAppForm";

interface WhatsAppBubbleProps {
  phone?: string; // E.164 sans +, ex: 24107372996
}

const WhatsAppBubble = ({ phone = "24107372996" }: WhatsAppBubbleProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-white text-foreground shadow-lg text-sm font-medium animate-pulse select-none">
          Besoin d'aide ?
        </span>
        <WhatsAppForm phone={phone}>
          <button
            aria-label="Discuter sur WhatsApp"
            className="relative inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
          >
            <MessageCircle className="h-7 w-7" />
            <span className="sr-only">Ouvrir WhatsApp</span>
          </button>
        </WhatsAppForm>
      </div>
    </div>
  );
};

export default WhatsAppBubble;


