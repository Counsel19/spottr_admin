interface ProductItemRequestProp {
  item: IProductRequest;
}
const ProductItemRequest = ({ item }: ProductItemRequestProp) => {
  return (
    <div key={item.id} className="flex items-start space-x-3">
      <div className="flex-shrink-0">
        <img
          src={item.product_image_one}
          alt={item.name}
          className="w-[5.229rem] h-[5.4rem] rounded-lg object-cover"
        />
      </div>
      <div className="flex-1 min-w-0 space-y-2">
        <h3 className="text-[1.2rem] leading-[1.2rem] font-semibold text-gray-900 truncate">
          {item.name}
        </h3>

        <p className="text-[1.05rem] leading-[1rem] text-gray-600">
          {item.category.name}
        </p>
        <p className="text-[1rem] leading-[1rem] text-blue-600 font-medium">
          {item.category.name}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-[1rem] text-gray-400">
            {item.brand.name}
          </p>
          <span className="text-sm bg-[#DDE6F6] rounded-lg p-2 font-bold text-gray-900">
            {item.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItemRequest;
