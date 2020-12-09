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
      <h1 className='text-3xl font-bold xl:text-5xl '>{title}</h1>
      <p className='mt-4 text-base text-gray-500 xl:mt-6 lg:text-base'>
        {date} by {author}
      </p>
    </header>
  )
}

export default BlogHeader
