import { useContext } from 'react'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useHistory } from 'react-router-dom'
import { useMutation } from 'react-query'
import StateContext from '../global/StateProvider'

const useResetPassword = () => {
  const { setUserInfo, setToken } = useContext(StateContext)
  const history = useHistory()

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  }

  return useMutation<any, AxiosError, any, any>(
    (user) => {
      return axios.post(`/user`, user, config).then((response) => response.data)
    },
    {
      onSuccess: (data, values) => {
        setUserInfo(data)
        setToken(data.accessToken)

        setTimeout(() => {
          history.push('/')
        }, 2000)
      },
    }
  )
}

export default useResetPassword
