import { useRouter } from 'next/dist/client/router';
import React, { useCallback, useEffect, useMemo } from 'react';
import { NetworkProps } from '.';
import { Button, PostList, PostManager } from '../../components';
import userHooks from '../../hooks/userHooks';
import { NETWORK_TITLE } from './Constants';
import { PageNetworkStyles } from './Styles';

const PageNetworkComponentNoMemo: React.FC<NetworkProps> = props => {
  const { className = 'page-network' } = props;
  const [authUserWithRedirect] = userHooks.useAuthUserWithRedirect();
  const [removeUser] = userHooks.useRemoveUser();
  const pageNetworkClassName = useMemo(() => ` ${className}`, [className]);

  useEffect(() => {
    authUserWithRedirect('Network');
  }, []);

  const onClickLogout = useCallback(() => {
    const canLogout = confirm('You will be returned to the signup screen.');
    if (canLogout) {
      removeUser()
        .then(() => {
          authUserWithRedirect();
        });
    }
  }, []);

  return (
    <PageNetworkStyles {...props} className={pageNetworkClassName}>
      <title>CL - Network</title>
      <div className='container'>
        <div className='header'>
          <div className='title-wrapper'>
            <span className='title'>{NETWORK_TITLE}</span>
          </div>
          <div className='user-controls-wrapper'>
            <Button icon='signOutAlt' onClick={onClickLogout} />
          </div>
        </div>
        <div className='network-content'>
          <div className='post-manager-wrapper'>
            <PostManager />
          </div>
          <div className='post-list-wrapper'>
            <PostList />
          </div>
        </div>
      </div>
    </PageNetworkStyles>
  )
};
''
const propsAreEqual = (prevProps: NetworkProps, nextProps: NetworkProps): boolean => (
  prevProps.className === nextProps.className
);

export const PageNetworkComponent = React.memo(PageNetworkComponentNoMemo, propsAreEqual);
