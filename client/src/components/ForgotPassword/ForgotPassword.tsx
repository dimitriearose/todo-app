import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navigation from '../Navigation/Navigation'
import useForgotPassword from '../../hooks/useForgotPassword'
import Loader from '../Loader/Loader'
import Message from '../Message/Message'
import { Error } from '@material-ui/icons'
import validator from 'validator'
import './ForgotPassword.scss'

const ForgotPassword = () => {
  const emailInputRef = useRef<any>()
  const emailErrorIconRef = useRef<any>()

  const [email, setEmail] = useState('')

  const forgotPasswordMutate = useForgotPassword()

  const { isError, isSuccess, isLoading, error } = forgotPasswordMutate

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    forgotPasswordMutate.mutate(email)
  }

  const onFocus = () => {
    emailInputRef.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'
    emailErrorIconRef.current.style.opacity = 0
  }

  const onBlur = () => {
    if (validator.isEmail(email)) {
      emailInputRef.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'
      emailErrorIconRef.current.style.opacity = 0
    } else {
      emailInputRef.current.style.border = '2px solid #c0392b'
      emailErrorIconRef.current.style.opacity = 1
    }
  }

  return (
    <div className='forgotPassword'>
      <Helmet>
        <title>Todoify - Forgot Password</title>
      </Helmet>
      <Navigation />
      <div className='forgotPassword__container'>
        <h3 className='forgotPassword__heading'>Forgot Password?</h3>

        <form className='forgotPassword__form' onSubmit={onSubmit}>
          {isError && <Message>{error?.response?.data.message}</Message>}
          {isSuccess && <Message color='#2ecc71'>Email Sent</Message>}
          <div className='forgotPassword__form__field'>
            <input
              className='forgotPassword__form__field__input'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              onFocus={onFocus}
              onBlur={onBlur}
              ref={emailInputRef}
            />
            <Error className='forgotPassword__form__field__icon' ref={emailErrorIconRef} />
          </div>

          <button className='forgotPassword__form__button' type='submit'>
            {isLoading ? 'Sending Email' : isSuccess ? 'Email Sent' : isError ? 'Email Error' : 'Send Email'}
          </button>
        </form>

        <p className='forgotPassword__footer'>
          Have an account?{' '}
          <Link className='forgotPassword__link' to='/login'>
            Sign In.
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
