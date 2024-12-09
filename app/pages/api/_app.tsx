import { ClerkProvider } from '@clerk/nextjs';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider>
     
        <Component {...pageProps} />
      
    </ClerkProvider>
  );
};

export default App;
