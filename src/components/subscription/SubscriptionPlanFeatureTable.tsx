
import { BiCategory } from "react-icons/bi";
import { TableSkeleton } from "../ui/table-skeleton";
import DataLoader from "../shared/DataLoader";

import { useState } from "react";
import { AppTable } from "../shared/AppTable";
import SubcriptionPlanFeatureRecord from "./SubcriptionPlanFeatureRecord";
import {  useRemoveFeatureToSubscriptionPlan } from "@/lib/api/subscription";
import ConfirmationModal from "../shared/ConfirmationModal";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../ui/button";
import AddFeatureModal from "./AddFeaturemodal";

interface SubcriptionPlanFeatureTableProps {

    featureData?: ISubscriptionPlanFeatures[]
}

const SubcriptionPlanFeatureTable = ({ featureData }: SubcriptionPlanFeatureTableProps) => {
    const { planId } = useParams()
    const [selectedSubcriptionPlanFeatureDetails, setSelectedSubcriptionPlanFeatureDetails] = useState<{
        id: string,
        name: string,
    } | null>(null)
    const [showModal, setShowModal] = useState(false)
    const [showAddFeature, setShowAddFeature] = useState(false)

    const queryClient = useQueryClient();


    const removeSubcriptionPlanFeatureMutate = useRemoveFeatureToSubscriptionPlan()

    return (
        <div className="bg-white">
            <DataLoader
                isLoading={!featureData}
                isEmpty={featureData && featureData?.length === 0}
                skeleton={
                    <TableSkeleton
                        rows={3}
                        columns={6}
                        showCheckbox={false}
                        showAvatar={false}
                        showActions={true}
                    />
                }
                emptyState={
                    <div className="text-center py-10 space-y-6">
                        <BiCategory className="size-20 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-[1.8rem] font-semibold">No Feature added yet</h3>
                        <Button onClick={() => setShowAddFeature(true)} variant={"outline"}>
                            Add Feature to View
                        </Button>
                    </div>
                }
            >
                <AppTable columns={SubcriptionPlanFeatureRecord({
                    setSelectedSubcriptionPlanFeatureDetails, setShowModal
                })} data={featureData!} />
            </DataLoader>




            {showModal && selectedSubcriptionPlanFeatureDetails && <ConfirmationModal type={"danger"} title="Are you sure you want to proceed?" isLoading={removeSubcriptionPlanFeatureMutate.isPending}
                proceedFunc={async () => {
                    if (!planId) return toast.error("No Plan ID")
                    await removeSubcriptionPlanFeatureMutate.mutateAsync({
                        featureId: selectedSubcriptionPlanFeatureDetails.id,
                        id: planId
                    })
                    setShowModal(false)

                    queryClient.invalidateQueries({
                        queryKey: ["subscription-plans", planId],
                    });
                }} description={`Are you sure you wan to delete this Subcription Plan Feature - (${selectedSubcriptionPlanFeatureDetails.name})?`} cancelFunc={() => {
                    setShowModal(false)
                    setSelectedSubcriptionPlanFeatureDetails(null)
                }} />}

            <AddFeatureModal isOpen={showAddFeature} onClose={() => setShowAddFeature(false)} />

        </div>
    );
};

export default SubcriptionPlanFeatureTable;
