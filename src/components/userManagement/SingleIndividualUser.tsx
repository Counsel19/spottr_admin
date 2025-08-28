import { useGetSingleIndividualUser } from "@/lib/api/userManagement";
import { useParams } from "react-router-dom";
import LoadingSpinnerModal from "../shared/LoadingSpinnerModal";
import UserDetailsHeader from "./UserDetailsHeader";
import WalletDetail from "./WalletDetail";
import Description from "./Description";
import { useState } from "react";
import TabsBoxButton from "../shared/molecules/TabsBoxButton";
import ProductGrid from "../products/ProductGrid";
import IndividualUserAnaytics from "./IndividualUserAnaytics";
import BasicIndividualUserDetails from "./BasicIndividualUserDetails";
import StoreDetails from "./StoreDetails";
import { individualUserType } from "@/constants/enums";

const SingleIndividualUser = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { userId } = useParams();

  const { data, isLoading } = useGetSingleIndividualUser(userId);

  return data && !isLoading ? (
    <div>
      <UserDetailsHeader
        image={data.pic || "/images/no-image-placeholder.png"}
        industryId={data.profile?.id}
        createdAt={data.created_at}
        companyAddress={data.profile?.store_email || "No Address"}
        companyName={`${data.profile?.first_name || "No"} ${
          data.profile?.last_name || "Name"
        }`}
        isActive={data.is_active || false}
        role={data.profile.type || "N/A"}
      />

      <div className="mt-[2rem]">
        <TabsBoxButton
          activeindex={activeTab}
          tabs={[
            {
              name: "Detais",
              index: 0,
            },
            {
              name:
                data.profile.type == individualUserType.seller
                  ? "Products"
                  : "Orders",
              index: 1,
            },
          ]}
          setActiveIndex={setActiveTab}
        />
      </div>
      {activeTab == 0 ? (
        <>
          <div className="mt-[2rem] grid gap-[2rem] p-[2rem] bg-white rounded-[1rem] shadow-md ">
            <IndividualUserAnaytics />
            <div className="flex w-full gap-[2rem] ">
              <BasicIndividualUserDetails
                email={data.email}
                phone={data.phone || "N/A"}
                username={data.user_name}
                address={data.profile.address || "No Address"}
              />
              {data.profile.type === individualUserType.seller && (
                <StoreDetails
                  storeBgImage={data.profile.store_bg_image}
                  storeDesc={data.profile.store_desc || "No Description"}
                  storeEmail={data.profile.store_email || "N/A"}
                  storeName={data.profile.store_name || "N/A"}
                  storePhone={data.profile.store_phone || "N/A"}
                  storeProfileImage={data.profile.store_profile_image}
                />
              )}
            </div>
            <div className="grid grid-cols-2 gap-[2rem]">
              <div className="w-full shadow-sm overflow-hidden rounded-[1rem]">
                <Description
                  caption="Bio"
                  description={data.profile?.bio || "Bio not Avialable"}
                />
              </div>

              <div className="w-full shadow-sm overflow-hidden rounded-[1rem]">
                <WalletDetail
                  cryptoWallet={data.crypto_wallet || "N/A"}
                  fiatWallet={data.fiat_wallet || "N/A"}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-[2rem]">
          <ProductGrid productRequest={false} />
        </div>
      )}
    </div>
  ) : (
    <LoadingSpinnerModal isOpen={isLoading} />
  );
};

export default SingleIndividualUser;
