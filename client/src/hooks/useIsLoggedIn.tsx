import { useContext } from 'react'
import StateContext from '../global/StateProvider'

const useIsLoggedIn = () => {
  const { userToken, userInfo } = useContext(StateContext)
  return userToken.token && userInfo.user.firstName ? true : false
}

export default useIsLoggedIn
