import { AppProps } from 'next/app';
import '@aws-amplify/ui-react/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;