import { formatToNaira } from "@/lib/utils";

interface ProductInfoProp {
  selectedProduct: IProductDetails;
}

const ProductInfo = ({ selectedProduct }: ProductInfoProp) => {
  return (
    <div>
      <div className="text-base space-y-10">
        <div className="flex justify-between items-center ">
          <h5 className="font-medium text-2xl max-w-[60%]">
            {selectedProduct.name}
          </h5>

          <h6 className="text-[1.8rem] text-primary font-bold">
            {formatToNaira.format(Number(selectedProduct.price))}
          </h6>
        </div>

        <div className="space-y-6">
          <h5 className="text-[1.8rem]">Product Description</h5>
          <p className=" font-thin text-[1.6rem] text-gray-600 w-full  ">
            {selectedProduct.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
