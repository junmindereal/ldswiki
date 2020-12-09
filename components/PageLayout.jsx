import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PageLayout = ({ children, pageTitle, description, slug }) => {
  const siteName = 'LDS Wiki'
  const url = 'https://ldswiki.org/'
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width' />
        <meta charSet='utf-8' />
        <meta name='description' content={description} />

        <meta property='og:url' content={slug ? url + slug : url} key='ogurl' />
        <meta property='og:site_name' content={siteName} key='ogsitename' />
        <meta property='og:title' content={pageTitle} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
        <title>{pageTitle}</title>
      </Head>
      <div className='max-w-2xl px-4 mx-auto antialiased xl:px-0'>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default PageLayout
