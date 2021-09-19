import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useContext } from 'react'
import { useInfiniteQuery } from 'react-query'
import StateContext from '../global/StateProvider'

const useTodos = () => {
  const { userToken } = useContext(StateContext)

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken.token}`,
    },
  }

  let previousSuccessfulQuery: any

  return useInfiniteQuery<any, AxiosError, any>(
    'todos',
    ({ pageParam = 1, queryKey = 'todos' }) => {
      if (pageParam != null) {
        previousSuccessfulQuery = pageParam
      }

      if (pageParam == null) {
        pageParam = previousSuccessfulQuery
      }

      return axios.get(`/todo?page=${pageParam}`, config).then((response) => response.data)
    },
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextPage,
      getPreviousPageParam: (lastPage, pages) => lastPage.previousPage,
    }
  )
}

export default useTodos
