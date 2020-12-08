import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  return (
    <>
      <nav className='flex items-center justify-start pt-10'>
        <div>
          {router.pathname === '/'
            ? (
              <div className='text-4xl font-bold'>
                <span className='text-blue-500'>LDS</span>
                <span className='text-gray-900'>Wiki</span>
              </div>
            )
            : (
              <Link href='/'>
                <a className='inline-block text-4xl font-bold'>
                  <span className='text-blue-500'>LDS</span>
                  <span className='text-gray-900'>Wiki</span>
                </a>
              </Link>
            )}
        </div>
      </nav>
      {router.pathname === '/'
        ? null
        : (
          <Link href='/'>
            <a className='inline-block mt-12 text-blue-500 hover:text-blue-600'>
              ← Back to Articles
            </a>
          </Link>
        )}
    </>
  )
}

export default Navbar
