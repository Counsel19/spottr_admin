import SecondaryHeader from "@/components/shared/SecondaryHeader";
import SingleCorporateUser from "@/components/userManagement/SingleCorporateUser";

const ViewCorporateUser = () => {
  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        removeButtonText="Diactivate Acccount"
        title="View Corporate User"
        subTitle="View Corporate user details here"
        showBackButton
      />

      <SingleCorporateUser />
    </div>
  );
};

export default ViewCorporateUser;
