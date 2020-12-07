import Head from 'next/head'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

const about = () => {
  return (
    <>
      <Head>
        <title>About LDS Wiki</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageLayout>
        <h1> About </h1>
        <Link href='/'>
          <a>Back to Home</a>
        </Link>
      </PageLayout>
    </>
  )
}

export default about
