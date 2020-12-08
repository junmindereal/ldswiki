const BlogHeader = ({ title, launchAt, author }) => {
  const date = new Date(launchAt).toLocaleDateString(
    'en-us',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  )

  return (
    <header className='pt-10 pb-4'>
      <h1 className='text-5xl font-bold '>{title}</h1>
      <p className='mt-6 text-gray-500'>
        {date} by {author}
      </p>
    </header>
  )
}

export default BlogHeader
