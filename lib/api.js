import sanityClient from '@/lib/sanity'

const blogFields = `
  title,
  summary,
  'slug': slug.current,
  'author': author->name,
  launchAt
`

export async function getAllBlogs () {
  return await sanityClient
    .fetch(`*[_type == "blog"]{${blogFields}}`)
}
