import { wrapper } from '@src/redux/store';
import '@src/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
// import { store } from '@src/redux/store';


export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
