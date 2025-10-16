import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { FileText } from "lucide-react";

interface QuoteModalProps {
  children: React.ReactNode;
  serviceName?: string;
}

const QuoteModal = ({ children, serviceName }: QuoteModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <FileText className="h-6 w-6 text-primary" />
            Demander un devis
          </DialogTitle>
          <DialogDescription>
            {serviceName 
              ? `Obtenez un devis personnalisé pour notre service ${serviceName}`
              : "Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement avec un devis adapté à vos besoins"
            }
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ContactForm 
            serviceName={serviceName}
            onSuccess={() => setOpen(false)}
            showHeader={false}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
