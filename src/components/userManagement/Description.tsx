interface DescriptionProps {
  description: string;
  caption?: string;
}

const Description = ({ description, caption }: DescriptionProps) => {
  return (
    <div className="bg-white p-[1rem]">
      <h2 className="text-[1.8rem] font-semibold text-text-primary mb-[2rem]">
        {caption ? caption : "Description"}
      </h2>

      <p className="text-[1.4rem]  leading-relaxed">{description}</p>
    </div>
  );
};

export default Description;
