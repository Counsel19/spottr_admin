import FilterDropdown from "@/components/userManagement/molecules/FilterDropdown";
import { MoveLeft } from "lucide-react";
import IconTextButton from "@/components/shared/molecules/IconTextButton";
import Searchbar from "@/components/shared/molecules/Searchbar";
import TabsBox from "@/components/shared/molecules/TabsBox";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface PageHeaderPops {
  tabList?: { name: string; path: string }[];
  createText: string;
  deleteText: string;
  pageTitle: string
}

const PageHeader = ({ tabList, createText, pageTitle, deleteText }: PageHeaderPops) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-[2rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[1rem]">
          <IconTextButton
            icon={<MoveLeft size={30} />}
            cta="Go back"
            onClick={() => navigate(-1)}
          />
          <h1 className="font-bold text-primary text-[1.6rem]">{pageTitle}</h1>
        </div>

        <div className="flex items-center  gap-[1rem]">
          <Searchbar />

          <div className="flex  gap-2 items-center">
            <span className="text-primary font-semibold text-[1.4rem]">
              Filter by:
            </span>
            <FilterDropdown />
          </div>
        </div>
      </div>

      <div className="flex justify-between ">
        {tabList ? <TabsBox tabs={tabList} /> : <div></div>}

        <div className="flex gap-[2rem] items-center">
          <Button className="border-primary text-primary" variant={"outline"}>
            {createText}
          </Button>
          <Button
            className="border-destructive text-destructive"
            variant={"outline"}
          >
            {deleteText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
