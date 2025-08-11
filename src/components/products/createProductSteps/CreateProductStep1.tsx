import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CreateProductStep1Props {
  formData: IProductForm;
  updateFormData: (
    field: keyof IProductDetails,
    value: string | File[]
  ) => void;
}

const CreateProductStep1 = ({
  formData,
  updateFormData,
}: CreateProductStep1Props) => {
  return (
    <div className="space-y-8">
      <div className="grid gap-8">
        <div>
          <Label htmlFor="brandId" className="text-[1.4rem] font-medium">
            Brand ID *
          </Label>
          <Input
            id="brandId"
            placeholder="Enter Associated brand's unique identifier"
            value={formData.brandId}
            onChange={(e) => updateFormData("brand_id", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="corporate_profile_id" className="text-[1.4rem] font-medium">
            Company Profile ID *
          </Label>
          <Input
            id="corporate_profile_id"
            placeholder="Enter Corporate profile that owns this product"
            value={formData.corporateProfileId}
            onChange={(e) =>
              updateFormData("corporate_profile_id", e.target.value)
            }
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="category_id" className="text-[1.4rem] font-medium">
            Category ID *
          </Label>
          <Input
            id="category_id"
            placeholder="Enter ID of the product's main category"
            value={formData.categoryId}
            onChange={(e) => updateFormData("category_id", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="sub_category_id" className="text-[1.4rem] font-medium">
            Subcategory ID
          </Label>
          <Input
            id="sub_category_id"
            placeholder="Enter ID of the product's subcategory"
            value={formData.subCategoryId}
            onChange={(e) => updateFormData("sub_category_id", e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProductStep1;
