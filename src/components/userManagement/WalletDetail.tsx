import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

interface WalletDetailProps {
  fiatWallet: string;
  cryptoWallet: string;
}

const WalletDetail = ({ cryptoWallet, fiatWallet }: WalletDetailProps) => {
  const [isShowDetails, setISShowDetails] = useState(false);
  return (
    <div className="bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[1.8rem] font-bold ">Wallet</h2>
        <Button
          onClick={() => setISShowDetails(!isShowDetails)}
          variant={"ghost"}
          type="button"
          className=" hover:text-primary"
        >
          {isShowDetails ? (
            <EyeOff className="size-8" />
          ) : (
            <Eye className="size-8" />
          )}
        </Button>
      </div>
      {isShowDetails ? (
        <div className="grid grid-cols-2 gap-6">
          <div className="shadow-sm rounded-lg p-[2rem]">
            <div className="flex items-center gap-2 mb-[2rem]">
              <span className="text-[1.4rem] text-muted font-semibold">
                Fiat Wallet Balance
              </span>
              <div className="w-2 h-2 bg-corporate-green rounded-full"></div>
            </div>
            <p className="text-[1.8rem] font-semibold text-primary">
              {fiatWallet}
            </p>
          </div>

          <div className="shadow-sm rounded-lg  p-[2rem]">
            <div className="flex mb-[2rem] items-center gap-2">
              <span className="text-[1.4rem] text-muted font-semibold">
                Crypto Wallet Balance
              </span>
              <div className="w-2 h-2 bg-corporate-orange rounded-full"></div>
            </div>
            <p className="text-[1.8rem] font-semibold text-primary">
              {cryptoWallet}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WalletDetail;
