import Header from "../components/Header";
import Nav from "../components/Nav";
import "../styles/globals.css";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./stateProvider";

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
