import { useContext } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import StateContext from '../global/StateProvider'

const useUser = () => {
  const { userInfo, userToken, setUserInfo } = useContext(StateContext)

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken.token}`,
    },
  }

  return useQuery(
    'user',
    () => {
      return axios.get(`/user`, config).then((response) => response.data)
    },
    {
      onSuccess: (data: any) => {
        const user = { ...userInfo.user, avatar: data.avatar }
        localStorage.setItem('user', JSON.stringify(user))
        setUserInfo(user)
      },
    }
  )
}

export default useUser
