import {
  useGetCorporateRepDetails,
  useGetSingleCorporateUser,
} from "@/lib/api/userManagement";
import { useParams } from "react-router-dom";
import LoadingSpinnerModal from "../shared/LoadingSpinnerModal";
import UserDetailsHeader from "./UserDetailsHeader";
import BasicDetails from "./BasicDetails";
import WalletDetail from "./WalletDetail";
import RepresentationDetails from "./RepresentationDetails";
import ContactInformation from "./ContactInformation";
import Description from "./Description";
import { useState } from "react";
import TabsBoxButton from "../shared/molecules/TabsBoxButton";
import ProductGrid from "../products/ProductGrid";

const SingleCorporateUser = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { userId } = useParams();

  const { data, isLoading } = useGetSingleCorporateUser(userId);
  const { data: repData, isLoading: repIsLoading } = useGetCorporateRepDetails(
    data?.profile?.id
  );

  return data && !isLoading && !repIsLoading ? (
    <div>
      <div className="mb-[2rem]">
        <TabsBoxButton
          activeindex={activeTab}
          tabs={[
            {
              name: "Detais",
              index: 0,
            },
            {
              name: "Products",
              index: 1,
            },
          ]}
          setActiveIndex={setActiveTab}
        />
      </div>

      {activeTab == 0 ? (
        <>
          <UserDetailsHeader
            image={data.pic || "/images/no-image-placeholder.png"}
            industryId={data.profile?.industry_id}
            createdAt={data.created_at}
            companyAddress={data.profile?.company_address || "N/A"}
            companyName={data.profile?.company_name || "N/A"}
            isActive={data.is_active || false}
            role={data.role || "N/A"}
          />
          <div className="mt-[4rem] p-[1rem] grid grid-cols-[3fr_2fr] gap-[2rem]">
            <div className="grid gap-[2rem]">
              <BasicDetails
                id={data.id}
                companyName={data.profile?.company_name || "N/A"}
                companySize={data.profile?.company_size || "N/A"}
                createdAt={data.profile?.created_at}
                updatedAt={data.profile?.updated_at}
                kycDoc={data.profile?.kyc_doc || "N/A"}
                tags={data.profile?.tags || []}
                websiteUrl={data.profile?.website_url || "N/A"}
              />
              <Description
                description={data.profile?.company_description || "N/A"}
              />
              <WalletDetail
                cryptoWallet={data.crypto_wallet || "N/A"}
                fiatWallet={data.fiat_wallet || "N/A"}
              />
            </div>
            <div className="grid  gap-[2rem]">
              <RepresentationDetails
                image={repData?.pic || "/images/no-image-placeholder.png"}
                bio={repData?.bio || "No Bio Available"}
                jobtite={repData?.job_title || "N/A"}
                name={`${repData?.first_name || "No"} ${
                  repData?.last_name || "Name"
                }`}
              />
              <ContactInformation
                phone={repData?.phone || "N/A"}
                email={repData?.email || "N/A"}
              />
            </div>
          </div>
        </>
      ) : (
        <ProductGrid productRequest={false} />
      )}
    </div>
  ) : (
    <LoadingSpinnerModal isOpen={isLoading || repIsLoading} />
  );
};

export default SingleCorporateUser;
