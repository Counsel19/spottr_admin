import { Wallet, CreditCard } from "lucide-react";
import { WalletCard } from "./WalletCard";
import { Card } from "../ui/card";

interface TransactionTypeCardProps {
  title: string;
}

const TransactionTypeCard = ({ title }: TransactionTypeCardProps) => {
  const walletData = [
    {
      id: "fiat-wallet",
      name: "Fiat Wallet",
      icon: Wallet,
      balance: "₦3,847,895",
      payment: "₦789,906",
      withdrawal: "₦56,784",
      iconColor: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      id: "cliq-token",
      name: "Cliq Token",
      icon: CreditCard,
      balance: "₦3,847,895",
      payment: "₦789,906",
      withdrawal: "₦56,784",
      iconColor: "text-red-500",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <Card className=" p-6  bg-white border-light-blue shadow-none  hover:shadow-xs transition-all duration-300 rounded-[0.6rem]">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-[1.6rem] font-semibold text-gray-800">{title}</h1>
          <button className="text-primary hover:text-blue-700 font-medium transition-colors">
            See all
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {walletData.map((wallet) => (
          <WalletCard key={wallet.id} {...wallet} />
        ))}
      </div>
    </Card>
  );
};

export default TransactionTypeCard;
