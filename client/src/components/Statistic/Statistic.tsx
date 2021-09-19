import React from 'react'
import './Statistic.scss'

interface Props {
  percentage: string
  text: string
}

const Statistic = ({ percentage, text }: Props) => {
  return (
    <div className='statistic'>
      <h5>{percentage}</h5>
      <p>{text}</p>
    </div>
  )
}

export default Statistic
