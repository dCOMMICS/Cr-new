/* pages/_app.tsx */
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  <>
    <style jsx global>
      {`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
        }
      `}
    </style>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
};