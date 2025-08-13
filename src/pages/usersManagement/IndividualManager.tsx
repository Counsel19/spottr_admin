import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { IndividualUserTable } from "@/components/userManagement/IndividualUserTable";
import type { individualUserType } from "@/constants/enums";
import type { RootState } from "@/lib/redux/store";

import { useState } from "react";
import { useSelector } from "react-redux";

interface IndividualManagerProps {
  userType: individualUserType;
}

const IndividualManager = ({ userType }: IndividualManagerProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [isActiveFilter, setIsActiveFilter] = useState<boolean | undefined | null>(null);

  const { selectedSubLinks } = useSelector((store: RootState) => store.routing);

  const handleFilterChange = (key: string, value: string) => {
    if (key === "is_active") {
      setIsActiveFilter(value === "true" ? true : false);
    }
  };

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="User Management"
        subTitle="Manage your super admins, corporate, users etc."
      />

      <PageHeader
        filters={userFilterFields}
        handleFilterChange={handleFilterChange}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        tabList={selectedSubLinks}
      />

      <IndividualUserTable
        isActive={isActiveFilter}
        userType={userType}
        searchTerm={searchTerm}
        setSelectedRole={setSelectedRole}
        setSearchTerm={setSearchTerm}
        selectedRole={selectedRole}
      />
    </div>
  );
};

export default IndividualManager;

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
