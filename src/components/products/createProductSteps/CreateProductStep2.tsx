import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface CreateProductStep2Props {
  formData: IProductForm;
  updateFormData: (
    field: keyof IProductDetails,
    value: string | File[]
  ) => void;
}

const CreateProductStep2 = ({
  formData,
  updateFormData,
}: CreateProductStep2Props) => {
  return (
    <div className="space-y-8">
      <div className="grid gap-8">
        <div>
          <Label htmlFor="brandId" className="text-[1.4rem] font-medium">
            Name
          </Label>
          <Input
            id="brandId"
            placeholder="Enter Associated brand's unique identifier"
            value={formData.name}
            onChange={(e) => updateFormData("name", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label
            htmlFor="description"
            className="text-[1.4rem] font-medium"
          >
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="Enter Corporate profile that owns this product"
            value={formData.description}
            onChange={(e) =>
              updateFormData("description", e.target.value)
            }
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="weight" className="text-[1.4rem] font-medium">
            Weight
          </Label>
          <Input
            id="weight"
            placeholder="Enter ID of the product's main category"
            value={formData.weight}
            onChange={(e) => updateFormData("category_id", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label
            htmlFor="dimension"
            className="text-[1.4rem] font-medium"
          >
            Dimension
          </Label>
          <Input
            id="dimension"
            placeholder="Enter ID of the product's subcategory"
            value={formData.dimension}
            onChange={(e) => updateFormData("dimension", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label
            htmlFor="additional_specification"
            className="text-[1.4rem] font-medium"
          >
            Additional Specification
          </Label>
          <Input
            id="additional_specification"
            placeholder="Enter ID of the product's subcategory"
            value={formData.additional_specification}
            onChange={(e) => updateFormData("additional_specification", e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProductStep2;
