import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import SubscribersTable from "@/components/subscription/SubscribersTable";
import type { RootState } from "@/lib/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

const SubscribedUserHome = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { selectedSubLinks } = useSelector((store: RootState) => store.routing);
  const handleFilterChange = () => {};

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="Subscription"
        subTitle="Manage your list of subscribers here"
      />
      <PageHeader
        filters={userFilterFields}
        handleFilterChange={handleFilterChange}
        tabList={selectedSubLinks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <SubscribersTable searchTerm={searchTerm} />
    </div>
  );
};

export default SubscribedUserHome;

const userFilterFields: FilterField[] = [
  {
    key: "is_active",
    label: "Active Status",
    options: [
      { label: "Active", value: "true" },
      { label: "Inactive", value: "false" },
    ],
  },
];
