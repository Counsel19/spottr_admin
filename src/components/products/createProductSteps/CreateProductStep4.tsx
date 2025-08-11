// import UploadImgArea from "@/components/shared/molecules/UploadArea";
import { Label } from "@/components/ui/label";


// interface CreateProductStep4Props {
//   formData: IProductForm;
//   updateFormData: (
//     field: keyof IProductDetails,
//     value: string | File[]
//   ) => void;
// }

const CreateProductStep4 = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-8">
        <div >
          <Label htmlFor="attribute" className="text-[1.4rem] font-medium mb-4">
            Product Image 1
          </Label>
          {/* <UploadImgArea /> */}
        </div>
        <div>
          <Label htmlFor="attribute" className="text-[1.4rem] font-medium mb-4">
            Product Image 2
          </Label>
          {/* <UploadImgArea /> */}
        </div>
        <div>
          <Label htmlFor="attribute" className="text-[1.4rem] font-medium mb-4">
            Product Image 3
          </Label>
          {/* <UploadImgArea /> */}
        </div>
        <div>
          <Label htmlFor="attribute" className="text-[1.4rem] font-medium mb-4">
            Product Image 4
          </Label>
          {/* <UploadImgArea /> */}
        </div>

        
       
      </div>
    </div>
  );
};

export default CreateProductStep4;
