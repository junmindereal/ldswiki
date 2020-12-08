const BlogHeader = ({ title, launchAt, author }) => {
  return (
    <header className='py-10'>
      <h1 className='text-5xl font-bold '>{title}</h1>
      <p className='mt-6 text-gray-500'>
        <span>
          {new Date(launchAt).toLocaleDateString(
            'en-us',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }
          )}
        </span>
        <span className='mx-2'>by</span>
        <span>{author}</span>
      </p>
    </header>
  )
}

export default BlogHeader
