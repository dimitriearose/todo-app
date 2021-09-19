import React, { useContext } from 'react'
import { MdWork } from 'react-icons/md'
import { VscBook } from 'react-icons/vsc'
import { BiUserCircle } from 'react-icons/bi'
import { FaUsersCog } from 'react-icons/fa'
import { RiCustomerService2Line } from 'react-icons/ri'
import { AiFillContacts } from 'react-icons/ai'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import StateContext from '../../global/StateProvider'
import './MobileNavigation.scss'

interface Props {
  setMenuOpen?: any
}

const MobileNavigation = ({ setMenuOpen }: Props) => {
  const { userInfo } = useContext(StateContext)
  return (
    <div className='mobileNavigation'>
      <CloseIcon className='mobileNavigation__close' onClick={() => setMenuOpen(false)} />
      <div className='mobileNavigation__content'>
        <div className='mobileNavigation__pages'>
          <p>Pages</p>
          <div className='mobileNavigation__pages__links'>
            <Link to='/enterprise'>
              <VscBook className='mobileNavigation__pages__links__icon' /> Enterprise
            </Link>
            <Link to='/careers'>
              <MdWork className='mobileNavigation__pages__links__icon' /> Careers
            </Link>
            <Link to='/customerstories'>
              <RiCustomerService2Line className='mobileNavigation__pages__links__icon' /> Customer Stories
            </Link>
            {userInfo.user?.firstName ? (
              <Link to='/home'>
                <BiUserCircle className='mobileNavigation__pages__links__icon' /> Todos
              </Link>
            ) : (
              <Link to='/register'>
                <FaUsersCog className='mobileNavigation__pages__links__icon' /> Register
              </Link>
            )}
            <Link to='/contact'>
              <AiFillContacts className='mobileNavigation__pages__links__icon' /> Contact
            </Link>
          </div>
        </div>
        <div className='mobileNavigation__footer'>
          {userInfo.user?.firstName ? (
            <Link to='/user'>
              {userInfo.user.firstName} <ChevronRightIcon className='mobileNavigation__footer__icon' />
            </Link>
          ) : (
            <Link to='/login'>
              Sign In <ChevronRightIcon className='mobileNavigation__footer__icon' />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default MobileNavigation
