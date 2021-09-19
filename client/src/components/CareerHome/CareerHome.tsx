import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../Navigation/Navigation'
import workImage from '../../assets/work.svg'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import './CareerHome.scss'

const Careers = () => {
  gsap.registerPlugin(ScrollToPlugin)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleClickScroll = () => {
    gsap.to(window, { duration: 0.5, scrollTo: '#positions' })
  }

  return (
    <div className='careers'>
      <Helmet>
        <title>Todoify - Careers</title>
      </Helmet>
      <Navigation />
      <div className='careers__container'>
        <div className='careers__image__container'>
          <img src={workImage} alt='work' />
        </div>
        <h2>Careers</h2>
        <p>At Todoify, we are making game changing software and maintaining it daily.</p>
        <p>
          So why Todoify? You will work on software that is enjoyed by thousands of users every day. Every line of code
          you write will run thousands of times per second on user's devices in the field. This completely changes the
          way you'll write software. Testing at Todoify means running your algorithms on a petabyte of real-world data.
          Our goal is a fully immersive solution to the task manager problem. We promise you won't be writing any boring
          code here at Todoify.
        </p>
        <button onClick={handleClickScroll}>View Open Positions</button>
      </div>
    </div>
  )
}

export default Careers
