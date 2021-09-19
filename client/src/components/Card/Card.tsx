import React from 'react'
import './Card.scss'

interface Props {
  Icon: any
  heading: string
  message: string
}

const Card = ({ Icon, heading, message }: Props) => {
  return (
    <div className='card'>
      <Icon className='card__icon' />
      <h5>{heading}</h5>
      <p>{message}</p>
    </div>
  )
}

export default Card
