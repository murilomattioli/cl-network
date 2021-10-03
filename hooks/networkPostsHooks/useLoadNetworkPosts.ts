import { useCallback } from "react";
import { useDispatch } from 'react-redux';
import networkPostsActions from "../../actions/NetworkPosts";
import { NetworkPostsActionType } from "../../redux/types/Actions/NetworkPostsActionType";

type ReturnProps = [() => void];

export default (): ReturnProps => {
  const [getNetworkPosts] = networkPostsActions.useGetNetworkPosts();
  const dispatch = useDispatch();

  const useLoadNetworkPosts = useCallback((): void => {
    getNetworkPosts()
      .then((data) => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            //@ts-ignore
            const element = data[key];
            const networkPosts = element?.results;
            if (Array.isArray(networkPosts)) {
              dispatch<NetworkPostsActionType>({
                type: 'networkPosts/set',
                value: networkPosts,
              });
            }
          }
        }
      });
   }, []);

  return [useLoadNetworkPosts];
};
