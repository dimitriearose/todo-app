import React from 'react'
import { Avatar } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import './Rating.scss'

interface Props {
  name: string
  avatar: string
  message: string
  rating: number
}

const RatingElement = ({ name, avatar, message, rating }: Props) => {
  return (
    <div className='rating'>
      <div className='rating__top'>
        <Avatar src={avatar} className='rating__avatar' />
        <h6>{name}</h6>
        <Rating precision={0.5} value={rating} readOnly size='medium' />
      </div>
      <div className='rating__bottom'>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default RatingElement
