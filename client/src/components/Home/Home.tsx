import React, { useEffect, useRef, useContext } from 'react'
import { VscChecklist } from 'react-icons/vsc'
import { BiDownArrowCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import { Helmet } from 'react-helmet'
import svgImage from '../../assets/addPosts.svg'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import StateContext from '../../global/StateProvider'
import './Home.scss'

const Home = () => {
  const { userInfo } = useContext(StateContext)

  const homeRef = useRef<any>()
  const bottom = useRef<any>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    bottom.current = homeRef.current.getBoundingClientRect().bottom
  }, [])

  gsap.registerPlugin(ScrollToPlugin)

  const onNextPageLinkPress = () => {
    gsap.to(window, { duration: 0.5, scrollTo: bottom.current - 20 })
  }
  return (
    <div className='home' ref={homeRef}>
      <Helmet>
        <title>Todoify - Home</title>
      </Helmet>
      <Navigation />
      <header className='home__container'>
        <div className='home__content'>
          <VscChecklist className='home__icon' />
          <h1>Todoify,</h1>
          <h1>Optimising</h1>
          <h1>The Internet.</h1>
          <p>Take control of your life, one task at a time.</p>
          <p>
            Millions of people, far and wide have problems staying up to date with their tasks, trust me we know. Be the
            person you have always wanted to be.
          </p>

          <div className='home__content__buttons'>
            {userInfo.user?.firstName ? (
              <Link to='/home' className='home__button'>
                Todos
              </Link>
            ) : (
              <Link to='/login' className='home__button'>
                Login
              </Link>
            )}
            {userInfo.user?.firstName ? (
              <Link to='/user' className='home__button home__button__two'>
                Settings
              </Link>
            ) : (
              <Link to='/register' className='home__button home__button__two'>
                Register
              </Link>
            )}
          </div>
        </div>
        <div className='home__image'>
          <img src={svgImage} alt='' />
        </div>
      </header>
      <button className='home__link__next__page__container' onClick={onNextPageLinkPress}>
        <BiDownArrowCircle className='home__next__page__icon' />
      </button>
    </div>
  )
}
export default Home
