import React, { useState } from 'react'
import Head from 'next/head'
import PageLayout from '@/components/PageLayout'
import ListItem from '@/components/ListItem'
import { getAllBlogs } from '@/lib/api'

export default function Home ({ blogs }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = blogs
    .sort(
      (a, b) =>
        Number(new Date(b.launchAt)) - Number(new Date(a.launchAt))
    )
    .filter(blog =>
      blog.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  return (
    <>
      <Head>
        <title>LDS Wiki</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageLayout>
        <div className='relative flex items-center mt-8 text-gray-300 xl:mt-14 group focus-within:text-blue-500'>
          <svg className='absolute w-6 h-6 stroke-current transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /></svg>
          <input
            className='w-full py-3 pl-10 text-base text-gray-900 placeholder-gray-300 border-b border-gray-300 xl:text-xl transition-colors focus:outline-none focus:border-blue-500'
            aria-label='Search articles'
            placeholder='Search Articles'
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {!filteredBlogPosts.length &&
          <p className='mt-12 text-base'>Sorry, nothing matched that search.</p>}
        {filteredBlogPosts.map(blog =>
          <ListItem
            key={blog.slug}
            title={blog.title}
            summary={blog.summary}
            launchAt={blog.launchAt}
            author={blog.author}
            slug={blog.slug}
            link={{
              href: 'blog/[slug]',
              as: `/blog/${blog.slug}`
            }}
          />
        )}
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
