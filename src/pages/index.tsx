import { VFC } from 'react';
import { Layout, Head } from '@src/layouts';
import { PageContext } from '@src/store';
import { usePageReducer } from '@src/hooks';
import Link from 'next/link';

import useSWRImmutable from 'swr/immutable';
import { SWRConfig } from 'swr';
// import useSWR from 'swr';
// import { fetcher } from '../utilities/fetcher';

const API = 'https://jsonplaceholder.typicode.com/posts';

export const getStaticProps = async () => {
  const res = await fetch(API);
  const data = await res.json();
  return {
    props: {
      fallback: {
        [API]: data,
      },
    },
  };
};

const Page: VFC = (props) => {
  const currentPage = usePageReducer('1');
  const { data, error } = useSWRImmutable(API);
  // const { data, error } = useSWR(API);
  console.log({ data, error });
  return (
    <SWRConfig>
      <PageContext.Provider value={currentPage}>
        <Layout>
          <Head />
          {data.length}
          <Link href="/template">templateへ</Link>
        </Layout>
      </PageContext.Provider>
    </SWRConfig>
  );
};

export default Page;
