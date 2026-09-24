import { ReactNode } from "react";

export type ButtonsProps = {
  primaryIcon?: ReactNode;
  secondaryIcon?: ReactNode;
  className?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  align?: "left" | "right" | "center";
};
