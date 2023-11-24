import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import LayoutWrapper from '../components/LayoutWrapper';
import '../styles/globals.css';
import '../styles/twemoji.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class'>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper >
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
};

export default App