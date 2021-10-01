import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { 
  ModalSignupProps,
  SIGN_UP_MODAL_CONFIRM_BUTTON_TEXT,
  SIGN_UP_MODAL_INPUT_LABEL,
  SIGN_UP_MODAL_INPUT_PLACEHOLDER,
  SIGN_UP_MODAL_TITLE
} from '.';
import { ModalSignupStyles } from './Styles';
import { Button, Input } from '..';
import userHooks from '../../hooks/userHooks';
import { UserType } from '../../hooks/userHooks/types';

const ModalSignupComponentNoMemo: React.FC<ModalSignupProps> = (props) => {
  const {
    className,
  } = props;
  const [username, setUsername] = useState<string>();
  const isValidUsername = useMemo(() => (username !== undefined && username?.length > 0), [username]);
  const ModalSignupClassName = useMemo(() => `modal-center ${className}`, [className]);
  const [setUser] = userHooks.useSetUser();
  const [validateUser] = userHooks.useValidateUser();
  const [getUser] = userHooks.useGetUser();
  const [authUserWithRedirect] = userHooks.useAuthUserWithRedirect();

  const handleConfirmSignUp = useCallback(() => {
    const newUser: Partial<UserType> = { username };
    const isValidUser = validateUser(newUser);
    
    if (isValidUser) {
      new Promise((resolve) => {
        //@ts-ignore
        setUser(newUser);
        resolve(newUser);
      }).then(() => {
        authUserWithRedirect('Network');
      });
    } else {
      alert('Invalid username');
    }
  }, [username, setUser, validateUser, getUser, authUserWithRedirect]);

  return (
    //@ts-ignore
    <ModalSignupStyles {...props} className={ModalSignupClassName}>
      <div className='content'> 
        <div className='title-wrapper'>
          <span className='title'>{SIGN_UP_MODAL_TITLE}</span>
        </div>
        <div className='label-wrapper'>
          <span className='label'>{SIGN_UP_MODAL_INPUT_LABEL}</span>
        </div>
        <div className='input-wrapper'>
          <Input
            autoFocus
            value={username}
            onChangeValue={setUsername}
            placeholder={SIGN_UP_MODAL_INPUT_PLACEHOLDER}
          />
        </div>
        <div className='button-wrapper'>
          <Button
            text={SIGN_UP_MODAL_CONFIRM_BUTTON_TEXT}
            onClick={handleConfirmSignUp}
            disabled={!isValidUsername}
          />
        </div>
      </div>
    </ModalSignupStyles>
  );
}

const propsAreEqual = (prevProps: ModalSignupProps , nextProps: ModalSignupProps): boolean => (
  prevProps.className === nextProps.className
);

export const ModalSignupComponent = React.memo(ModalSignupComponentNoMemo, propsAreEqual);
