import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import validator from 'validator'
import ErrorNotification from '../ErrorNotification/ErrorNotification'
import { Error } from '@material-ui/icons'
import Navigation from '../Navigation/Navigation'
import Message from '../Message/Message'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import useLoginUser from '../../hooks/useUserLogin'
import './Login.scss'

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const useLoginMutation = useLoginUser()
  const { isError, isLoading, error, isSuccess } = useLoginMutation

  const emailInputRef = useRef<any>()
  const passwordInputRef = useRef<any>()

  const emailErrorIconRef = useRef<any>()
  const passwordErrorIconRef = useRef<any>()

  const emailErrorNotificationRef = useRef<any>()
  const passwordErrorNotificationRef = useRef<any>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onEmailInputFocus = (ref: any, errorIcon: any, errorNotification: any, value: any) => {
    errorIcon.current.style.opacity = 0
    ref.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'

    if (validator.isEmail(email)) {
      errorNotification.current.style.display = 'none'
    } else {
      errorNotification.current.style.display = 'block'
    }
  }
  const onEmailInputBlur = (ref: any, errorIcon: any, errorNotification: any, value: any) => {
    errorNotification.current.style.display = 'none'

    if (validator.isEmail(email)) {
      errorIcon.current.style.opacity = 0
      ref.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'
    } else {
      errorIcon.current.style.opacity = 1
      ref.current.style.border = ' 2px solid #c0392b'
    }
  }

  const onPasswordInputFocus = (ref: any, errorIcon: any, errorNotification: any, value: any) => {
    errorIcon.current.style.opacity = 0
    ref.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'

    if (value.length > 6) {
      errorNotification.current.style.display = 'none'
    } else {
      errorNotification.current.style.display = 'block'
    }
  }
  const onPasswordInputBlur = (ref: any, errorIcon: any, errorNotification: any, value: any) => {
    errorNotification.current.style.display = 'none'

    if (value.length > 6) {
      errorIcon.current.style.opacity = 0
      ref.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'
    } else {
      errorIcon.current.style.opacity = 1
      ref.current.style.border = ' 2px solid #c0392b'
    }
  }

  const submitHandler = (e: any) => {
    e.preventDefault()

    if (!validator.isEmail(email)) {
      emailInputRef.current.style.border = '2px solid #c0392b'
      emailErrorIconRef.current.style.opacity = 1
      emailErrorNotificationRef.current.style.display = 'block'
    }

    if (!(password.trim().length > 6)) {
      passwordInputRef.current.style.border = '2px solid #c0392b'
      passwordErrorIconRef.current.style.opacity = 1
      passwordErrorNotificationRef.current.style.display = 'block'
    }

    if (validator.isEmail(email) && password.trim().length > 6) {
      useLoginMutation.mutate({ email, password })
    }
  }
  return (
    <div className='login'>
      <Helmet>
        <title>Todoify - Sign In</title>
      </Helmet>
      <Navigation />
      <div className='login__container'>
        <h1>Sign In</h1>
        <p className='login__paragraph'>Already have a Todoify account? , Sign In.</p>

        <form className='login__form' onSubmit={submitHandler}>
          {isError && <Message>{error?.response?.data.message || error?.response?.data.error}</Message>}
          {isSuccess && <Message color='#2ecc71'>Successfully Logged In</Message>}
          {isLoading && <Loader />}
          <div className='login__form__field'>
            <ErrorNotification text='What is your email address?' reference={emailErrorNotificationRef} email />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailInputRef}
              onFocus={() => onEmailInputFocus(emailInputRef, emailErrorIconRef, emailErrorNotificationRef, email)}
              onBlur={() => onEmailInputBlur(emailInputRef, emailErrorIconRef, emailErrorNotificationRef, email)}
            />
            <Error className='login__form__field__icon' ref={emailErrorIconRef} />
          </div>

          <div className='login__form__field'>
            <ErrorNotification text='Type in the password you used for your account.' reference={passwordErrorNotificationRef} password />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordInputRef}
              onFocus={() => onPasswordInputFocus(passwordInputRef, passwordErrorIconRef, passwordErrorNotificationRef, password)}
              onBlur={() => onPasswordInputBlur(passwordInputRef, passwordErrorIconRef, passwordErrorNotificationRef, password)}
            />
            <Error className='login__form__field__icon' ref={passwordErrorIconRef} />
          </div>

          <button type='submit'>Login</button>
        </form>
        <p className='login__footer login__paragraph'>
          Do not have an account? <Link to='/register'>Register.</Link>
        </p>

        <p className='login__footer login__paragraph'>
          Forgot your <Link to='/forgotpassword'>Password?</Link>
        </p>

        <p className='login__terms'>
          By logging in for an account above, you acknowledge that you have read and understood, and agree to Todoify's{' '}
          <span>Terms & Conditions</span> and <span>Privacy Policy</span> .
        </p>
      </div>
    </div>
  )
}

export default Login
