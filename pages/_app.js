import Header from "../components/Header";
import Nav from "../components/Nav";
import "../styles/globals.css";
import reducer, { initialState } from "../components/reducer";
import { StateProvider } from "../components/stateProvider";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Header />
      <Nav />
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
