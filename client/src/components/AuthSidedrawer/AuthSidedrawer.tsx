import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import StateContext from '../../global/StateProvider'
import Logout from '../../hooks/useLogout'
import './AuthSidedrawer.scss'

interface Props {
  open: boolean
}

const AuthSidedrawer = ({ open }: Props) => {
  const history = useHistory()

  const { userInfo } = useContext(StateContext)

  const logoutHandler = () => {
    history.push('/')
  }
  return (
    <div className={`authSidedrawer ${open && 'authSidedrawer__open'}`}>
      <h4 onClick={() => history.push('/user')}>{`${userInfo.user?.firstName} ${userInfo.user?.lastName} `}</h4>
      <h4 onClick={() => history.push('/user')} className='authSidedrawer__hide'>
        {userInfo.user?.email}
      </h4>
      <h4 onClick={() => history.push('/user')}>My Account</h4>
      <h4 onClick={logoutHandler}>Log Out</h4>
    </div>
  )
}

export default AuthSidedrawer
