import { UserType } from "../../../hooks/userHooks/types";

export type UserActionType = {
  type: 'user/set',
  value: UserType,
};
