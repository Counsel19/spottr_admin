import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IconTextButtonProps {
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  cta?: string;
  variant?:
    | "secondary"
    | "ghost"
    | "outline"
    | "default"
    | "link"
    | "destructive"
    | null
    | undefined;
  size?: "default" | "sm" | "lg";
  type?: "button" | "submit" | "reset";
}
const IconTextButton = ({
  className,
  disabled,
  icon,
  cta,
  onClick,
  size = "default",
  type = "button",
  variant = "ghost",
}: IconTextButtonProps) => {
  return (
    <Button
      className={cn(className, "flex gap-2")}
      variant={variant}
      size={size}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      <span>{cta}</span>
    </Button>
  );
};

export default IconTextButton;
