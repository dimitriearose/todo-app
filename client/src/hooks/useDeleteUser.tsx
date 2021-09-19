import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { useMutation } from 'react-query'
import StateContext from '../global/StateProvider'

const useDeleteTodo = () => {
  const { userToken } = useContext(StateContext)

  const history = useHistory()

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken.token}`,
    },
    withCredentials: true,
  }

  return useMutation<any, AxiosError, any, any>(
    () => {
      return axios.delete(`/user`, config).then((response) => response.data)
    },
    {
      onSuccess: () => {
        setTimeout(() => {
          history.push('/')
        }, 1300)
      },
    }
  )
}

export default useDeleteTodo
