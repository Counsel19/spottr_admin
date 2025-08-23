import PageTitle from "./PageTitle";

import { Button } from "../ui/button";
import { ArrowLeft, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SecondaryHeaderProps {
  addButtonText?: string;
  addButtonType?: "button" | "submit" | "reset";
  addButtonFunc?: VoidFunction;
  removeButtonFunc?: VoidFunction;
  removeButtonText?: string;
  title: string;
  subTitle: string;
  customAddActionButton?: React.ReactNode;
  showBackButton?: boolean;
}

const SecondaryHeader = ({
  addButtonText,
  addButtonType,
  removeButtonText,
  removeButtonFunc,
  title,
  subTitle,
  customAddActionButton,
  addButtonFunc,
  showBackButton,
}: SecondaryHeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center bg-white pt-4">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Button onClick={() => navigate(-1)} variant={"ghost"}>
            <ArrowLeft className="size-8" />
          </Button>
        )}
        <PageTitle subTitle={subTitle} title={title} />
      </div>

      <div className="flex gap-[2rem] items-center">
        {addButtonText && (
          <Button
            type={addButtonType || "button"}
            onClick={() => (addButtonFunc ? addButtonFunc() : () => {})}
            className="text-white font-medium rounded-[3rem]"
          >
            <Plus className="size-6" />
            {addButtonText}
          </Button>
        )}
        {customAddActionButton && customAddActionButton}
        {removeButtonText && (
          <Button
            onClick={removeButtonFunc ? removeButtonFunc : () => {}}
            variant={"ghost"}
            type="button"
            className="text-white rounded-[3rem] bg-destructive hover:bg-destructive/50 font-medium"
          >
            <X className="size-6" />
            {removeButtonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SecondaryHeader;
