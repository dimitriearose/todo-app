import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import StateContext from '../global/StateProvider'

const useDeleteTodo = () => {
  const { userToken } = useContext(StateContext)

  const queryClient = useQueryClient()

  const history = useHistory()

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken.token}`,
    },
    withCredentials: true,
  }

  return useMutation<any, AxiosError, any>(
    (id: string) => {
      return axios.delete(`/todo/${id}`, config).then((response) => response.data)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos')

        setTimeout(() => {
          history.push('/home')
        }, 1300)
      },

      onError: () => {
        queryClient.invalidateQueries('todos')
      },
    }
  )
}

export default useDeleteTodo
