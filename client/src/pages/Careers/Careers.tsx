import React from 'react'
import Benefits from '../../components/Benefits/Benefits'
import Careers from '../../components/CareerHome/CareerHome'
import Footer from '../../components/Footer/Footer'
import Looking from '../../components/Looking/Looking'
import Positions from '../../components/Positions/Positions'
import ScrollButton from '../../components/ScrollButton/ScrollButton'

const CareersPage = () => {
  return (
    <>
      <Careers />
      <Looking />
      <Benefits />
      <Positions />
      <Footer />
      <ScrollButton />
    </>
  )
}

export default CareersPage
