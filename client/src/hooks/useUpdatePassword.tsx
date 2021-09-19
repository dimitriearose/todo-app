import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useContext } from 'react'
import { useMutation } from 'react-query'
import StateContext from '../global/StateProvider'

const useUpdateTodo = () => {
  const { userToken } = useContext(StateContext)

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken.token}`,
    },
  }

  return useMutation<any, AxiosError, any, any>((passwords: any) => {
    return axios
      .patch(`/user/password`, { currentPassword: passwords.currentPassword, newPassword: passwords.currentPassword }, config)
      .then((response) => response.data)
  })
}

export default useUpdateTodo
