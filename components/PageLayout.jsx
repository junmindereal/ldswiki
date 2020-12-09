import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PageLayout = ({ children }) => {
  return (
    <div className='max-w-2xl px-4 mx-auto antialiased xl:px-0'>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout
