import useDeleteNetworkPosts from "./useDeleteNetworkPosts";
import useGetNetworkPosts from "./useGetNetworkPosts";
import usePatchNetworkPosts from "./usePatchNetworkPosts";
import usePostNetworkPosts from "./usePostNetworkPosts";

const networkPostsActions = {
  useGetNetworkPosts,
  usePostNetworkPosts,
  usePatchNetworkPosts,
  useDeleteNetworkPosts
}
export default networkPostsActions;
