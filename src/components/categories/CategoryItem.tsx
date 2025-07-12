interface CategoryItemProps {
  image: string;
  name: string;
}
const CategoryItem = ({ image, name }: CategoryItemProps) => {
  return (
    <div className="p-6 flex  flex-col justify-center items-center gap-[2rem] rounded-[0.5rem] border border-[#9A9FBF40] ">
      <img className="w-[3.4rem]" src={image} alt="farm_category" />
      <p className="font-semibold text-primary text-[1.4rem]">{name}</p>
    </div>
  );
};

export default CategoryItem;
