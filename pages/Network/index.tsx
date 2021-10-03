import React, { useCallback, useMemo } from 'react';
import { PageNetworkComponent } from './Component';
import { useRouter } from 'next/dist/client/router';
import { ModalConfirm, ModalCustom, PostManager } from '../../components';
import { DELETE_NETWORK_POST_CONFIRM_TITLE } from './Constants';
import networkPostsHooks from '../../hooks/networkPostsHooks';
export interface NetworkProps {
  className?: string,
};

const PageNetwork: React.FC<NetworkProps> = props => {
  const router = useRouter();
  const [deleteNetworkPost] = networkPostsHooks.useDeleteNetworkPost();
  const [findNetworkPost] = networkPostsHooks.useFindNetworkPost();
  const patchId = useMemo(() => (typeof window !== 'undefined' ? new URL(location?.href).searchParams.get('patch') : null), [router]);
  const patchItem = useMemo(() => findNetworkPost(Number(patchId)), [patchId]);
  const showEditModal = useMemo((): boolean => !!patchId, [patchId]);
  const deleteId = useMemo(() => (typeof window !== 'undefined' ? new URL(location?.href).searchParams.get('delete') : null), [router]);
  const showDeleteModal = useMemo((): boolean => !!deleteId, [deleteId]);

  const handleDeleteNetworkPost = useCallback(() => {
    const id = Number(deleteId);
    if (typeof id === 'number') {
      deleteNetworkPost(id);
    }
  }, [deleteId]);

  const onClosePostManagerModal = useCallback(() => router.back(), [router]);

  return (
    <React.Fragment>
      <PageNetworkComponent {...props} />
      {showDeleteModal && (
        <ModalConfirm title={DELETE_NETWORK_POST_CONFIRM_TITLE} onConfirm={handleDeleteNetworkPost} />
      )}
      {showEditModal && patchItem && (
        <ModalCustom onClickClose={onClosePostManagerModal} component={<PostManager {...patchItem} onSave={onClosePostManagerModal} />} />
      )}
    </React.Fragment>
  );
}

export default PageNetwork;
