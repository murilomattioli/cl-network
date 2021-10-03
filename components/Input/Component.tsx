import React, { InputHTMLAttributes, useCallback, useRef } from 'react';
import { InputStyles } from './Styles';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChangeValue?: (value: string) => void;
};

const InputComponentNoMemo: React.FC<InputProps> = (props) => {
  const {
    onChangeValue = () => { },
    children,
    ...inputProps
  } = props;
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const handleOnChange = useCallback((): void => {
    const inputValue: string = inputRef?.current?.value || '';
    onChangeValue(inputValue);
  }, [inputRef]);

  return (
    //@ts-ignore
    <InputStyles {...props}>
      <input {...inputProps} ref={inputRef} onChange={handleOnChange} />
    </InputStyles>
  );
}

const propsAreEqual = (prevProps: InputProps, nextProps: InputProps): boolean => (
  prevProps.onChangeValue === nextProps.onChangeValue &&
  prevProps.placeholder === nextProps.placeholder &&
  prevProps.className === nextProps.className &&
  prevProps.value === nextProps.value
);

export const InputComponent = React.memo(InputComponentNoMemo, propsAreEqual);
