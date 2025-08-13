import { useGetSingleCorporateUser } from "@/lib/api/userManagement";
import UserCard from "./molecules/UserCard"
import { useParams } from "react-router-dom";
import LoadingSpinnerModal from "../shared/LoadingSpinnerModal";

const SingleCorporateUser = () => {
  const { userId } = useParams()

  const { data, isLoading } = useGetSingleCorporateUser(userId);


  return (
    data && !isLoading ?
      <div>
        <UserCard id={data.id} isActive={true} name={`${data?.first_name} ${data?.last_name}`} image={"/images/avatar.png"} />
      </div> : <LoadingSpinnerModal isOpen={isLoading} />
  )
}

export default SingleCorporateUser