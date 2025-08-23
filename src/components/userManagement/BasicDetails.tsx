import { Badge } from "../ui/badge";
import { format } from "date-fns";

interface BasicDetailsProps {
  id: string;
  companyName: string;
  tags: string[];
  companySize: string;
  websiteUrl: string;
  createdAt?: string;
  updatedAt?: string;
  kycDoc: string;
}

const BasicDetails = ({
  id,
  companyName,
  companySize,
  createdAt,
  tags,
  updatedAt,
  kycDoc,
  websiteUrl,
}: BasicDetailsProps) => {
  return (
    <div className="bg-white p-[1rem]">
      <h2 className="text-[1.8rem]  font-semibold mb-[2rem]">Basic Details</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-[1.4rem]  block mb-1">ID</label>
            <p className="text-[1.4rem] font-semibold">{id}</p>
          </div>
          <div>
            <label className="text-[1.4rem]  block mb-1">Company Name</label>
            <p className="text-[1.4rem] font-semibold">{companyName}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-[1.4rem]  block mb-1">Tags</label>
            <div className="flex gap-4">
              {tags.map((tag, index) => (
                <Badge key={index} variant={"secondary"}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <label className="text-[1.4rem]  block mb-1">Company Size</label>
            <p className="text-[1.4rem] font-semibold">{companySize}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-[1.4rem]  block mb-1">Website URL</label>
            <a
              href={websiteUrl}
              className="text-[1.4rem] text-primary font-semibold hover:underline"
            >
              {websiteUrl}
            </a>
          </div>
          <div>
            <label className="text-[1.4rem]  block mb-1">Created At</label>
            <p className="text-[1.4rem] font-semibold">
              {createdAt ? format(createdAt, "dd MMMM yyyy hh:mm a") : "N/A"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-[1.4rem]  block mb-1">KYC Doc</label>
            <a
              href={kycDoc}
              className="text-[1.4rem] w-full flex flex-wrap break-all text-primary font-semibold hover:underline"
            >
              {kycDoc}
            </a>
          </div>
          <div>
            <label className="text-[1.4rem]  block mb-1">Updated At</label>
            <p className="text-[1.4rem] font-semibold">
              {updatedAt ? format(updatedAt, "dd MMMM yyyy hh:mm a") : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
