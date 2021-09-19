import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import './ErrorNotifcation.scss'

interface Props {
  text: string
  reference: any
  firstName?: boolean
  lastName?: boolean
  email?: boolean
  password?: boolean
  confirmPassword?: boolean
  todo?: boolean
  bg?: string
}

const ErrorNotification = ({ text, reference, todo, bg = '#c0392b' }: Props) => {
  return (
    <div className={`errorNotification ${todo && 'errorNotification__todo'}`} style={{ backgroundColor: bg }} ref={reference}>
      <p>{text}</p>
      <ArrowRightIcon className='errorNotification__arrow' style={{ color: bg }} />
    </div>
  )
}

export default ErrorNotification
