import { cn } from "@/app/lib/utils";
import { HeaderProps } from "./type";

function SubHeader({ title2, title, className }: HeaderProps) {
  return (
    <div
      className={cn(
        " max-w-xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8",
        className,
      )}
    >
      <p>{title}</p>
      <p>{title2} </p>
    </div>
  );
}

export default SubHeader;
