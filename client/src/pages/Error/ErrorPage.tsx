import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../../components/Navigation/Navigation'
import notFoundImage from '../../assets/notFound.svg'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'
import Footer from '../../components/Footer/Footer'

const ErrorPage = () => {
  return (
    <>
      <div className='errorPage'>
        <Helmet>
          <title>Todoify - Not Found</title>
        </Helmet>
        <Navigation />
        <div className='errorPage__container'>
          <div className='errorPage__image__container'>
            <img src={notFoundImage} alt='notfound' />
          </div>
          <h4>Resource Not Found</h4>
          <Link to='/'>Home</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage
