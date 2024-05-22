import { ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: ReactNode;
}
