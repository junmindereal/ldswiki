const Footer = () => {
  const link = 'https://junmin.dev/'
  return (
    <footer className='mt-16 mb-6 text-sm xl:mt-24 xl:mb-12'>
      <div className='flex items-center'>
        <span className='mr-1 text-gray-500'>Made by</span>
        <a className='text-gray-500 hover:text-blue-500' href={link} rel='noreferrer' target='_blank'>Junmin De Real</a>
      </div>
    </footer>
  )
}

export default Footer
