import { cn } from "@/lib/utils"

interface ProductImgAvatarProps {
   
    customStyles?: string
    url: string
    name: string
}

const ProductImgAvatar = ({
url, customStyles, name
}: ProductImgAvatarProps) => {
  return (
    <img src={url ??  "/images/no-image-placeholder.png"} alt={name} className={cn( "h-[4rem] w-[6rem] object-cover rounded-[0.7rem]", customStyles)} />
  )
}

export default ProductImgAvatar