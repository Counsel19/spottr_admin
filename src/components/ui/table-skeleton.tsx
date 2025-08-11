import { Skeleton } from "@/components/ui/skeleton";

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
  showCheckbox?: boolean;
  showAvatar?: boolean;
  showActions?: boolean;
  className?: string;
}

export function TableSkeleton({
  rows = 5,
  showCheckbox = true,
  showAvatar = true,
  showActions = true,
  className = "",
}: TableSkeletonProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Table Header */}
      <div className="border-b   border-border bg-muted/50 py-[1.6rem] px-[2.4rem]">
        <div className="flex items-center space-x-[1.6rem]">
          {showCheckbox && <Skeleton className="h-[2.6rem]  rounded-md" />}
          <Skeleton className="h-[2.6rem] w-full " />
          {showAvatar && (
            <Skeleton className="h-[3.6rem] rounded-full w-[3.6rem]" />
          )}
          <Skeleton className="h-[2.6rem] w-full" />
          <Skeleton className="h-[2.6rem] w-full " />
          <Skeleton className="h-[2.6rem] w-full " />
          <Skeleton className="h-[2.6rem] w-full " />
          <Skeleton className="h-[2.6rem] w-full " />
          <Skeleton className="h-[2.6rem] w-full " />
          {showActions && <Skeleton className="h-[2.6rem]  w-full " />}
        </div>
      </div>

      {/* Table Rows */}
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="border-b border-border py-[1.6rem] px-[2.4rem] hover:bg-muted/30 transition-colors"
        >
          <div className="flex items-center space-x-[1.6rem]">
            {showCheckbox && (
              <Skeleton className="h-[2.6rem] w-full  rounded-sm" />
            )}
            <Skeleton className="h-[2.6rem] w-full" />
            {showAvatar && (
              <Skeleton className="h-[3.6rem] w-[3.6rem] rounded-full" />
            )}
            <Skeleton className="h-[2.6rem] w-full" />
            <Skeleton className="h-[2.6rem] w-full" />
            <Skeleton className="h-[2.6rem]  w-full rounded-full" />
            <Skeleton className="h-[2.6rem] w-full" />
            <Skeleton className="h-[2.6rem] w-full" />
            <Skeleton className="h-[2.4rem] w-full rounded-full" />
            {showActions && (
              <div className="flex space-x-[0.8rem]">
                <Skeleton className="h-[3.2rem] w-[3.2rem] rounded-md" />
                <Skeleton className="h-[3.2rem] w-[3.2rem] rounded-md" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function UserTableSkeleton({
  rows = 5,
  className = "",
}: {
  rows?: number;
  className?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      <div className="border-b border-border bg-muted/50">
        <div className="grid grid-cols-10 gap-[1.6rem] px-[1.6rem] py-[1.2rem] text-[1.4rem] font-medium">
          <Skeleton className="h-[2.6rem] w-[1.6rem] rounded-sm" />
          <Skeleton className="h-[2.6rem] w-[3.2rem]" />
          <Skeleton className="h-[2.6rem] w-[4.8rem]" />
          <Skeleton className="h-[2.6rem] w-[12.8rem]" />
          <Skeleton className="h-[2.6rem] w-[8rem]" />
          <Skeleton className="h-[2.6rem] w-[6.4rem]" />
          <Skeleton className="h-[2.6rem] w-[8rem]" />
          <Skeleton className="h-[2.6rem] w-[11.2rem]" />
          <Skeleton className="h-[2.6rem] w-[6.4rem]" />
          <Skeleton className="h-[2.6rem] w-[6.4rem]" />
        </div>
      </div>

      {/* Rows */}
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="border-b border-border hover:bg-muted/30 transition-colors"
        >
          <div className="grid grid-cols-10 gap-[1.6rem] px-[1.6rem] py-[1.6rem] items-center">
            <Skeleton className="h-[2.6rem] w-[1.6rem] rounded-sm" />
            <Skeleton className="h-[2.6rem] w-[4.8rem]" />
            <Skeleton className="h-[4rem] w-[4rem] rounded-full" />
            <Skeleton className="h-[2.6rem] w-[12.8rem]" />
            <Skeleton className="h-[2.6rem] w-[8rem]" />
            <Skeleton className="h-[2.4rem] w-[8rem] rounded-full" />
            <Skeleton className="h-[2.6rem] w-[9.6rem]" />
            <Skeleton className="h-[2.6rem] w-[14.4rem]" />
            <Skeleton className="h-[2.4rem] w-[6.4rem] rounded-full" />
            <div className="flex space-x-[0.8rem]">
              <Skeleton className="h-[3.2rem] w-[3.2rem] rounded-md" />
              <Skeleton className="h-[3.2rem] w-[3.2rem] rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function LoadingSpinner({
  size = "medium",
  className = "",
}: {
  size?: "small" | "medium" | "large";
  className?: string;
}) {
  const sizeClasses = {
    small: "h-[2.6rem] w-[1.6rem]",
    medium: "h-[2.4rem] w-[2.4rem]",
    large: "h-[3.2rem] w-[3.2rem]",
  };

  return (
    <div className={`animate-spin ${sizeClasses[size]} ${className}`}>
      <div className="h-full w-full rounded-full border-[0.2rem] border-muted border-t-primary"></div>
    </div>
  );
}
