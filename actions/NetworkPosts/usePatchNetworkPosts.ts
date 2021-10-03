import { useCallback } from "react";
import { BodyPatchNetworkPost } from "./types";
import server from "../library/server";
import { NetworkPostProps } from "../../components";
import { NETWORK_POSTS_END_POINT_URL } from "./Constants";

type ReturnProps = [(body: BodyPatchNetworkPost) => Promise<Array<Partial<NetworkPostProps>>>];

export default (): ReturnProps => {
  const [usePatch] = server.usePatch();

  const usePatchNetworkPosts = useCallback((body: Partial<NetworkPostProps> & BodyPatchNetworkPost): Promise<Array<Partial<NetworkPostProps>>> => {
    const { id, created_datetime, username, ...formatedBody } = body;
    return usePatch(`${NETWORK_POSTS_END_POINT_URL}${body.id}/`, formatedBody);
  }, []);

  return [usePatchNetworkPosts];
};
