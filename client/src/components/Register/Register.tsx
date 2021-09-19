import React, { useState, useRef, useEffect } from 'react'
import Navigation from '../Navigation/Navigation'
import Message from '../Message/Message'
import Loader from '../Loader/Loader'
import { Helmet } from 'react-helmet'
import ErrorNotification from '../ErrorNotification/ErrorNotification'
import { Error } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import validator from 'validator'
import useRegisterUser from '../../hooks/useUserRegister'
import './Register.scss'

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const useRegisterMutation = useRegisterUser()
  const { isError, isLoading, isSuccess, error } = useRegisterMutation

  const firstNameInputRef = useRef<any>()
  const lastNameInputRef = useRef<any>()
  const emailInputRef = useRef<any>()
  const passwordInputRef = useRef<any>()
  const confirmPasswordInputRef = useRef<any>()

  const firstNameErrorIconRef = useRef<any>()
  const lastNameErrorIconRef = useRef<any>()
  const emailErrorIconRef = useRef<any>()
  const passwordErrorIconRef = useRef<any>()
  const confirmPasswordErrorIconRef = useRef<any>()

  const firstNameErrorNotificationRef = useRef<any>()
  const lastNameErrorNotificationRef = useRef<any>()
  const emailErrorNotificationRef = useRef<any>()
  const passwordErrorNotificationRef = useRef<any>()
  const confirmPasswordErrorNotificationRef = useRef<any>()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandler = (e: any) => {
    e.preventDefault()

    if (firstName.trim().length === 0) {
      firstNameInputRef.current.style.border = '2px solid #c0392b'
      firstNameErrorIconRef.current.style.opacity = 1
      firstNameErrorNotificationRef.current.style.display = 'block'
    }

    if (lastName.trim().length === 0) {
      lastNameInputRef.current.style.border = '2px solid #c0392b'
      lastNameErrorIconRef.current.style.opacity = 1
      lastNameErrorNotificationRef.current.style.display = 'block'
    }

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

    if (confirmPassword !== password) {
      confirmPasswordInputRef.current.style.border = '2px solid #c0392b'
      confirmPasswordErrorIconRef.current.style.opacity = 1
      confirmPasswordErrorNotificationRef.current.style.display = 'block'
    }

    if (
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      validator.isEmail(email) &&
      password.trim().length > 6 &&
      password === confirmPassword
    ) {
      useRegisterMutation.mutate({ firstName, lastName, email, password })
    }
  }

  const onNameInputFocus = (ref: any, errorIcon: any, errorNotification: any, value: any) => {
    errorIcon.current.style.opacity = 0
    ref.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'

    if (value.trim().length > 0) {
      errorNotification.current.style.display = 'none'
    } else {
      errorNotification.current.style.display = 'block'
    }
  }
  const onNameInputBlur = (ref: any, errorIcon: any, errorNotification: any, value: any) => {
    errorNotification.current.style.display = 'none'

    if (value.trim().length > 0) {
      errorIcon.current.style.opacity = 0
      ref.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'
    } else {
      errorIcon.current.style.opacity = 1
      ref.current.style.border = '2px solid #c0392b'
    }
  }

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

    if (value.trim().length > 6) {
      errorNotification.current.style.display = 'none'
    } else {
      errorNotification.current.style.display = 'block'
    }
  }
  const onPasswordInputBlur = (ref: any, errorIcon: any, errorNotification: any, value: any) => {
    errorNotification.current.style.display = 'none'

    if (value.trim().length > 6) {
      errorIcon.current.style.opacity = 0
      ref.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'
    } else {
      errorIcon.current.style.opacity = 1
      ref.current.style.border = ' 2px solid #c0392b'
    }
  }

  const onConfirmPasswordInputFocus = (ref: any, errorIcon: any, errorNotification: any, value: any) => {
    errorIcon.current.style.opacity = 0
    ref.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'

    if (value === password) {
      errorNotification.current.style.display = 'none'
    } else {
      errorNotification.current.style.display = 'block'
    }
  }

  const onConfirmPasswordInputBlur = (ref: any, errorIcon: any, errorNotification: any, value: any) => {
    errorNotification.current.style.display = 'none'

    if (value === password) {
      errorIcon.current.style.opacity = 0
      ref.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'
    } else {
      errorIcon.current.style.opacity = 1
      ref.current.style.border = ' 2px solid #c0392b'
    }
  }

  return (
    <div className='register'>
      <Helmet>
        <title>Todoify - Register</title>
      </Helmet>
      <Navigation />
      <div className='register__container'>
        <h1>Register</h1>
        <p>New to Todoify? , Sign up for an account.</p>

        <form className='register__form' onSubmit={submitHandler}>
          {isError && <Message>{error?.response?.data.message || error?.response?.data.error}</Message>}
          {isSuccess && <Message color='#2ecc71'>Successfully Signed Up</Message>}
          {isLoading && <Loader />}
          <div className='register__form__field'>
            <ErrorNotification text='What is your first name?' reference={firstNameErrorNotificationRef} firstName />
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              ref={firstNameInputRef}
              onFocus={() => onNameInputFocus(firstNameInputRef, firstNameErrorIconRef, firstNameErrorNotificationRef, firstName)}
              onBlur={() => onNameInputBlur(firstNameInputRef, firstNameErrorIconRef, firstNameErrorNotificationRef, firstName)}
            />
            <Error className='register__form__field__icon' ref={firstNameErrorIconRef} />
          </div>
          <div className='register__form__field'>
            <ErrorNotification text='What is your last name?' reference={lastNameErrorNotificationRef} lastName />
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              ref={lastNameInputRef}
              onFocus={() => onNameInputFocus(lastNameInputRef, lastNameErrorIconRef, lastNameErrorNotificationRef, lastName)}
              onBlur={() => onNameInputBlur(lastNameInputRef, lastNameErrorIconRef, lastNameErrorNotificationRef, lastName)}
            />
            <Error className='register__form__field__icon' ref={lastNameErrorIconRef} />
          </div>
          <div className='register__form__field'>
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
            <Error className='register__form__field__icon' ref={emailErrorIconRef} />
          </div>

          <div className='register__form__field'>
            <ErrorNotification
              text='Type in the password with atleast 7 characters you want to use.'
              reference={passwordErrorNotificationRef}
              password
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder={window.screen.availWidth < 600 ? 'Password (7 Minimum)' : 'Password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordInputRef}
              onFocus={() => onPasswordInputFocus(passwordInputRef, passwordErrorIconRef, passwordErrorNotificationRef, password)}
              onBlur={() => onPasswordInputBlur(passwordInputRef, passwordErrorIconRef, passwordErrorNotificationRef, password)}
            />
            <Error className='register__form__field__icon' ref={passwordErrorIconRef} />
          </div>

          {password.trim().length > 6 && (
            <div className='register__form__field'>
              <ErrorNotification
                text='Confirm the password you want to use.'
                reference={confirmPasswordErrorNotificationRef}
                confirmPassword
              />
              <input
                type='password'
                name='confirmpassword'
                id='confirmpassword'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                ref={confirmPasswordInputRef}
                onFocus={() =>
                  onConfirmPasswordInputFocus(
                    confirmPasswordInputRef,
                    confirmPasswordErrorIconRef,
                    confirmPasswordErrorNotificationRef,
                    confirmPassword
                  )
                }
                onBlur={() =>
                  onConfirmPasswordInputBlur(
                    confirmPasswordInputRef,
                    confirmPasswordErrorIconRef,
                    confirmPasswordErrorNotificationRef,
                    confirmPassword
                  )
                }
              />
              <Error className='register__form__field__icon' ref={confirmPasswordErrorIconRef} />
            </div>
          )}

          <button type='submit'>Sign Up</button>
        </form>
        <p className='register__footer'>
          Already have an account? <Link to='/login'>Sign In.</Link>
        </p>

        <p className='register__terms'>
          By signing up for an account above, you acknowledge that you have read and understood, and agree to Todoify's{' '}
          <span>Terms & Conditions</span> and <span>Privacy Policy</span> .
        </p>
      </div>
    </div>
  )
}

export default Register
