import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { IndividualUserTable } from "@/components/userManagement/IndividualUserTable";
import type { RootState } from "@/lib/redux/store";

import { useState } from "react";
import { useSelector } from "react-redux";

const IndividualManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const { selectedSubLinks } = useSelector((store: RootState) => store.routing);

  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="User Management"
        subTitle="Manage your super admins, corporate, users etc."
        addButtonText="+ Create Corporate Account"
      />

      <PageHeader tabList={selectedSubLinks} />

      <IndividualUserTable
        searchTerm={searchTerm}
        setSelectedRole={setSelectedRole}
        setSearchTerm={setSearchTerm}
        selectedRole={selectedRole}
      />
    </div>
  );
};

export default IndividualManager;
