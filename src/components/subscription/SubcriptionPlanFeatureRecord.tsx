import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Trash2, } from "lucide-react";

import type { Column } from "../shared/AppTable";
import type React from "react";

interface SubcriptionPlanFeatureRecordProps {
    setSelectedSubcriptionPlanFeatureDetails: React.Dispatch<React.SetStateAction<{
        id: string;
        name: string;
    } | null>>
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const SubcriptionPlanFeatureRecord = ({
    setSelectedSubcriptionPlanFeatureDetails, setShowModal
}: SubcriptionPlanFeatureRecordProps) => {
    const record: Column<ISubscriptionPlanFeatures>[] = [
        {
            key: "id",
            header: "ID",
            render: (feature,) => <span>{feature.id.slice(0, 3)}...</span>,
        },

        {
            key: "feature",
            header: "Feature",
            render: (feature) => (
                <span>{feature.feature || "N/A"}</span>
            ),
        },
        {
            key: "value",
            header: "Value",
            render: (feature) => (
                <div className="text-gray-600">
                    {feature.value || "N/A"}
                </div>
            ),
        },

        {
            key: "actions",
            header: "",
            render: (feature) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-gray-100 transition-all opacity-100"
                        >
                            <MoreHorizontal className="size-8" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className="w-[20rem] space-y-[1rem] p-4"
                    >

                        <DropdownMenuItem onSelect={() => {
                            setSelectedSubcriptionPlanFeatureDetails({
                                name: feature.feature,
                                id: feature.id,
                            })
                            setShowModal(true)
                        }} className="gap-2 text-red-600 focus:text-red-600">
                            <Trash2 className="size-6" />
                            Delete Feature
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ];

    return record
}


export default SubcriptionPlanFeatureRecord;
