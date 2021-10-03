import { InputHTMLAttributes } from "react";

export interface TextAreaProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  onChangeValue?: (value?: string) => void;
}
