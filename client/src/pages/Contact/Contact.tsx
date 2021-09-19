import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../../components/Navigation/Navigation'
import contactImage from '../../assets/contact.svg'
import Footer from '../../components/Footer/Footer'
import ScrollButton from '../../components/ScrollButton/ScrollButton'
import './Contact.scss'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='contact'>
        <Helmet>
          <title>Todoify - Contact</title>
        </Helmet>

        <Navigation />
        <div className='contact__container'>
          <div className='contact__image__container'>
            <img src={contactImage} alt='contact' />
          </div>
          <h5>Todoify</h5>
          <h4>Contact Us</h4>
          <p>
            Thanks for Using Todoify. If there is something you want to talk to us about or make us aware of feel free
            to contact us.You can mold Todoify anyway by helping us fix bugs and suggest things that would be good
            updates for Todoify.
          </p>
          <p>
            To contact us message us at any of our social media accounts, or email us at todoify@todoify.com. Expect a
            response within one to three business days. Thanks for helping Todoify.
          </p>
        </div>
      </div>
      <ScrollButton />
      <Footer />
    </>
  )
}

export default Contact
