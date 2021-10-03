import { useCallback } from "react";
import server from "../library/server";
import { NetworkPostProps } from "../../components";
import { NETWORK_POSTS_END_POINT_URL } from "./Constants";

type ReturnProps = [() => Promise<{  count: number | null, next: string | null, previous: string | null, results: Array<NetworkPostProps> }>];

export default (): ReturnProps => {
  const [useGet] = server.useGet();

  const useGetNetworkPosts = useCallback((): Promise<{  count: number | null, next: string | null, previous: string | null, results: Array<NetworkPostProps> }> => {
    return new Promise((resolve, reject) => {
      useGet(NETWORK_POSTS_END_POINT_URL)
        .then(data => {
          //@ts-ignore
          resolve(data);
        }).catch(reject);
    });
  }, []);

  return [useGetNetworkPosts];
};
