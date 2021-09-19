import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../Navigation/Navigation'
import customerImage from '../../assets/customer.svg'
import './CustomerStoriesHome.scss'

const CustomerStoriesHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='customerStoriesHome'>
      <Helmet>
        <title>Todoify - Customer Stories</title>
      </Helmet>
      <Navigation />
      <div className='customerStoriesHome__container'>
        <div className='customerStoriesHome__content'>
          <h2>Customer Stories</h2>
          <p>Explore real workflows that save companies time, eliminate old tools, and bring peace of mind.</p>
        </div>
        <div className='customerStoriesHome__image__container'>
          <img src={customerImage} alt='customer' />
        </div>
      </div>
    </div>
  )
}

export default CustomerStoriesHome
