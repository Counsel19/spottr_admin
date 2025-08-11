import React, { useMemo } from "react";

export function usePaginationMeta(
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  pagination?: IPaginationData
) {
  return useMemo(() => {
    if (!pagination)
      return {
        totalPages: 0,
        currentPage: 1,
        totalItems: 0,
        itemsPerPage: 10,
      };

    const { total, per_page, current_page } = pagination;

    const totalPages = Math.ceil(total / per_page);

    setCurrentPage(current_page);

    return {
      totalPages,
      currentPage: current_page,
      totalItems: total,
      itemsPerPage: per_page,
    };
  }, [pagination]);
}
