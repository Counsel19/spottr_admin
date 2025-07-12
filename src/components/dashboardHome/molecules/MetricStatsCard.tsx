import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface MetricStatsCardProps {
  title: string;
  value: string | number;
  actionText: string;
  progressValue: number; // 0-100
  newItemsText: string;
  onActionClick?: () => void;
  className?: string;
}

const MetricStatsCard: React.FC<MetricStatsCardProps> = ({
  title,
  value,
  progressValue,
  newItemsText,
  actionText,
  onActionClick,
  className = "",
}) => {
  const circumference = 2 * Math.PI * 45; // radius of 45
  const strokeDashoffset =
    circumference - (progressValue / 100) * circumference;

  return (
    <Card
      className={`w-full max-w-sm bg-white border-0 shadow-xs hover:shadow-sm transition-shadow duration-300 ${className}`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-center text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Circular Progress with Value */}
        <div className="flex items-center justify-center relative">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#f1f5f9"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#3b82f6"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-in-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-[#2cbbf3]">{value}</span>
          </div>
        </div>

        {/* New accounts text with action */}
        <div
          className={`flex items-center justify-between ${
            onActionClick
              ? "cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
              : ""
          }`}
          onClick={onActionClick}
        >
          <span className="text-success font-medium">{newItemsText}</span>
          <span className="text font-medium">{ actionText}</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricStatsCard;
