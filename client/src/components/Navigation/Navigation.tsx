import React, { useState, useEffect, useContext } from 'react'
import MobileNavigation from '../MobileNavigation/MobileNavigation'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import StateContext from '../../global/StateProvider'
import './Navigation.scss'

const Navigation = () => {
  const { userInfo } = useContext(StateContext)

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollFunction = (e: any) => {
    if (window.scrollY > 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction)

    return () => {
      window.removeEventListener('scroll', scrollFunction)
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled && 'navbar__scrolled'}`}>
      <div className='navbar__container'>
        <Link to='/' className='navbar__container__link'>
          <h4>Todoify</h4>
        </Link>
        <ul className='navbar__list'>
          <li className='navbar__listItem'>
            <Link to='/enterprise'>Enterprise</Link>
          </li>

          <li className='navbar__listItem'>
            <Link to='/careers'>Careers</Link>
          </li>
          <li className='navbar__listItem'>
            <Link to='/customerstories'>Testimonials</Link>
          </li>
          {userInfo.user?.firstName ? (
            <li className='navbar__listItem'>
              <Link to='/home'>Todos</Link>
            </li>
          ) : (
            <li className='navbar__listItem'>
              <Link to='/register'>Register</Link>
            </li>
          )}
          <li className='navbar__listItem'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        {userInfo.user?.firstName ? (
          <Link to='/user' className='navbar__list__button'>
            {userInfo.user.firstName}
          </Link>
        ) : (
          <Link className='navbar__list__button' to='/login'>
            Sign In
          </Link>
        )}

        {menuOpen && <MobileNavigation setMenuOpen={setMenuOpen} />}

        <MenuIcon className='navbar__list__menu' onClick={() => setMenuOpen((state) => !state)} />
      </div>
    </nav>
  )
}

export default Navigation
