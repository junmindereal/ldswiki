import BlockContent from '@sanity/block-content-to-react'

const serializers = {
  marks: {
    link: ({ mark, children }) => {
      const { blank, href } = mark
      return blank
        ? <a href={href} target='_blank' rel='noopener noreferrer'>{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}

const BlogContent = ({ content }) => {
  return (
    <BlockContent
      blocks={content}
      serializers={serializers}
    />
  )
}

export default BlogContent
