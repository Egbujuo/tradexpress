import React from 'react'
import CopyRight from '../Components/CopyRight'
import Footer from '../Components/Footer'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Section5 from '../Components/Section5'
import Section6 from '../Components/Section6'



const LandingPage = ({rates}) => {

  return (
    <div>
      <Section1/>
    <Section2 rate = {rates}/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
      <CopyRight/>
    </div>
  )
}

export default LandingPage