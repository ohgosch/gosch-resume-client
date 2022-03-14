import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import theme from 'visual/theme';

type AppProps = {
  Component: React.ComponentType;
};

const App = ({ Component }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component />
      </ThemeProvider>
    </>
  );
};

export default App;
