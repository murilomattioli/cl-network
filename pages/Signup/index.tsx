import React from 'react';
import { PageSignup } from '../../components';
export interface SignupProps {
  className?: string,
};

const Signup: React.FC<SignupProps> = props => {
  return <PageSignup {...props} />;
}

export default Signup;
