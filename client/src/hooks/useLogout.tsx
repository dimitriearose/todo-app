import { useContext } from 'react'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useMutation } from 'react-query'
import StateContext from '../global/StateProvider'

const useRefreshAccessToken = () => {
  const { resetUserInfo, resetToken, userToken } = useContext(StateContext)

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken.token}`,
    },
    withCredentials: true,
  }

  return useMutation<any, AxiosError, any, any>(
    'refreshaccesstoken',
    () => {
      return axios.post(`/user/logout`, config).then((response) => response.data)
    },
    {
      onSettled: (data) => {
        resetUserInfo()
        resetToken()
      },
    }
  )
}

export default useRefreshAccessToken
