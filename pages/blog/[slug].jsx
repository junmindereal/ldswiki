import {useRouter} from 'next/router'
import PageLayout from '@/components/PageLayout'
import BlogHeader from '@/components/BlogHeader'
import BlogContent from '@/components/BlogContent'
import {getBlogBySlug, getAllBlogs} from '@/lib/api'

const BlogDetail = ({blog}) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <PageLayout title="Loading..."></PageLayout>
    )
  }

  return (
    <PageLayout pageTitle={blog.title} description={blog.summary} slug={blog.slug}>
      <BlogHeader
        title={blog.title}
        launchAt={blog.launchAt}
        author={blog.author}
      />
      <main className='prose lg:prose-lg'>
        <BlogContent content={blog.content} />
      </main>
    </PageLayout>
  )
}

export async function getStaticProps({params}) {
  const blog = await getBlogBySlug(params.slug)
  return {
    props: {blog},
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs()

  return {
    paths: blogs?.map(blog => ({params: {slug: blog.slug}})),
    fallback: true
  }
}

export default BlogDetail
