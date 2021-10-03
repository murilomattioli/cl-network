import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux'

function MyApp({ Component, pageProps, router }: AppProps) {
  // const componentProps = useMemo(() => {
  //   const hasProps = (Object.entries(pageProps)?.length > 0) &&
  //     !(Array.isArray(pageProps)) &&
  //     (pageProps !== null) &&
  //     (pageProps !== undefined);

  //   if (hasProps) {
  //     return pageProps;
  //   } else return {}
  // }, []);

  return (
    <>
      <Provider store={store}>
        <Component router={router} {...pageProps}></Component>
      </Provider>
    </>
  );
}
export default MyApp
