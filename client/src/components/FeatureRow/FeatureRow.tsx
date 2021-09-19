import React from 'react'
import './FeatureRow.scss'

interface Props {
  title?: string
  description?: string
  children: any
}

const FeatureRow = ({ title, description, children }: Props) => {
  return (
    <div className='featureRow'>
      <div className='featureRow__container'>
        {title && <h3>{title}</h3>}
        {description && <p>{title}</p>}
        {children}
      </div>
    </div>
  )
}

export default FeatureRow
