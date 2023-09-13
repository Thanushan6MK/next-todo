import React, {FC} from 'react';
import SinglePost from '@/components/singlePost';
import Head from 'next/head'

interface PageProps {
  params: {
    id: number;
    title : string;
  };
}


const SinglePostPage: FC<PageProps> = ({params}) => {
  return (
    <>
        <Head>
        <title>{params.title}</title>
        </Head>
        <SinglePost id = {params.id} />
    </>
  );
};

export default SinglePostPage;
