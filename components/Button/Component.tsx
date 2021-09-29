import React, { useCallback, useMemo } from 'react';
import { ButtonProps } from '.';
import { ButtonStyles } from './Styles';

const ButtonComponentNoMemo: React.FC<ButtonProps> = (props) => {
  const {
    text,
    onClick,
  } = props;

  const handleOnClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    //@ts-ignore
    <ButtonStyles {...props} onClick={handleOnClick}>
      <div className='btn-text-wrapper'>
        <span className='text'>{text}</span>
      </div>
    </ButtonStyles>
  );
}

const propsAreEqual = (prevProps: ButtonProps , nextProps: ButtonProps): boolean => (
  prevProps.onClick === nextProps.onClick &&
  prevProps.className === nextProps.className &&
  prevProps.height === nextProps.height &&
  prevProps.text === nextProps.text
);

export const ButtonComponent = React.memo(ButtonComponentNoMemo, propsAreEqual);
