import { useCallback } from "react";
import { UserType } from "./types";
import { LocalStorageUserKey } from "./types/LocalStorageUserKey";

type ReturnProps = [() => UserType];

export default (): ReturnProps => {
  const findUserLocalStorage = useCallback((): UserType => {
    const userKey: LocalStorageUserKey = 'user';
    const user: UserType = {
      username: localStorage.getItem(userKey) || ''
    }

    return user;
  }, []);

  return [findUserLocalStorage];
};
