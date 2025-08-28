import { Mail, MapPin, Phone, User } from "lucide-react";
import BasicIndividualUserRecord from "./molecules/BasicIndividualUserRecord";

interface BasicIndividualUserDetailsProps {
  username: string;
  email: string;
  address: string;
  phone: string;
}

const basicDetailsWithIcons = {
  username: {
    icon: <User />,
    name: "Username",
    value: "",
  },
  email: {
    icon: <Mail />,
    name: "E-mail",
    value: "",
  },
  address: {
    icon: <MapPin />,
    name: "Address",
    value: "",
  },
  phone: {
    icon: <Phone />,
    name: "Phone Number",
    value: "",
  },
};

type BasicDetailsKeys = keyof typeof basicDetailsWithIcons;

const BasicIndividualUserDetails = (props: BasicIndividualUserDetailsProps) => {
  return (
    <div className="w-full shadow-sm p-[2rem] rounded-[1rem]">
      <h2 className="text-[1.8rem] font-semibold  mb-[2rem]">Basic Details</h2>
      <div className=" grid grid-cols-2 gap-[1rem]">
        {(Object.keys(basicDetailsWithIcons) as BasicDetailsKeys[]).map(
          (item, index) => (
            <BasicIndividualUserRecord
              key={index}
              icon={basicDetailsWithIcons[item].icon}
              name={basicDetailsWithIcons[item].name}
              value={props[item]}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BasicIndividualUserDetails;
