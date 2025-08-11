import BrandTable from "@/components/brands/BrandTable";
import PageHeader from "@/components/shared/PageHeader";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import routeConstants from "@/constants/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BrandHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        title="Brand Management"
        subTitle="Manage your list of brands"
        addButtonText="Create New Brands"
        addButtonFunc={() => navigate(routeConstants.addBrands)}
      />
      <PageHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <BrandTable searchTerm={searchTerm} />
    </div>
  );
};

export default BrandHome;
