import Link from 'next/link'

const ListItem = ({ title, summary, link }) => {
  return (
    <article className='pt-12'>
      <div className='space-y-4'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold tracking-tight leading-8'>
            <Link {...link}>
              <a className='text-gray-900 hover:text-blue-500'>
                {title}
              </a>
            </Link>
          </h2>
          <div className='text-gray-500 prose max-w-none'>
            <p>
              {summary}
            </p>
          </div>
        </div>
        <div className='text-base font-medium leading-6'>
          <Link {...link}>
            <a className='text-blue-500 hover:text-blue-600' aria-label={`Read ${title}`}>
              Read More →
            </a>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ListItem
