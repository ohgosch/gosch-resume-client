import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import Header from 'components/Header';
import theme from 'visual/theme';
import Footer from 'components/Footer';

type AppProps = {
  Component: React.ComponentType;
};

const App = ({ Component }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rufina:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(App);
