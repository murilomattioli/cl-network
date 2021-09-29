import React, { useCallback, useMemo } from 'react';
import { ButtonProps } from '.';
import { ButtonStyles } from './Styles';

const ButtonComponentNoMemo: React.FC<ButtonProps> = (props) => {
  const {
    text,
    className,
    onClick,
  } = props;

  const handleOnClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const buttonClassName = useMemo(() => `btn ${className}`, [className]);

  return (
    //@ts-ignore
    <ButtonStyles {...props} className={buttonClassName} onClick={handleOnClick}>
      <div className='btn-text-wrapper'>
        <span className='text'>{text}</span>
      </div>
    </ButtonStyles>
  );
}

const propsAreEqual = (prevProps: ButtonProps , nextProps: ButtonProps): boolean => (
  prevProps.onClick === nextProps.onClick &&
  prevProps.height === nextProps.height &&
  prevProps.text === nextProps.text
);

export const ButtonComponent = React.memo(ButtonComponentNoMemo, propsAreEqual);
