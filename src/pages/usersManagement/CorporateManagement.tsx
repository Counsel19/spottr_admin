import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { CorporateUserTable } from "@/components/userManagement/CorporateUserTable";
import type { RootState } from "@/lib/redux/store";

import { useState } from "react";
import { useSelector } from "react-redux";

const CorporateManagement = () => {
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

      <CorporateUserTable
        searchTerm={searchTerm}
        setSelectedRole={setSelectedRole}
        setSearchTerm={setSearchTerm}
        selectedRole={selectedRole}
      />
    </div>
  );
};

export default CorporateManagement;
