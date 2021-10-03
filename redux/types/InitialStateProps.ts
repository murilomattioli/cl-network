import { NetworkPostProps } from "../../components";
import { UserType } from "../../hooks/userHooks/types";

export type InitialStateProps = {
  user: UserType | null,
  networkPosts: Array<NetworkPostProps>,
};
