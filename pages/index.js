import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function Home () {
  return (
    <>
      <Head>
        <title>LDS Wiki</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-3xl mx-auto'>
        <Navbar />
        <main>
          <article className='prose lg:prose-lg'>
            <h2>Garlic bread with cheese: What the science tells us</h2>
            <p>
              For years parents have espoused the health benefits of eating garlic bread with cheese to their
              children, with the food earning such an iconic status in our culture that kids will often dress
              up as warm, cheesy loaf for Halloween.
            </p>
            <p>
              But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
              springing up around the country.
            </p>
          </article>
        </main>
      </div>
    </>
  )
}
