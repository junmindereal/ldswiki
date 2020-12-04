import Head from 'next/head'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h2 className='text-xl text-blue-500 mx-auto'>NextJS + Tailwind</h2>
      </main>
    </div>
  )
}
