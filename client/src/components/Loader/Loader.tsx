import React from 'react'
import './Loader.scss'

interface LoaderProps {
  isPageLoader?: boolean
}

const Loader = ({ isPageLoader }: LoaderProps) => {
  return (
    <div className={`lds-ripple ${isPageLoader && 'page__loader'}`}>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader
