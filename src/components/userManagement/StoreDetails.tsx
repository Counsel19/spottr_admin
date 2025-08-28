import { cn } from "@/lib/utils";

interface StoreDetailsProps {
  storeName: string;
  storeEmail: string;
  storePhone: string;
  storeProfileImage: string | null;
  storeBgImage: string | null;
  storeDesc: string;
}

const StoreDetails = ({
  storeDesc,
  storeEmail,
  storeName,
  storePhone,
  storeProfileImage,
  storeBgImage,
}: StoreDetailsProps) => {
  return (
    <div className="w-full shadow-sm p-[2rem] rounded-[1rem]">
      <h2 className="text-[1.8rem] font-semibold  mb-[2rem]">Store Details</h2>

      <div
        className={cn(
          " relative flex items-center gap-[2rem] p-[2rem] text-white rounded-[1.5rem]",
          storeBgImage ? storeBgImage : "header-gradient "
        )}
      >
        <div className="abosulute top-0 left-0 right-0 bottom-0 bg-black" />
        <div className="w-[6rem] border h-[6rem] rounded-full overflow-hidden">
          <img
            src={storeProfileImage ? storeProfileImage : "/images/no-image-placeholder.png"}
            alt="Jumal Shariff"
            className="w-full h-full object-cover relative"
          />
        </div>
        <div className="text-[1.4rem] relative">
          <h3 className="font-bold">{storeName}</h3>
          <p className="">{storePhone}</p>
          <p className="">{storeEmail}</p>
        </div>
      </div>
      <div className="space-y-[1rem] mt-[2rem]">
        <h3 className="text-[1.6rem]">Store Description</h3>
        <p className="text-[1.4rem]  leading-relaxed">{storeDesc}</p>
      </div>
    </div>
  );
};

export default StoreDetails;
