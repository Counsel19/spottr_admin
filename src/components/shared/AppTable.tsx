// components/shared/AppTable.tsx
import React from "react";

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface AppTableProps<T extends { id: string }> {
  columns: Column<T>[];
  data: T[];
  getRowId?: (item: T) => string;
  emptyState?: {
    icon?: React.ReactNode;
    title?: string;
    message?: string;
  };
  rowClassName?: (item: T) => string;
}

export function AppTable<T extends { id: string }>({
  columns,
  data,
  getRowId = (item) => item.id,
  emptyState,
  rowClassName = () => "",
}: AppTableProps<T>) {
  if (data.length === 0 && emptyState) {
    return (
      <div className="text-center py-12">
        {emptyState.icon}
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {emptyState.title}
        </h3>
        <p className="text-gray-500">{emptyState.message}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full">
        <thead>
          <tr className="border-b h-[6rem] border-gray-100">
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left py-4 px-6 text-[1.6rem] font-medium text-gray-500"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-hidden rounded-[0.6rem]">
          {data.map((item) => (
            <tr
              key={getRowId(item)}
              className={`border-b border-[#F0F1F3] text-[1.4rem] bg-white transition-colors ${rowClassName(
                item
              )}`}
            >
              {columns.map((col) => (
                <td key={col.key} className="py-4 px-6">
                  {col.render
                    ? col.render(item)
                    : (item[col.key as keyof T] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
