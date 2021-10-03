import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import userHooks from ".";
import { DEFAULT_AUTH_ROUTE, RoutesNames } from "../../pages/_app";

type ReturnProps = [(authTarget?: RoutesNames) => void];

export default (): ReturnProps => {
  const router = useRouter()
  const [getUser] = userHooks.useGetUser();
  const [validateUser] = userHooks.useValidateUser();

  const useAuthUserWithRedirect = useCallback((authTarget?: RoutesNames): void => {
    const user = getUser();
    const isValidUser = validateUser(user);
    
    if (isValidUser) {
      router.push(`/${authTarget || DEFAULT_AUTH_ROUTE}`);
    } else {
      router.push('/Signup');
    }
  }, []);

  return [useAuthUserWithRedirect];
};
