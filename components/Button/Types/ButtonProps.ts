export interface ButtonProps {
  text?: string;
  icon?: 'edit' | 'trash';
  height?: number;
  className?: string;
  disabled?: boolean;
  onClick?: (value?: string) => void;
}
