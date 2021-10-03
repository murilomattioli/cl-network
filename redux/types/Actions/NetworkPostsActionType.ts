import { NetworkPostProps } from "../../../components";

export type NetworkPostsActionType = {
  type: 'networkPosts/set',
  value: Array<NetworkPostProps>,
} | {
  type: 'networkPosts/delete',
  id: number,
} | {
  type: 'networkPosts/edit',
  value: NetworkPostProps,
}

