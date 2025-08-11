import React from "react";

interface DataLoaderProps {
  isLoading: boolean;
  isEmpty?: boolean;
  emptyState?: React.ReactNode;
  skeleton: React.ReactNode;
  children: React.ReactNode;
}

const DataLoader = ({
  isLoading,
  isEmpty = false,
  emptyState,
  skeleton,
  children,
}: DataLoaderProps) => {
  if (isLoading) return skeleton;
  if (isEmpty && emptyState) return emptyState;
  return <>{children}</>;
};

export default DataLoader;
