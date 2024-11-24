import { FC } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/Hero/HeroSection'
import About from '@/components/About/About'
import Service from '@/components/Service/Service'
import FAQ from '@/components/FAQ/FAQ'

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[60px] md:mt-[180px]">
        <HeroSection />
      </div>
      <About />
      <Service />
      <FAQ />
    </div>
  )
}

export default Home
