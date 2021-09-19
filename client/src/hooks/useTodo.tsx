import { useContext } from 'react'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import StateContext from '../global/StateProvider'
import { useQuery } from 'react-query'

const UseTodo = (id: string) => {
  const { userToken } = useContext(StateContext)

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken.token}`,
    },
  }

  return useQuery<any, AxiosError>('todo', () => {
    return axios.get(`/todo/${id}`, config).then((response) => response.data)
  })
}

export default UseTodo
