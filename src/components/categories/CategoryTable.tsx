import { useState } from "react";
import { AppTable } from "../shared/AppTable";
import { AppPagination } from "../shared/molecules/AppPagination";
import CategoryItem from "./CategoryItem";
import { MdOutlineError } from "react-icons/md";

const categryItem: ICategory[] = [
  {
    id: "4fbec211-76d1-48fe-8ca5-00a80986be81",
    name: "Foot-wears",
    created_at: "2025-06-21T14:32:20.000000Z",
    updated_at: "2025-06-21T14:32:20.000000Z",
  },
  {
    id: "81b619d7-12bc-4d8a-911b-1d2701c7df55",
    name: "vehicle",
    created_at: "2025-06-21T14:32:41.000000Z",
    updated_at: "2025-06-21T14:32:41.000000Z",
  },
  {
    id: "a5a6540f-34f1-4ba1-9518-84cba344fc29",
    name: "Fire arms",
    created_at: "2025-06-21T14:32:30.000000Z",
    updated_at: "2025-06-21T14:32:30.000000Z",
  },
  {
    id: "b846d6d6-3f64-428d-9f02-f67376e02366",
    name: "Clothing",
    created_at: "2025-06-21T14:32:07.000000Z",
    updated_at: "2025-06-21T14:32:07.000000Z",
  },
];

interface CategoryTableProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const CategoryTable = ({ searchTerm }: CategoryTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;
  const totalItems = 20;
  const itemsPerPage = 5;
  const onPageChange = () => {
    setCurrentPage((cur) => cur + 1);
  };
  const showInfo = true;

  const filteredCategories = categryItem.filter((category) => {
    const matchesSearch = category.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesSearch;
  });
  return (
    <div className="bg-white">
      <AppTable
        columns={CategoryItem}
        data={filteredCategories}
        emptyState={{
          icon: (
            <MdOutlineError className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          ),
          title: "No Category found",
          message: "Try adjusting your search or filter criteria.",
        }}
      />

      <div className="mt-[4rem]">
        <AppPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={onPageChange}
          showInfo={showInfo}
        />
      </div>
    </div>
  );
};

export default CategoryTable;
