import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  imgUrl: string;
  name: string;
  width?: string;
  height?: string;
  showStatus?: boolean;
  customStyles?: string;
}

const UserAvatar = ({
  imgUrl,
  name,
  width,
  height,
  showStatus,
  customStyles,
}: UserAvatarProps) => {
  return (
    <div className="relative">
      <Avatar
        className={cn(
          width ? width : "w-[4rem]",
          height ? height : " h-[4rem]",

          customStyles
        )}
      >
        <AvatarImage src={imgUrl} alt={name} />
        <AvatarFallback className="uppercase">
          {name?.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      {showStatus ? (
        <span className="rounded-full absolute bottom-0 right-2 flex outline-2 outline-white w-[0.8rem] h-[0.8rem] bg-emerald-500 " />
      ) : null}
    </div>
  );
};

export default UserAvatar;
