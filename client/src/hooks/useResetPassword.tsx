import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useMutation } from 'react-query'

const useResetPassword = () => {
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  }

  return useMutation<any, AxiosError, any, any>((newPasswordInfo) => {
    return axios
      .patch(`/resetpassword/${newPasswordInfo.resetToken}`, { password: newPasswordInfo.password }, config)
      .then((response) => response.data)
  })
}

export default useResetPassword
