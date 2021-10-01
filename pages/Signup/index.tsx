import React from 'react';
import { SignupProps } from './Types';
import { PageSignupComponent } from './Component';

const PageSignup: React.FC<SignupProps> = props => {
  return <PageSignupComponent {...props} />;
}

export default PageSignup;
