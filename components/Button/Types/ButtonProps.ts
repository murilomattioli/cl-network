import { ButtonIcons } from "./ButtonIcons";

export interface ButtonProperties {
  text?: string;
  icon?: ButtonIcons;
  height?: number;
  className?: string;
  disabled?: boolean;
  color?: 'black' | 'white';
  onClick?: (value?: string) => void;
}
