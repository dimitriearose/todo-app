import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useContext } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import StateContext from '../global/StateProvider'

const useCreateTodo = () => {
  const { userToken } = useContext(StateContext)

  const queryClient = useQueryClient()

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken.token}`,
    },
    withCredentials: true,
  }

  return useMutation<any, AxiosError, any, any>(
    (todo: any) => {
      return axios.post(`/todo`, todo, config).then((response) => response.data)
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries('todos')
      },
    }
  )
}

export default useCreateTodo
