import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { BiUpArrowCircle } from 'react-icons/bi'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import './ScrollButton.scss'

const ScrollButton = () => {
  gsap.registerPlugin(ScrollToPlugin)

  const [visible, setVisible] = useState(false)

  const scrollFunction = () => {
    if (window.scrollY > 500) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction)

    return () => {
      window.removeEventListener('scroll', scrollFunction)
    }
  }, [])

  const onScrollUpHandler = () => {
    gsap.to(window, { duration: 0.5, scrollTo: 0 })
  }
  return (
    <div className={`scrollButton ${visible && 'scrollButton__visible'}`} onClick={onScrollUpHandler}>
      <BiUpArrowCircle className='scrollButton__icon' />
    </div>
  )
}

export default ScrollButton
