import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PageLayout = ({ children, pageTitle, description }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width' />
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
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
