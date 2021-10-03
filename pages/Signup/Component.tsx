import React, { useEffect, useMemo } from 'react';
import { ModalSignup } from '../../components/ModalSignup';
import userHooks from '../../hooks/userHooks';
import { PageSignupStyles } from './Styles';
import { SignupProps } from './Types';

const PageSignupComponentNoMemo: React.FC<SignupProps> = props => {
  const { className } = props;
  const [authUserWithRedirect] = userHooks.useAuthUserWithRedirect();
  const signupClassName = useMemo(() => `page-sign-up ${className}`, []);

  useEffect(() => {
    authUserWithRedirect('Network');
  }, []);

  return (
    <PageSignupStyles {...props} className={signupClassName}>
      <title>CL - Signup</title>
      <ModalSignup />
    </PageSignupStyles>
  )
};
''
const propsAreEqual = (prevProps: SignupProps, nextProps: SignupProps): boolean => (
  prevProps.className === nextProps.className
);

export const PageSignupComponent = React.memo(PageSignupComponentNoMemo, propsAreEqual);
