import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const siteName = 'LDS Wiki'
const url = 'https://ldswiki.org/'
const image = 'img/ldswiki.png'

const PageLayout = ({ children, pageTitle, description, slug }) => {
  return (
    <>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/android-chrome-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/android-chrome-512x512.png' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#0EA5E9' />
        <link rel='manifest' href='/site.webmanifest' />

        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width' />
        <meta name='msapplication-TileColor' content='#0EA5E9' />
        <meta name='theme-color' content='#ffffff' />

        <meta property='og:url' content={slug ? url + slug : url} key='ogurl' />
        <meta property='og:site_name' content={siteName} key='ogsitename' />
        <meta property='og:title' content={pageTitle} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
        <meta property='og:image' content={`https://ldswiki.org/${image}`} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={`https://ldswiki.org/${image}`} />

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
