import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import type { RootState } from "@/lib/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import routeConstants from "@/constants/routes";
import SubscriptionPlanTable from "@/components/subscription/SubscriptionPlanTable";


const SubscriptionPlanHome = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const { selectedSubLinks } = useSelector((store: RootState) => store.routing);

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="Subscription"
        subTitle="Manage your  subscription plan here"
         addButtonText="Create New Plan"
        addButtonFunc={() => navigate(routeConstants.addSubscriptionPlan)}
      />
      <PageHeader
        tabList={selectedSubLinks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <SubscriptionPlanTable searchTerm={searchTerm} />
    </div>
  );
};

export default SubscriptionPlanHome;
