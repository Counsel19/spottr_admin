import { cn } from "@/lib/utils";

interface Props {
  currentStep: number;
  totalSteps: number;
}

const ProductStepIndicator: React.FC<Props> = ({ currentStep, totalSteps }) => (
  <div className="flex items-center justify-center mb-6">
    <div className="flex items-center space-x-2">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center space-x-2">
          <div
            className={cn(
              "w-[1.4rem] h-[1.4rem] rounded-full flex items-center justify-center text-[1.4rem] font-medium",
              step < currentStep
                ? "bg-step-complete text-white"
                : step === currentStep
                ? "bg-step-current text-white"
                : "bg-step-pending text-muted-foreground"
            )}
          >
            {step < currentStep ? "✓" : step}
          </div>
          {step < totalSteps && <div className="w-12 h-0.5 bg-step-pending" />}
        </div>
      ))}
    </div>
  </div>
);

export default ProductStepIndicator;
