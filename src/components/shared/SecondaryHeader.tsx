import PageTitle from "./PageTitle";

import { Button } from "../ui/button";
import { Plus, Trash } from "lucide-react";

interface SecondaryHeaderProps {
  addButtonText?: string;
  addButtonFunc?: VoidFunction;
  removeButtonFunc?: VoidFunction;
  removeButtonText?: string;
  title: string;
  subTitle: string;
  customAddActionButton?: React.ReactNode;
}

const SecondaryHeader = ({
  addButtonText,
  removeButtonText,
  removeButtonFunc,
  title,
  subTitle,
  customAddActionButton,
  addButtonFunc,
}: SecondaryHeaderProps) => {
  return (
    <div className="flex justify-between items-center bg-white pt-4">
      <div className="flex gap-4">
        <PageTitle subTitle={subTitle} title={title} />
      </div>

      <div className="flex gap-[2rem] items-center">
        {addButtonText && (
          <Button
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
            className="text-white rounded-[3rem] bg-destructive hover:bg-destructive/50 font-medium"
          >
            <Trash className="size-6" />
            {removeButtonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SecondaryHeader;
