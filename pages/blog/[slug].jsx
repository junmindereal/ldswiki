import PageLayout from '@/components/PageLayout'
import BlogHeader from '@/components/BlogHeader'
import { getBlogBySlug, getAllBlogs } from '@/lib/api'

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout>
      <BlogHeader
        title={blog.title}
        launchAt={blog.launchAt}
        author={blog.author}
      />
      <main />
    </PageLayout>
  )
}

export async function getStaticProps ({ params }) {
  const blog = await getBlogBySlug(params.slug)
  return {
    props: { blog }
  }
}

export async function getStaticPaths () {
  const blogs = await getAllBlogs()

  return {
    paths: blogs?.map(blog => ({ params: { slug: blog.slug } })),
    fallback: false
  }
}

export default BlogDetail
