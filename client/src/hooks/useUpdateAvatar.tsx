import axios, { AxiosError } from 'axios'
import { useContext } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import StateContext from '../global/StateProvider'

const useUpdateAvatar = () => {
  const { userToken } = useContext(StateContext)

  const queryClient = useQueryClient()

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken.token}`,
    },
  }

  return useMutation<any, AxiosError, any, any>(
    (avatar: any) => {
      return axios.post(`/user/avatar`, avatar, config).then((response) => response.data)
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries('user')
      },

      onError: () => {
        queryClient.invalidateQueries('user')
      },
    }
  )
}

export default useUpdateAvatar
