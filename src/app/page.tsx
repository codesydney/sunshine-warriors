import { FC } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/Hero/HeroSection'
import About from '@/components/About/About'

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[60px] md:mt-[180px]">
        <HeroSection />
      </div>
      <About />
    </div>
  )
}

export default Home
