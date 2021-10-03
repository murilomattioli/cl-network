import React, { useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonProperties, DEFAULT_ICONS } from '.';
import { ButtonStyles } from './Styles';
import { Colors } from '../../styles/Colors';

const ButtonComponentNoMemo: React.FC<ButtonProperties> = (props) => {
  const {
    className,
    text,
    icon,
    disabled,
    color = 'black',
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

  const buttonClassName = useMemo(() => `button${className ? ' ' + className : ''}${showIcon ? ' --btn-icon' : ''}${disabled ? ' --btn-disabled' : ''}`
    , [className, showIcon, disabled]);

  const iconColor = useMemo(() => (color === 'black' ? 'white' : 'black'), [color]);

  return (
    //@ts-ignore
    <ButtonStyles {...props} className={buttonClassName} onClick={handleOnClick}>
      <div className='btn-content'>
        {showIcon && iconName && (
          <FontAwesomeIcon icon={iconName} style={{ fontSize: 16, color: Colors?.[iconColor] }} />
        )}
        {showText && (
          <div className='btn-text-wrapper'>
            <span className='text'>{text}</span>
          </div>
        )}
      </div>
    </ButtonStyles>
  );
}

const propsAreEqual = (prevProps: ButtonProperties, nextProps: ButtonProperties): boolean => (
  prevProps.onClick === nextProps.onClick &&
  prevProps.className === nextProps.className &&
  prevProps.height === nextProps.height &&
  prevProps.text === nextProps.text
);

export const ButtonComponent = React.memo(ButtonComponentNoMemo, propsAreEqual);
