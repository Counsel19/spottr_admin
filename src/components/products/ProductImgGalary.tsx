import { cn } from "@/lib/utils";

import {  useState } from "react";

interface ProductImgGalaryProps {
  images: string[];
}
const ProductImgGalary = ({ images }: ProductImgGalaryProps) => {
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <div className="space-y-6">
      <div className=" w-full lg:w-[26.3rem] h-[20rem] lg:h-[26.3rem]">
        <img
          className="w-full h-full  rounded-[1.5rem] object-cover object-top"
          src={images[selectedImg].trim()}
          alt={images[selectedImg]}
        />
      </div>
      <div className="flex gap-4 h-[8rem] w-fit">
        {images.map(
          (image, index) =>
            image && (
              <button key={index} onClick={() => setSelectedImg(index)}>
                <img
                  className={cn(
                    "h-[8rem] w-[8rem] object-cover border border-[#F2DB6B] rounded-md overflow-hidden b-[0px_1px_0px_1px_#00470C26]",
                    selectedImg === index && "border-2 border-primary "
                  )}
                  src={image}
                  alt={image}
                />
              </button>
            )
        )}
      </div>
    </div>
  );
};

export default ProductImgGalary;
