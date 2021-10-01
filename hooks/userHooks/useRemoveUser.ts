import { useCallback } from "react";
import { LocalStorageUserKey } from "./types/LocalStorageUserKey";

type ReturnProps = [() => Promise<boolean>];

export default (): ReturnProps => {
  const useRemoveUser = useCallback((): Promise<boolean> => new Promise((resolve) => {
    const userKey: LocalStorageUserKey = 'user';
    localStorage.removeItem(userKey);
    resolve(true);
  }), []);

  return [useRemoveUser];
};
