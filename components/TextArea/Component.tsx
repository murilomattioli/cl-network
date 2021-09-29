import React, { useCallback, useRef } from 'react';
import { TextAreaProps } from '.';
import { TextAreaStyles } from './Styles';

const TextAreaComponentNoMemo: React.FC<TextAreaProps> = (props) => {
  const {
    value,
    placeholder,
    onChange,
  } = props;
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleOnChange = useCallback(() => {
    const newValue: string | undefined = inputRef.current?.value;

    if (onChange) {
      onChange(newValue);
    }
  }, [inputRef, onChange]);

  return (
    // @ts-ignore
    <TextAreaStyles {...props}>
      <textarea ref={inputRef} placeholder={placeholder} value={value} onChange={handleOnChange} />
    </TextAreaStyles>
  );
}

const propsAreEqual = (prevProps: TextAreaProps , nextProps: TextAreaProps): boolean => (
  prevProps.onChange === nextProps.onChange &&
  prevProps.placeholder === nextProps.placeholder &&
  prevProps.value === nextProps.value
);

export const TextAreaComponent = React.memo(TextAreaComponentNoMemo, propsAreEqual);
