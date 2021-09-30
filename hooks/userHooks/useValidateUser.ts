import { useCallback } from "react";
import { UserType } from "./types";

type ReturnProps = [(user: Partial<UserType>) => boolean];

export default (): ReturnProps => {
  const useValidateUser = useCallback((user: Partial<UserType>): boolean => (
    user?.username !== undefined &&
    user?.username?.length > 0
  ), []);

  return [useValidateUser];
};
