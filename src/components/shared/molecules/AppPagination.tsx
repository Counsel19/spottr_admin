import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface AppPaginationProps {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
  showInfo?: boolean
  className?: string
}

interface PaginationButtonProps {
  children: React.ReactNode
  isActive?: boolean
  isDisabled?: boolean
  onClick?: () => void
  className?: string
}

export const PaginationButton = React.forwardRef<HTMLButtonElement, PaginationButtonProps>(
  ({ children, isActive, isDisabled, onClick, className, ...props }, ref) => (
    <Button
      ref={ref}
      variant={isActive ? "default" : "ghost"}
      size="sm"
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        "h-16 w-16 p-0 text-[1.4rem]",
        isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
        !isActive && "hover:bg-accent hover:text-accent-foreground",
        isDisabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
)
PaginationButton.displayName = "PaginationButton"

export const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn("flex h-16 w-16 items-center justify-center", className)}
    {...props}
  >1
    <MoreHorizontal className="h-16 w-4 text-muted-foreground" />
    <span className="sr-only">More pages</span>
  </div>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export const AppPagination = React.forwardRef<HTMLDivElement, AppPaginationProps>(
  ({ 
    currentPage, 
    totalPages, 
    totalItems, 
    itemsPerPage, 
    onPageChange, 
    showInfo = true,
    className,
    ...props 
  }, ref) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1
    const endItem = Math.min(currentPage * itemsPerPage, totalItems)

    const generatePageNumbers = (): (number | 'ellipsis')[] => {
      const delta = 2
      const range = []
      const rangeWithDots: (number | 'ellipsis')[] = []

      for (let i = Math.max(2, currentPage - delta); 
           i <= Math.min(totalPages - 1, currentPage + delta); 
           i++) {
        range.push(i)
      }

      if (currentPage - delta > 2) {
        rangeWithDots.push(1, 'ellipsis' as const)
      } else {
        rangeWithDots.push(1)
      }

      rangeWithDots.push(...range)

      if (currentPage + delta < totalPages - 1) {
        rangeWithDots.push('ellipsis', totalPages)
      } else {
        rangeWithDots.push(totalPages)
      }

      return totalPages > 1 ? rangeWithDots : [1]
    }

    const pageNumbers = generatePageNumbers()

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-between w-full", className)}
        {...props}
      >
        {showInfo && (
          <div className="text-[1.4rem] text-muted-foreground">
            Showing {startItem}-{endItem} from {totalItems}
          </div>
        )}
        
        <nav className="flex items-center space-x-4" aria-label="Pagination Navigation">
          {/* Previous Button */}
          <PaginationButton
            isDisabled={currentPage === 1}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            className="h-16 w-16"
          >
            <ChevronLeft className="h-16 w-16" />
            <span className="sr-only">Previous page</span>
          </PaginationButton>

          {/* Page Numbers */}
          {pageNumbers.map((pageNum, idx) => {
            if (pageNum === 'ellipsis') {
              return <PaginationEllipsis key={`ellipsis-${idx}`} />
            }

            return (
              <PaginationButton
                key={pageNum}
                isActive={pageNum === currentPage}
                onClick={() => onPageChange(pageNum)}
              >
                {pageNum}
              </PaginationButton>
            )
          })}

          {/* Next Button */}
          <PaginationButton
            isDisabled={currentPage === totalPages}
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            className="h-16 w-16"
          >
            <ChevronRight className="h-16 w-16" />
            <span className="sr-only">Next page</span>
          </PaginationButton>
        </nav>
      </div>
    )
  }
)
AppPagination.displayName = "AppPagination"

