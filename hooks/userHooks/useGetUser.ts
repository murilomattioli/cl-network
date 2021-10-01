import { useCallback } from "react";
import { UserType } from "./types";
import { LocalStorageUserKey } from "./types/LocalStorageUserKey";

type ReturnProps = [() => UserType];

export default (): ReturnProps => {
  const findUserLocalStorage = useCallback((): UserType => {
    const userKey: LocalStorageUserKey = 'user';
    const name = typeof window !== 'undefined' ? localStorage?.getItem(userKey) : '';
    const user: UserType = {
      username: name || ''
    }

    return user;
  }, []);

  return [findUserLocalStorage];
};
