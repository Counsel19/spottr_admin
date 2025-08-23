interface RepresentationDetailsProps {
  name: string;
  jobtite: string;
  bio: string;
  image: string;
}

const RepresentationDetails = ({
  bio,
  jobtite,
  image,
  name,
}: RepresentationDetailsProps) => {
  return (
    <div className="bg-white p-[1rem]">
      <h2 className="text-[1.8rem] font-semibold  mb-[2rem]">
        Corporate Representative
      </h2>

      <div className="flex items-center gap-[2rem] p-[4rem] bg-gray-300 rounded-[1.5rem]">
        <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden">
          <img
            src={image}
            alt="Jumal Shariff"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-[1.4rem]">
          <h3 className="font-bold">{name}</h3>
          <p className="">{jobtite}</p>
        </div>
      </div>
      <div className="space-y-[1rem] mt-[2rem]">
        <h3 className="text-[1.6rem]">Bio</h3>
        <p className="text-[1.4rem]  leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

export default RepresentationDetails;
