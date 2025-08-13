import { IoCheckmarkCircle, IoWarning } from "react-icons/io5";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";


interface ConfirmationModalProps {
    title: string;
    description: string;
    proceedFunc: VoidFunction;
    cancelFunc: VoidFunction;
    isLoading: boolean;
    type: "danger" | "success";
}
const ConfirmationModal = ({
    isLoading,
    description,
    title,
    cancelFunc,
    proceedFunc,
    type
}: ConfirmationModalProps) => {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex  min-h-full items-end justify-center p-[4rem] text-center sm:items-center ">
                    <div className="relative space-y-[1rem] p-[1rem] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[35%]">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className={cn("mx-auto flex items-center justify-center rounded-full p-2", type == "danger" ? "bg-red-100" : "bg-green-100")}>
                                    {
                                        type === "danger" ? (<IoWarning className="size-16 text-red-600" />) : (<IoCheckmarkCircle className="size-16 text-green-600" />)
                                    }
                                </div>
                                <div className="mt-3 text-center  space-y-[1rem] sm:ml-4 sm:text-left">
                                    <h3 className="text-[1.8rem] leading-[2rem] font-semibold text-gray-900" id="modal-title">
                                        {title}
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-[1.4rem] leading-[1.8rem] text-gray-500">{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <Button
                                onClick={() => {
                                    proceedFunc();
                                }}
                                isLoading={isLoading}
                                type="button"
                                size={"sm"}
                                className={cn("inline-flex w-full justify-center rounded-md   text-white shadow-xs  sm:ml-3 sm:w-auto", type == "danger" ? "bg-red-600 hover:bg-red-500" : "bg-green-600 hover:bg-green-500")}
                            >
                                {isLoading ? 'Processing...' : 'Proceed'}
                            </Button>
                            <Button
                                onClick={cancelFunc}
                                type="button"
                                size={"sm"}
                                className="inline-flex w-full  justify-center rounded-md bg-gray-500  text-white shadow-xs hover:bg-gray-400 sm:ml-3 sm:w-auto"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
