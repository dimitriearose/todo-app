import React from 'react'
import './Feature.scss'

interface Props {
  Icon: any
  heading: string
  messageOne?: string
  messageTwo?: string
  messageThree?: string
  description?: string
  plan?: boolean
}

const Feature = ({ Icon, heading, messageOne, messageTwo, messageThree, description, plan }: Props) => {
  return (
    <div className={`feature ${plan && 'feature__plan'}`}>
      <Icon className='feature__icon' />
      <h5>{heading}</h5>
      {messageOne && <p>{messageOne}</p>}
      {messageTwo && <p>{messageTwo}</p>}
      {messageThree && <p>{messageThree}</p>}
      {description && <p className='feature__description'>{description}</p>}
    </div>
  )
}

export default Feature
