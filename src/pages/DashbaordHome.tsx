import BestPerformers from "@/components/dashboardHome/BestPerformers";
import EmphasisStatsSection from "@/components/dashboardHome/EmphasisStatsSection";
import QuickGeneralAnalytics from "@/components/dashboardHome/QuickGeneralAnalytics";
import { ChartAreaLegend } from "@/components/dashboardHome/RevenueChart2";
import TopStats from "@/components/dashboardHome/TopStats";
import TrendingSection from "@/components/dashboardHome/TrendingSection";
import SecondaryHeader from "@/components/shared/SecondaryHeader";

const DashbaordHome = () => {
  return (
    <div>
      <SecondaryHeader title="Dashbaord Overview" subTitle="Welcome Admin" />

      <div className="py-[2rem] grid  gap-4">
        <div className="grid  grid-cols-[3fr_2fr]  gap-4">
          <QuickGeneralAnalytics />
          <TopStats />
        </div>

        <div className="grid grid-cols-[2.5fr_1.5fr_2fr] grid-rows-[1fr_auto] gap-4 ">
          <ChartAreaLegend />
          <TrendingSection />
          <div className="row-span-2 ">
            <BestPerformers />
          </div>
          <div className="col-span-2">
            <EmphasisStatsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbaordHome;
