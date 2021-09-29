export interface ButtonProps {
  text?: string;
  icon?: 'edit' | 'trash';
  height?: number;
  className?: string;
  onClick?: (value?: string) => void;
}
