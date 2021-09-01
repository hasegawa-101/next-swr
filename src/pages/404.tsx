import { VFC } from 'react';
import { Layout, Head } from '@src/layouts';
import { PageContext } from '@src/store';
import { usePageReducer } from '@src/hooks';
import Link from 'next/link'

const Page: VFC = () => {
  const currentPage = usePageReducer('999999', (page) => ({
    ...page,
    // path: location.pathname,
  }));

  return (
    <PageContext.Provider value={currentPage}>
      <Layout>
        <Head />
        <p>お探しのページは見つかりませんでした</p>
        <Link href="/">トップへ戻る</Link>
      </Layout>
    </PageContext.Provider>
  );
};

export default Page;
