import UserAvatar from "@/components/shared/molecules/UserAvatar";
import { Button } from "@/components/ui/button";

interface UserCardProps {
  image: string;
  name: string;
  isActive: boolean;
  id: string;
}

const UserCard = ({ image, isActive, id, name }: UserCardProps) => {
  return (
    <div>
      <div className="bg-[url('./images/profileCardBg.png')] h-[14.8rem] ">
        <div className="translate-y-[10%]">
          <UserAvatar
            imgUrl={image}
            name={name}
            width="w-[14.8rem]"
            height="h-[14.8rem]"
          />
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-[1.6rem]">{name}</h4>
        <span>ID: {id} </span>
        <Button> {isActive ? "Block" : "UnBlock"}</Button>
      </div>
    </div>
  );
};

export default UserCard;
