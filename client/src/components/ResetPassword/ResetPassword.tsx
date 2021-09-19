import React, { useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../Navigation/Navigation'
import { useParams } from 'react-router-dom'
import useResetPassword from '../../hooks/useResetPassword'
import Message from '../Message/Message'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
import './ResetPassword.scss'

const ResetPassword = () => {
  const passwordRef = useRef<any>()
  const confirmPasswordRef = useRef<any>()

  const params: any = useParams()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const resetPasswordMutate = useResetPassword()
  const { isError, isLoading, isSuccess, error } = resetPasswordMutate

  const onChangePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password.trim().length > 6 && password === confirmPassword) {
      resetPasswordMutate.mutate({ resetToken: params.resetToken, password })
    }
  }

  return (
    <div className='resetPassword'>
      <Helmet>
        <title>Todoify - Reset Password</title>
      </Helmet>
      <Navigation />

      <div className='resetPassword__container'>
        <h3>Reset Your Password</h3>
        <form className='resetPassword__form' onSubmit={onChangePassword}>
          {isError && <Message>{error?.response?.data.message}</Message>}
          {isSuccess && <Message color='#2ecc71'>Password Changed</Message>}
          {isLoading && <Loader />}
          <div className='resetPassword__form__field'>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='resetPassword__form__field__input'
              placeholder='Password'
              ref={passwordRef}
            />
          </div>
          <div className='resetPassword__form__field'>
            <input
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='resetPassword__form__field__input'
              placeholder='Confirm Password'
              ref={confirmPasswordRef}
            />
          </div>
          <button className='resetPassword__form__field__button'>
            {isLoading ? 'Changing Password' : isSuccess ? 'Changed Password' : isError ? 'Password Error' : 'Change Password'}
          </button>
        </form>

        <p className='resetPassword__footer'>
          Have an account?{' '}
          <Link className='resetPassword__link' to='/login'>
            Sign In.
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ResetPassword
