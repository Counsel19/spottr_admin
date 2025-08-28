interface FieldValueItemProps {
  fieldName: string;
  fieldValue: string;
}

const FieldValueItem = ({ fieldName, fieldValue }: FieldValueItemProps) => {
  return (
    <div>
      <label className="text-[1.4rem]  block mb-1">{fieldName}</label>
      <p className="text-[1.4rem] font-semibold">{fieldValue}</p>
    </div>
  );
};

export default FieldValueItem;
