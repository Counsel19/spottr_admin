import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";

interface DeleteProductNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const DeleteProductNoticeModal = ({
  isOpen,
  onClose,
  onSubmit,
}: DeleteProductNoticeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-[3rem] p-[3rem]">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-2xl  gap-[1rem] flex flex-col items-center justify-center font-bold text-center">
            <div className="w-[6rem] h-[6rem]  rounded-full grid place-content-center bg-[#FEF3F2]">
              <Trash className="s-18 text-destructive" />
            </div>
            <h4> Delete Product</h4>
          </DialogTitle>
        </DialogHeader>

        <p className="text-[1.4rem]  w-[60%] mx-auto text-center leading-[2.8rem] text-[#667085]">
          Are you sure you want to delete this product? This action cannot be
          undone.
        </p>

        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={onClose}
            className="rounded-[3rem]"
          >
            Back
          </Button>
          <Button
            className="rounded-[3rem] bg-destructive test-white"
            onClick={onSubmit}
          >
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProductNoticeModal;
