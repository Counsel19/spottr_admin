import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface CreateProductStep3Props {
  formData: IProductForm;
  updateFormData: (
    field: keyof IProductDetails,
    value: string | File[]
  ) => void;
}

const CreateProductStep3 = ({
  formData,
  updateFormData,
}: CreateProductStep3Props) => {
  return (
    <div className="space-y-8">
      <div className="grid gap-8">
        <div>
          <Label htmlFor="attribute" className="text-[1.4rem] font-medium">
            Attributes
          </Label>
          <Input
            id="attribute"
            placeholder="Enter Associated brand's unique identifier"
            value={formData.attribute}
            onChange={(e) => updateFormData("attribute", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="variants" className="text-[1.4rem] font-medium">
            Variants
          </Label>
          <Textarea
            id="variants"
            placeholder="Enter Corporate profile that owns this product"
            value={formData.variants}
            onChange={(e) => updateFormData("variants", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="tags" className="text-[1.4rem] font-medium">
            Tags
          </Label>
          <Input
            id="tags"
            placeholder="Enter ID of the product's main category"
            value={formData.tags}
            onChange={(e) => updateFormData("category_id", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="is_available" className="text-[1.4rem] font-medium">
            Is Avialable
          </Label>
          <Input
            id="is_available"
            placeholder="Enter ID of the product's subcategory"
            value={formData.isAvailable.toString()}
            onChange={(e) => updateFormData("is_available", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label
            htmlFor="price"
            className="text-[1.4rem] font-medium"
          >
            Price
          </Label>
          <Input
            id="price"
            placeholder="Enter ID of the product's subcategory"
            value={formData.price}
            onChange={(e) =>
              updateFormData("price", e.target.value)
            }
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProductStep3;
