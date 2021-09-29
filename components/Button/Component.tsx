import React, { useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonProps, DEFAULT_ICONS } from '.';
import { ButtonStyles } from './Styles';
import { Colors } from '../../styles/Colors';

const ButtonComponentNoMemo: React.FC<ButtonProps> = (props) => {
  const {
    className,
    text,
    icon,
    onClick,
  } = props;

  const handleOnClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const showIcon = useMemo((): boolean => icon !== undefined, [icon]);

  const showText = useMemo((): boolean => text !== undefined && !showIcon, [text, showIcon]);

  const iconName = useMemo(() => {
    if (icon) {
      return DEFAULT_ICONS?.[icon];
    } else return '';
  }, [icon]);

  return (
    //@ts-ignore
    <ButtonStyles {...props} className={`${className} button${showIcon ? ' --btn-icon' : ''}`} onClick={handleOnClick}>
      {showIcon && iconName && (
        <FontAwesomeIcon icon={iconName} style={{ fontSize: 16, color: Colors.white}} />
      )}
      {showText && (
        <div className='btn-text-wrapper'>
            <span className='text'>{text}</span>
        </div>
      )}
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
