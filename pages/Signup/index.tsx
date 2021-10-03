import React from 'react';
import { PageSignupComponent } from './Component';
export interface SignupProps {
  className?: string,
};

const PageSignup: React.FC<SignupProps> = props => {
  return <PageSignupComponent {...props} />;
}

export default PageSignup;
