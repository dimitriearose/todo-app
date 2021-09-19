import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../Navigation/Navigation'
import enterpriseImage from '../../assets/enterprise.svg'
import './EnterpriseHome.scss'

const Enterprise = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='enterprise'>
      <Helmet>
        <title>Todoify - Enterprise</title>
      </Helmet>
      <Navigation />
      <div className='enterprise__container'>
        <h1>Todoify For Enterprise</h1>
        <p>One tool for your entire company to share knowledge, ship projects, and collaborate.</p>
        <button>Contact Us</button>
        <div className='enterprise__image__container'>
          <img src={enterpriseImage} alt='enterprise' />
        </div>
      </div>
    </div>
  )
}

export default Enterprise
