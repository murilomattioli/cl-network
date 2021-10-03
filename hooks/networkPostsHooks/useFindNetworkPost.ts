import { useCallback } from "react";
import { useSelector } from "react-redux";
import { NetworkPostProps } from "../../components";
import { InitialStateProps } from "../../redux/types";

type ReturnProps = [(id: number ) => NetworkPostProps | undefined];

export default (): ReturnProps => {
  const networkPosts = useSelector((state: InitialStateProps) => state.networkPosts);

  const useFindNetworkPost = useCallback((id: number ): NetworkPostProps | undefined => {
    for (const networkPost of networkPosts) {
      if (networkPost?.id === id) {
        return networkPost;
      }
    }
   }, [networkPosts]);

  return [useFindNetworkPost];
};
