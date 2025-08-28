import SecondaryHeader from "@/components/shared/SecondaryHeader";
import SingleIndividualUser from "@/components/userManagement/SingleIndividualUser";

const ViewIndividualUser = () => {
  return (
    <div className="p-[1rem] space-y-[4rem] ">
      <SecondaryHeader
        removeButtonText="Diactivate Acccount"
        title="View User"
        subTitle="View user details here"
        showBackButton
      />

      <SingleIndividualUser />
    </div>
  );
};

export default ViewIndividualUser;
