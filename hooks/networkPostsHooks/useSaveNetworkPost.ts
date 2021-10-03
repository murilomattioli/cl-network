import { useCallback } from "react";
import networkPostsHooks from ".";
import networkPostsActions from "../../actions/NetworkPosts";
import { BodyPatchNetworkPost, BodyPostNetworkPost } from "../../actions/NetworkPosts/types";

type ReturnProps = [(newNetworkPost: BodyPostNetworkPost | BodyPatchNetworkPost ) => Promise<void>];

export default (): ReturnProps => {
  const [postNetworkPosts] = networkPostsActions.usePostNetworkPosts();
  const [patchNetworkPosts] = networkPostsActions.usePatchNetworkPosts();
  const [loadNetworkPosts] = networkPostsHooks.useLoadNetworkPosts();

  const useSaveNetworkPost = useCallback((newNetworkPost: BodyPatchNetworkPost | BodyPostNetworkPost ): Promise<void> => {
    
    //@ts-ignore
    const method = newNetworkPost?.id ? 'patch' : 'post';
    const saveNetworkPost = method === 'patch' ? patchNetworkPosts : postNetworkPosts;

    return new Promise((resolve, reject) => {
      //@ts-ignore
      saveNetworkPost(newNetworkPost).then(() => {
        loadNetworkPosts();
        resolve();
      }).catch(reject);
    })
   }, [patchNetworkPosts, postNetworkPosts]);

  return [useSaveNetworkPost];
};
