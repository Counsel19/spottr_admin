import EphasisStatsCard from "./molecules/EphasisStatsCard";

const emphasisData = [
  {
    title: "Vendors",
    metricText: "new vendor accounts",
    metricValue: "45",
    value: "20k",
  },
  {
    title: "Referers",
    metricText: "CT disbursed",
    metricValue: "20m",
    value: "10k",
  },
  {
    title: "Tasks",
    metricText: "all time takers",
    metricValue: "45k",
    value: "500",
  },
];

const EmphasisStatsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {emphasisData.map((item, index) => (
        <EphasisStatsCard
          key={index}
          metricText={item.metricText}
          metricValue={item.metricValue}
          title={item.title}
          value={item.value}
        />
      ))}
    </div>
  );
};

export default EmphasisStatsSection;
