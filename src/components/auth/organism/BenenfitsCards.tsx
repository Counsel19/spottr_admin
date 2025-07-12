import type React from "react";

interface BenenfitsCardsProps {
  heading: React.ReactNode;
  description: string;
}

const BenenfitsCards = ({ description, heading }: BenenfitsCardsProps) => (
  <div className="space-y-4">
    <h4 className="text-white  text-[1.8rem] font-bold">{heading}</h4>
    <p className="text-sky-blue text-[1.4rem] font-medium">{description}</p>
  </div>
);

export default BenenfitsCards;
