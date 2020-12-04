import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-10'>
      <div>
        <Link href='/'>
          <a className='inline-block text-4xl font-bold'>
            <span className='text-blue-700'>LDS</span>
            <span className='text-gray-900'>Wiki</span>
          </a>
        </Link>
      </div>
      <ul className='flex items-center text-base'>
        <li>
          <Link href='/'>
            <a className='inline-block px-3 py-1 text-gray-700 rounded hover:text-gray-900 hover:bg-gray-100'>Articles</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a className='inline-block px-3 py-1 text-gray-700 rounded hover:text-gray-900 hover:bg-gray-100'>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
