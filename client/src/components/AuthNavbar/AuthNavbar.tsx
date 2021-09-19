import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { useHistory } from 'react-router-dom'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Sidedrawer from '../AuthSidedrawer/AuthSidedrawer'
import './AuthNavbar.scss'

const AuthNavbar = () => {
  const history = useHistory()

  gsap.registerPlugin(ScrollToPlugin)

  const lineOne = useRef<any>()
  const lineTwo = useRef<any>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [menuOpen, setMenuOpen] = useState(false)

  const refresh = () => {
    history.push('/')
  }

  const onMenuClick = () => {
    if (menuOpen) {
      gsap.to(lineOne.current, 0.5, { y: 0, rotate: 0 })
      gsap.to(lineTwo.current, 0.5, { y: 0, rotate: 0 })
      setMenuOpen(false)
    } else {
      gsap.to(lineOne.current, 0.5, { y: 3.2, rotate: 45 })
      gsap.to(lineTwo.current, 0.5, { y: -3.2, rotate: -45 })
      setMenuOpen(true)
    }
  }

  return (
    <div className='authNavbar'>
      <div className='authNavbar__container'>
        <h4 onClick={refresh}>Todoify</h4>
        <div className='authNavbar__menu' onClick={onMenuClick}>
          <div className='authNavbar__menu__line authNavbar__menu__lineOne' ref={lineOne}></div>
          <div className='authNavbar__menu__line authNavbar__menu__lineTwo' ref={lineTwo}></div>
        </div>
      </div>
      <Sidedrawer open={menuOpen} />
    </div>
  )
}

export default AuthNavbar
