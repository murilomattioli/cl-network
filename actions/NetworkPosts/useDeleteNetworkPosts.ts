import { useCallback } from "react";
import server from "../library/server";
import { NETWORK_POSTS_END_POINT_URL } from "./Constants";
import networkPostsHooks from "../../hooks/userHooks/networkPostsHooks";

type ReturnProps = [(id: number) => Promise<void>];

export default (): ReturnProps => {
  const [useDelete] = server.useDelete();
  const [loadNetworkPosts] = networkPostsHooks.useLoadNetworkPosts();

  const useDeleteNetworkPosts = useCallback((id: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      useDelete(NETWORK_POSTS_END_POINT_URL, id)
        .then(() => {
          loadNetworkPosts();
          resolve();
        }).catch(reject);
    });
  }, [loadNetworkPosts]);

  return [useDeleteNetworkPosts];
};
