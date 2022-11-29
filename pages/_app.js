import "../styles/globals.css";

import SideNav from "../components/SideNav/SideNav";

function MyApp({ Component, pageProps }) {
  return (
    <SideNav>
      <Component {...pageProps} />
    </SideNav>
  );
}

export default MyApp;
