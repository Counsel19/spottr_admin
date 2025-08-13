
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import SingleCorporateUser from "@/components/userManagement/SingleCorporateUser";


const ViewUser = () => {

    return (
        <div className="p-[1rem] space-y-[4rem] ">
            <SecondaryHeader
                title="View User"
                subTitle="View user details here"

            />


            <SingleCorporateUser />
        </div>
    )
}

export default ViewUser