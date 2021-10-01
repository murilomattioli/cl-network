import React, { useCallback, useRef, useState } from 'react';
import { InputProps } from '.';
import { InputStyles } from './Styles';

const InputComponentNoMemo: React.FC<InputProps> = (props) => {
  const {
    onChangeValue = () => {},
    children,
    ...rest
  } = props;
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const handleOnChange = useCallback((): void => {
    const inputValue: string = inputRef?.current?.value || '';
    onChangeValue(inputValue);
  }, [inputRef]);

  return (
    //@ts-ignore
    <InputStyles {...props}>
      <input ref={inputRef} {...rest} onChange={handleOnChange} />
    </InputStyles>
  );
}

const propsAreEqual = (prevProps: InputProps , nextProps: InputProps): boolean => (
  prevProps.onChangeValue === nextProps.onChangeValue &&
  prevProps.placeholder === nextProps.placeholder &&
  prevProps.className === nextProps.className &&
  prevProps.value === nextProps.value
);

export const InputComponent = React.memo(InputComponentNoMemo, propsAreEqual);
