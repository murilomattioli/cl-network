import { useCallback } from "react";
import { BodyPostNetworkPost } from "./types";
import server from "../library/server";
import { NetworkPostProps } from "../../components";
import { NETWORK_POSTS_END_POINT_URL } from "./Constants";

type ReturnProps = [(body: BodyPostNetworkPost) => Promise<Array<Partial<NetworkPostProps>>>];

export default (): ReturnProps => {
  const [usePost] = server.usePost();

  const usePostNetworkPosts = useCallback((body: Partial<NetworkPostProps> & BodyPostNetworkPost): Promise<Array<Partial<NetworkPostProps>>> => {
    const { id, created_datetime, ...formatedBody } = body;
    return usePost(NETWORK_POSTS_END_POINT_URL, formatedBody);
  }, []);

  return [usePostNetworkPosts];
};
