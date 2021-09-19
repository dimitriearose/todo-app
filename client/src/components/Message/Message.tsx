import React from 'react'
import './Message.scss'

interface Props {
  color?: any
  children?: any
}

const Message = ({ color = 'rgba(192, 57, 43,.6)', children }: Props) => {
  return (
    <div className='message' style={{ background: color }}>
      {children}
    </div>
  )
}

export default Message
