import React from 'react'
import Hero1 from './sections/Hero1'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeatureCard from './components/FeatureCard'
import ExperienceSection from './components/ExperienceSection'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
   <>
   <Navbar/>
   {/* <Hero/> */}
   <Hero1/>
   <ShowcaseSection/>
   <FeatureCard/>
   <LogoSection/>
   <ExperienceSection/>
   <TechStack/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App