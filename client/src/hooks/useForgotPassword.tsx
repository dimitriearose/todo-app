import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useMutation } from 'react-query'

const useForgotPassword = () => {
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  }

  return useMutation<any, AxiosError, any, any>((email: any) => {
    return axios.post(`/user/forgotpassword`, { email }, config).then((response) => response.data)
  })
}

export default useForgotPassword
