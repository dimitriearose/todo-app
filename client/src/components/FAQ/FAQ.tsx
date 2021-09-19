import React from 'react'
import AQ from '../AQ/AQ'
import './FAQ.scss'

const FAQ = () => {
  return (
    <div className='faq'>
      <div className='faq__container'>
        <h3>Frequently Asked Questions</h3>
        <AQ
          question='Is Todoify Free?'
          answer='Todoify is in beta, so currently it is free. After Todoify launches it will cost $4.99 per month.'
        />
        <AQ
          question='Do I gain instant access to my Todoify account?'
          answer="Yes you do, as soon as you sign up you're account will become useable."
        />
        <AQ question='Where is Todoify located?' answer='San Francisco, California.' />
        <AQ question='Who owns Todoify?' answer='William and Demetrius Walker.' />
        <AQ question="What is Todoify's contact email address?" answer='todoify@todoify.com' />
        <AQ
          question='Does Todoify have any job openings?'
          answer='new Job oppurtunites always arise, join our email list and we will send an email whenever we are seeking a new employee.'
        />
        <AQ
          question='Can I buy a team bundle?'
          answer='Of course! Just send us an email at todoify@todoify.com and we can workout a bundle for your entire team.'
        />
        <AQ question='When was Todoify Founded?' answer='Todoify was founded in late 2018.' />
        <AQ
          question='Is Todoify active on any social media?'
          answer='Todoify has an Instagram, Twitter and Facebook account. Feel free to follow them for updates and news about Todoify.'
        />
        <AQ
          question='Who is the Chief Executive Officer of Todoify?'
          answer='Shane Watt is the current appointed Chief Executive Officer of Todoify.'
        />
        <AQ
          question='What is the most reliable way to contact Todoify?'
          answer='Send an email to todoify@todoify.com. The response time is normally between one and three business days.'
        />
        <AQ
          question='Is Todoify a public company?'
          answer='Currently Todoify is a private company with no future plans of going public.'
        />
        <AQ
          question='Any other questions?'
          answer='If you have any more questions about the course email me at todoify@todoify.com and I will answer any questions you have.'
        />
      </div>
    </div>
  )
}

export default FAQ
