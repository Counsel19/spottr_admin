import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { CorporateUserTable } from "@/components/userManagement/CorporateUserTable";
import routeConstants from "@/constants/routes";
import type { RootState } from "@/lib/redux/store";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CorporateManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const { selectedSubLinks } = useSelector((store: RootState) => store.routing);
  const navigate = useNavigate()
  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="User Management"
        subTitle="Manage your super admins, corporate, users etc."
        addButtonText="Create Corporate Account"
        addButtonFunc={() => navigate(routeConstants.addCorporateUser)}
      />

      <PageHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} tabList={selectedSubLinks} />

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
