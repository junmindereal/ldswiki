import Head from 'next/head'
import PageLayout from '@/components/PageLayout'
import ListItem from '@/components/ListItem'

import { getAllBlogs } from '@/lib/api'

export default function Home ({ blogs }) {
  return (
    <>
      <Head>
        <title>LDS Wiki</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageLayout>
        {JSON.stringify(blogs)}
        <ListItem />
      </PageLayout>
    </>
  )
}

export async function getStaticProps () {
  const blogs = await getAllBlogs()
  return {
    props: {
      blogs
    }
  }
}
