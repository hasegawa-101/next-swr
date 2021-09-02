import { VFC } from 'react';
import { Layout, Head } from '@src/layouts';
import { PageContext } from '@src/store';
import { usePageReducer } from '@src/hooks';
import Link from 'next/link';

const Page: VFC = () => {
  const currentPage = usePageReducer('0');

  return (
    <PageContext.Provider value={currentPage}>
      <Layout>
        <Head />
        <Link href="/">トップへ</Link>
      </Layout>
    </PageContext.Provider>
  );
};

export default Page;
