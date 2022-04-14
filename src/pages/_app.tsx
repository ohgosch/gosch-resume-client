import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import Footer from 'components/Footer';
import theme from 'visual/theme';

const App = ({ Component, pageProps }: AppProps) => {
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
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(App);
