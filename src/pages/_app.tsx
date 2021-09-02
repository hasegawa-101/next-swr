import '@src/styles/reset.css';
import '@src/styles/tailwind.css';
import { VFC } from 'react';
import { AppProps } from 'next/app';
import 'what-input';

import { SWRConfig } from 'swr';
import { fetcher } from '@src/utilities/fetcher';

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default MyApp;
