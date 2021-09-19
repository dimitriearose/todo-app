import React from 'react'
import { Avatar } from '@material-ui/core'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import './Reviews.scss'

interface Props {
  name: string
  avatar: string
  message: string
  even?: boolean
  position?: string
  story?: boolean
}

const Reviews = ({ name, avatar, message, even, position, story }: Props) => {
  return (
    <div className={`review ${even && 'review__even'}`}>
      <div className='review__container'>
        <Avatar src={avatar} className='review__avatar' />
        <div className='review__text'>
          <ImQuotesLeft
            className={`review__text__left__quotation ${story && 'review__text__left__quotation__story'}`}
          />
          <blockquote className='review__quote'>{message}</blockquote>
          <ImQuotesRight
            className={`review__text__right__quotation ${story && 'review__text__right__quotation__story'}`}
          />
        </div>
        <h3 className='review__name'>{name}</h3>
        {position && <p className='review__position'>{position}</p>}
      </div>
    </div>
  )
}

export default Reviews
