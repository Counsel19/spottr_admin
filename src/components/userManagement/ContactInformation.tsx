import { Mail, Phone } from "lucide-react";

interface ContactInformationProps {
  email: string;
  phone: string;
}

const ContactInformation = ({ email, phone }: ContactInformationProps) => {
  return (
    <div className="bg-white p-[1rem]">
      <h2 className="text-[1.8rem] font-semibold mb-[2rem]">
        Contact Information
      </h2>

      <div className="space-y-[1rem]">
        <div className="flex items-center gap-3">
          <span className="text-secondary">
            <Mail />
          </span>
          <span className="text-[1.4rem] text-primary">{email}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-secondary">
            <Phone />
          </span>
          <span className="text-[1.4rem] text-primary">{phone}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
