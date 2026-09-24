import { cn } from "@/app/lib/utils";
import { ButtonsProps } from "./type";

function Button({
  className,
  primaryLabel,
  secondaryLabel,
  primaryIcon,
  secondaryIcon,
  ...props
}: ButtonsProps) {
  const baseBtn =
    "body w-35 rounded-md px-5 py-3 transition-all duration-200 hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-base";

  const primaryBtn = `${baseBtn} bg-primary text-background hover:bg-primary-hover`;

  const outlineBtn = `${baseBtn} border border-primary text-primary hover:bg-primary/10`;

  return (
    <div className="mt-7 flex flex-row w-full  gap-3 sm:w-auto sm:flex-row">
      {primaryLabel && (
        <button className={cn(primaryBtn, className, primaryIcon)} {...props}>
          {primaryLabel}
        </button>
      )}

      {secondaryLabel && (
        <button className={cn(outlineBtn, className, secondaryIcon)} {...props}>
          {secondaryLabel}
        </button>
      )}
    </div>
  );
}

export default Button;
