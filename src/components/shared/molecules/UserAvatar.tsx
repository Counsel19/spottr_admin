

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";


interface UserAvatarProps {
  imgUrl: string;
  name: string;
  width?: string;
  height?: string;
}
const UserAvatar = ({ imgUrl, name, width, height }: UserAvatarProps) => {
  return (
    <Avatar
      className={ cn(width ? width : "w-[4rem]", height ? height : " h-[4rem]", "border-3 border-primary")}
    >
      <AvatarImage src={imgUrl} alt={name} />
      <AvatarFallback className="uppercase">{name?.slice(0, 2)}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;