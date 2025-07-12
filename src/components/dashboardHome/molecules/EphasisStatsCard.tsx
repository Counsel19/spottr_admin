
interface EphasisStatsCardProps {
  metricValue: string;
  metricText: string;
  value: string;
  title: string;
}

const EphasisStatsCard = ({
  metricText,
  metricValue,
  title,
  value,
}: EphasisStatsCardProps) => {
  return (
    <div className="bg-[#ECF7FF] font-semibold text-primary grid grid-cols-[3fr_1fr]">
      <div className=" p-4 space-y-4 ">
        <h5 className=" text-[1.75rem] ">{title}</h5>
        <div className={`flex items-center font-bold gap-4 `}>
          <span className="text-success ">{metricValue}</span>
          <span className="">{metricText}</span>
        </div>
      </div>
      <div className="bg-sky-blue text-[1.4rem] font-bold grid place-content-center">
        {value}
      </div>
    </div>
  );
};

export default EphasisStatsCard;
