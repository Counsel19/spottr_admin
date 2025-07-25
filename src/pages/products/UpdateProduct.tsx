import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="Update Product Data"
        subTitle="Enter details to update selected product"
        addButtonFunc={() => {}}
        addButtonText="Save Product"
        removeButtonText="Cancel Action"
        removeButtonFunc={() => navigate(-1)}
      />

      
    </div>
  );
};

export default UpdateProduct;
