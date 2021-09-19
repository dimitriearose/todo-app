import { createContext, useReducer } from 'react'
import { userInfoReducer, userTokenReducer } from './userReducers'
import { tokenInitialState, userInitialState } from './infoInitialState'
import { SET_USER_INFO, RESET_TOKEN, RESET_USER_INFO, SET_TOKEN } from './userConstants'

interface Props {
  children: React.ReactNode
}

const StateContext = createContext({
  userInfo: {
    user: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      avatar: undefined,
      accessToken: undefined,
    },
  },
  userToken: { token: null },
  setUserInfo: (user: any) => {},
  setToken: (token: string) => {},
  resetUserInfo: () => {},
  resetToken: () => {},
})

export const StateProvider = ({ children }: Props) => {
  const [userInfo, userInfoDispatch] = useReducer(userInfoReducer, userInitialState)
  const [userToken, tokenDispatch] = useReducer(userTokenReducer, tokenInitialState)

  const setUserInfo = (user: any) => {
    userInfoDispatch({ type: SET_USER_INFO, payload: user })
  }

  const resetUserInfo = () => {
    userInfoDispatch({ type: RESET_USER_INFO })
  }

  const setToken = (token: string) => {
    tokenDispatch({ type: SET_TOKEN, payload: token })
  }

  const resetToken = () => {
    tokenDispatch({ type: RESET_TOKEN })
  }

  return (
    <StateContext.Provider
      value={{
        userInfo,
        resetUserInfo,
        setUserInfo,
        setToken,
        userToken,
        resetToken,
      }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateContext
