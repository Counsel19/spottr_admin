import IndustriesTable from "@/components/industries/IndustriesTable";
import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import routeConstants from "@/constants/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IndustriesHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="Industry Management"
        subTitle="Manage the industries here"
        addButtonText="Create New Industry"
        addButtonFunc={() => navigate(routeConstants.addIndustries)}
      />

      <PageHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <IndustriesTable searchTerm={searchTerm} />
    </div>
  );
};

export default IndustriesHome;
