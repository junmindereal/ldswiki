import Head from 'next/head'
import PageLayout from '@/components/PageLayout'
import ListItem from '@/components/ListItem'

export default function Home () {
  return (
    <>
      <Head>
        <title>LDS Wiki</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageLayout>
        <ListItem />
      </PageLayout>
    </>
  )
}
