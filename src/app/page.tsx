import { FC } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/Hero/HeroSection'
import About from '@/components/About/About'
import Service from '@/components/Service/Service'
import Join from '@/components/Join/Join'
import Founder from '@/components/Founder/Founder'
import FAQ from '@/components/FAQ/FAQ'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[60px] md:mt-[180px]">
        <HeroSection />
      </div>
      <About />
      <Service />
      <Join />
      <Founder />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
