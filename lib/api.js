import sanityClient from '@/lib/sanity'

const blogFields = `
  title,
  summary,
  'slug': slug.current,
  'author': author->name,
  launchAt
`

export async function getAllBlogs() {
  return await sanityClient
    .fetch(`*[_type == "blog"]{${blogFields}}`)
}

export async function getBlogBySlug(slug) {
  return await sanityClient
    .fetch(`*[_type == "blog" && slug.current == $slug]{
      ${blogFields},
      content
    }`, {slug}).then(res => res?.[0])
}
