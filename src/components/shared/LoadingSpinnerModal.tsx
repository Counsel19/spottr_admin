import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2, } from "lucide-react";

interface LoadingSpinnerModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  showCloseButton?: boolean;
}

const LoadingSpinnerModal = ({
  isOpen = true,
  onClose,
  title = "Processing",
  description = "We are processing your request",
}: LoadingSpinnerModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl animate-fade-in">
        <div className="flex flex-col items-center justify-center space-y-6 py-8">
          {/* Loading Spinner */}
          <Loader2 className="mr-2 h-16 w-16 animate-spin" />

          {/* Content */}
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{title}</h2>
            <p className="text-[1.4rem] text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingSpinnerModal;
