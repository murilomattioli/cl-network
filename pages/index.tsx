import type { NextPage } from 'next'
import { useEffect } from 'react';
import userHooks from '../hooks/userHooks';

const Init: NextPage = () => {
  const [authUserWithRedirect] = userHooks.useAuthUserWithRedirect();

  useEffect(() => {
    authUserWithRedirect();
  }, []);

  return <div className='root' />
}

export default Init;
