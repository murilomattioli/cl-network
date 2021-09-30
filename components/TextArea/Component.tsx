import React, { useCallback, useRef, useState } from 'react';
import { TextAreaProps } from '.';
import { TextAreaStyles } from './Styles';

const TextAreaComponentNoMemo: React.FC<TextAreaProps> = (props) => {
  const {
    value,
    placeholder,
    onChangeValue = () => {},
  } = props;
  const inputRef: React.RefObject<HTMLTextAreaElement> = useRef(null);

  const handleOnChange = useCallback((): void => {
    const inputValue: string = inputRef?.current?.value || '';
    onChangeValue(inputValue);
  }, [inputRef]);

  return (
    // @ts-ignore
    <TextAreaStyles {...props}>
      <textarea ref={inputRef} placeholder={placeholder} value={value || ''} onChange={handleOnChange} />
    </TextAreaStyles>
  );
}

const propsAreEqual = (prevProps: TextAreaProps , nextProps: TextAreaProps): boolean => (
  prevProps.onChangeValue === nextProps.onChangeValue &&
  prevProps.placeholder === nextProps.placeholder &&
  prevProps.value === nextProps.value
);

export const TextAreaComponent = React.memo(TextAreaComponentNoMemo, propsAreEqual);
