import { useCallback } from "react";
import { UserType } from "./types";
import { LOCAL_STORAGE_USER_KEY } from "./types/LocalStorageUserKey";

type ReturnProps = [(newUser: UserType) => Promise<UserType> | null];

export default (): ReturnProps => {
  const setUserLocalStorage = useCallback((newUser: UserType): Promise<UserType> => {
    return new Promise((resolve, reject) => {
      const isValidUser = true;

      if (isValidUser) {
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, newUser.username);
        resolve(newUser);
      } else {
        reject(Error('Not authenticated.'));
      }
    });
  }, []);

  return [setUserLocalStorage];
};
