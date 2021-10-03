import { useCallback } from "react";
import networkPostsHooks from ".";
import networkPostsActions from "../../actions/NetworkPosts";

type ReturnProps = [(id: number ) => Promise<void>];

export default (): ReturnProps => {
  const [deleteNetworkPosts] = networkPostsActions.useDeleteNetworkPosts();
  const [loadNetworkPosts] = networkPostsHooks.useLoadNetworkPosts();

  const useDeleteNetworkPost = useCallback((id: number ): Promise<void> => {
    return new Promise((resolve, reject) => {
      //@ts-ignore
      deleteNetworkPosts(id).then(() => {
        loadNetworkPosts();
        resolve();
      }).catch(reject);
    })
   }, [deleteNetworkPosts]);

  return [useDeleteNetworkPost];
};
