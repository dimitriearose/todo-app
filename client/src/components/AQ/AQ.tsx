import React from 'react'
import './AQ.scss'

interface Props {
  question: string
  answer: string
}

const QA = ({ question, answer }: Props) => {
  return (
    <div className='aq'>
      <p className='aq__question'>{question}</p>
      <p className='aq__answer'>{answer}</p>
    </div>
  )
}

export default QA
