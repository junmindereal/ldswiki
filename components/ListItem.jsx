const ListItem = () => {
  return (
    <article>
      <div className='space-y-5'>
        <div className='space-y-6'>
          <h2 className='text-2xl font-bold tracking-tight leading-8'>
            <a href='#' className='text-gray-900'>
              Garlic bread with cheese: What the science tells us
            </a>
          </h2>
          <div className='text-gray-500 prose max-w-none'>
            <p>
              For years parents have espoused the health benefits of eating garlic bread with cheese to their
              children, with the food earning such an iconic status in our culture that kids will often dress
              up as warm, cheesy loaf for Halloween.
            </p>
            <p>
              But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
              springing up around the country.
            </p>
          </div>
        </div>
        <div className='text-base font-medium leading-6'>
          <a href='#' className='text-blue-500 hover:text-blue-600' aria-label='Read Garlic bread with cheese'>
            Read More →
          </a>
        </div>
      </div>
    </article>
  )
}

export default ListItem
