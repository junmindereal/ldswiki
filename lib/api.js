import sanityClient from '@/lib/sanity'

export async function getAllBlogs () {
  return await sanityClient
    .fetch('*[_type == "blog"]{title, summary, slug}')
}
