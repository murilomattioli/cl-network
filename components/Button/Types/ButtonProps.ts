import { ButtonIcons } from ".";

export interface ButtonProps {
  text?: string;
  icon?: ButtonIcons;
  height?: number;
  className?: string;
  disabled?: boolean;
  onClick?: (value?: string) => void;
}
