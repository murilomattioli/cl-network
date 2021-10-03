import React, { useCallback, useRef, useState } from 'react';
import { TextAreaProps } from '.';
import { TextAreaStyles } from './Styles';

const TextAreaComponentNoMemo: React.FC<TextAreaProps> = (props) => {
  const {
    onChangeValue = () => { },
    children,
    ...textareaProps
  } = props;
  const inputRef: React.RefObject<HTMLTextAreaElement> = useRef(null);

  const handleOnChange = useCallback((): void => {
    const inputValue: string = inputRef?.current?.value || '';
    onChangeValue(inputValue);
  }, [inputRef]);

  return (
    // @ts-ignore
    <TextAreaStyles {...props}>
      <textarea {...textareaProps} ref={inputRef} onChange={handleOnChange} />
    </TextAreaStyles>
  );
}

const propsAreEqual = (prevProps: TextAreaProps, nextProps: TextAreaProps): boolean => (
  prevProps.onChangeValue === nextProps.onChangeValue &&
  prevProps.placeholder === nextProps.placeholder &&
  prevProps.value === nextProps.value
);

export const TextAreaComponent = React.memo(TextAreaComponentNoMemo, propsAreEqual);
