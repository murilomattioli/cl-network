import React, { useCallback, useRef } from 'react';
import { InputProps } from '.';
import { InputStyles } from './Styles';

const InputComponentNoMemo: React.FC<InputProps> = (props) => {
  const {
    value,
    placeholder,
    onChange,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = useCallback(() => {
    const newValue: string | undefined = inputRef.current?.value;

    if (onChange) {
      onChange(newValue);
    }
  }, [inputRef]);

  return (
    //@ts-ignore
    <InputStyles {...props}>
      <input ref={inputRef} placeholder={placeholder} value={value} onChange={handleOnChange} />
    </InputStyles>
  );
}

const propsAreEqual = (prevProps: InputProps , nextProps: InputProps): boolean => (
  prevProps.onChange === nextProps.onChange &&
  prevProps.placeholder === nextProps.placeholder &&
  prevProps.value === nextProps.value
);

export const InputComponent = React.memo(InputComponentNoMemo, propsAreEqual);
