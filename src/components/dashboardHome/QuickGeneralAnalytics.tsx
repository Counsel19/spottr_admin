import QuickInfoStatsCard from "./molecules/QuickInfoStatsCard";
import { FaUser } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { RiRecordCircleFill } from "react-icons/ri";
import MetricStatsCard from "./molecules/MetricStatsCard";

const generalAnalyticsData = [
  {
    value: "1,234",
    icon: <FaUser size={20} />,
    title: "Total Users",
    analytics: {
      percentage: 3.56,
      isPositive: true,
    },
  },
  {
    value: "N222,300,000",
    icon: <IoAddCircle size={20} />,
    title: "Revenue",
    analytics: {
      percentage: 3.56,
      isPositive: true,
    },
  },
  {
    value: "34,890",
    icon: <RiRecordCircleFill size={20} />,
    title: "Sales",
    analytics: {
      percentage: 3.56,
      isPositive: false,
    },
  },
];

const OtherMetricsData = [
  {
    newItemsText: "45",
    progressValue: 75,
    title: "Corporate accounts",
    value: "1K",
    actionText: "new accounts",
    onActionClick: () => console.log("Action clicked"),
  },
  {
    newItemsText: "45",
    progressValue: 75,
    title: "Business accounts",
    value: "2K",
    actionText: "new accounts",
    onActionClick: () => console.log("Action clicked"),
  },
  {
    newItemsText: "45",
    progressValue: 75,
    title: "Check-ins",
    value: "11K",
    actionText: "all times",
    onActionClick: () => console.log("Action clicked"),
  },

  {
    newItemsText: "45",
    progressValue: 75,
    title: "Ads",
    value: "12K",
    actionText: "new ads running",
    onActionClick: () => console.log("Action clicked"),
  },
];

const QuickGeneralAnalytics = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {generalAnalyticsData.map((data, index) => (
          <QuickInfoStatsCard
            key={index}
            value={data.value}
            icon={data.icon}
            title={data.title}
            analytics={data.analytics}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {OtherMetricsData.map((data, index) => (
          <MetricStatsCard
            newItemsText={data.newItemsText}
            actionText={data.actionText}
            progressValue={data.progressValue}
            title={data.title}
            value={data.value}
            onActionClick={data.onActionClick}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickGeneralAnalytics;
