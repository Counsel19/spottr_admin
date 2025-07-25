import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ProductStepIndicator from "./ProductStepIndicator";
import CreateProductStep1 from "./createProductSteps/CreateProductStep1";
import { Progress } from "../ui/progress";
import CreateProductStep2 from "./createProductSteps/CreateProductStep2";
import CreateProductStep3 from "./createProductSteps/CreateProductStep3";
import CreateProductStep4 from "./createProductSteps/CreateProductStep4";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: IProductForm) => void;
}

const ProductCreationModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState<IProductForm>({
    brand_id: "",
    corporate_profile_id: "",
    category_id: "",
    sub_category_id: "",
    name: "",

    description: "",
    weight: "",
    dimension: "",
    additional_specification: "",
    attribute: [],
    variants: [],
    tags: "",
    is_available: true,
    price: "",
    product_code: "",
    product_image_one: "",
    product_image_two: "",
    product_image_three: null,
    product_image_four: null,
    created_at: "",
    updated_at: "",
  });

  const updateFormData = (
    field: keyof IProductDetails,
    value: string | File[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return true;
      case 2:
        return true;
      case 3:
        return true;
      case 4:
        return true;

      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      toast.error("Missing Information");
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    if (!validateStep(currentStep)) {
      toast.error("Missing Information");
      return;
    }
    onSubmit(formData);
    toast.success("Product Created");
    setCurrentStep(1);
    onClose();
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CreateProductStep1
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 2:
        return (
          <CreateProductStep2
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <CreateProductStep3
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return <CreateProductStep4 />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[95vh] overflow-y-auto p-[3rem] rounded-[3rem] scrollbar-hide">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-2xl font-bold text-center">
            Create Product
          </DialogTitle>
          <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
        </DialogHeader>

        <ProductStepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
        />

        <div className="py-6">{renderCurrentStep()}</div>

        <div className="flex justify-between pt-6 border-t">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </Button>
          {currentStep === totalSteps ? (
            <Button onClick={handleSubmit}>Create Product</Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCreationModal;
