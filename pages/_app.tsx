import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { store } from "../store/store";
import { Provider } from "react-redux";
//!in next it is file analog index.ts in src folder
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
