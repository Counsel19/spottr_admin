import { type LucideIcon } from "lucide-react";

interface WalletCardProps {
  id: string;
  name: string;
  icon: LucideIcon;
  balance: string;
  payment: string;
  withdrawal: string;
  iconColor: string;
  bgColor: string;
}

export const WalletCard = ({
  name,
  icon: Icon,
  balance,
  payment,
  withdrawal,
  iconColor,
  bgColor,
}: WalletCardProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-[#AED5811A] p-6 rounded-[0.6rem]">
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-full ${bgColor}`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
          <h2 className="text-lg font-medium text-gray-700">{name}</h2>
        </div>

        <div className="text-3xl font-bold text-primary ">{balance}</div>
      </div>

      <div>
        <div className="flex justify-between items-baseline">
          <p className="text-[1.2rem] text-gray-500 font-medium">Payment</p>
          <p className="text-lg font-semibold text-green-600">{payment}</p>
        </div>
        <div className="flex justify-between items-baseline">
          <p className="text-[1.2rem] text-gray-500 font-medium">Withdrawal</p>
          <p className="text-lg font-semibold text-destructive">{withdrawal}</p>
        </div>
      </div>
    </div>
  );
};
