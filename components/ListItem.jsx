const ListItem = ({ title, summary, launchAt, author }) => {
  return (
    <article className='py-12'>
      <div className='space-y-5'>
        <div className='space-y-6'>
          <h2 className='text-2xl font-bold tracking-tight leading-8'>
            <a href='#' className='text-gray-900 hover:text-blue-500'>
              {title}
            </a>
          </h2>
          <div className='text-gray-500 prose max-w-none'>
            <p>
              {summary}
            </p>
            {launchAt
              ? <p>
                {new Date(launchAt).toLocaleDateString(
                  'en-us',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }
                )}
                </p>
              : null}
            <p>{author}</p>
          </div>
        </div>
        <div className='text-base font-medium leading-6'>
          <a href='#' className='text-blue-500 hover:text-blue-600' aria-label={`Read ${title}`}>
            Read More →
          </a>
        </div>
      </div>
    </article>
  )
}

export default ListItem
