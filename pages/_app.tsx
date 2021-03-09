import '../styles/globals.scss';

import { Chakra } from '../components/ColorModeManager';

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;
