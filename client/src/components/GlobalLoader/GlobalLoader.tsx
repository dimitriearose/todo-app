import React from 'react'
import { useIsFetching } from 'react-query'
import './GlobalLoader.scss'

const GlobalLoader = () => {
  const isFetching = useIsFetching()

  return (
    <>
      {isFetching > 0 ? (
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : null}
    </>
  )
}

export default GlobalLoader
