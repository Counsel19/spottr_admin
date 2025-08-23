interface DescriptionProps {
  description: string;
}

const Description = ({ description }: DescriptionProps) => {
  return (
    <div className="bg-white p-[1rem]">
      <h2 className="text-[1.8rem] font-semibold text-text-primary mb-[2rem]">
        Description
      </h2>

      <p className="text-[1.4rem]  leading-relaxed">{description}</p>
    </div>
  );
};

export default Description;
