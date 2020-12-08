import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PageLayout = ({ children }) => {
  return (
    <div className='max-w-2xl mx-auto'>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout
