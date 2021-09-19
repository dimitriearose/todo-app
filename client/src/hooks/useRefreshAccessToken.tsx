import { useContext } from 'react'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useQuery } from 'react-query'
import StateContext from '../global/StateProvider'

const useRefreshAccessToken = () => {
  const { setToken, setUserInfo } = useContext(StateContext)

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  }

  return useQuery<any, AxiosError, any>(
    'refreshaccesstoken',
    () => {
      return axios.post(`/user/refreshaccesstoken`, config).then((response) => response.data)
    },
    {
      onSuccess: (data) => {
        setUserInfo(data)
        setToken(data.accessToken)
      },
      refetchInterval: 890000,
      refetchOnWindowFocus: false,
      retry: 3,
    }
  )
}

export default useRefreshAccessToken
