import React from 'react'
import { BiCodeAlt } from 'react-icons/bi'
import { MdChevronRight } from 'react-icons/md'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import './Information.scss'

const Information = () => {
  return (
    <div className='information'>
      <div className='information__container'>
        <div className='information__left'>
          <h4>Ready to get Started?</h4>
          <h6>
            Login to Todoify, or create an account and instantly start living a more organised lifestyle. You can also
            contact us to design a custom package for you or your business.
          </h6>
          <div className='information__left__button__container'>
            <button>
              Start now <MdChevronRight className='information__right__button__icon' />
            </button>
            <button>
              Need help?{' '}
              <MdChevronRight className='information__right__button__icon information__right__button__icon__right' />
            </button>
          </div>
        </div>
        <div className='information__right'>
          <div className='information__right__card'>
            <FaMoneyCheckAlt className='information__right__card__icon' />
            <h5>Always know what you pay</h5>
            <p>Integrated per-transaction pricing with no hidden fees.</p>
            <button>
              Pricing Details{' '}
              <MdChevronRight className='information__right__button__icon information__right__button__icon__two' />
            </button>
          </div>
          <div className='information__right__card'>
            <BiCodeAlt className='information__right__card__icon' />
            <h5>Start your integration</h5>
            <p>Get up and running with Todoify in as little as 10 minutes.</p>
            <button>
              Pricing Details{' '}
              <MdChevronRight className='information__right__button__icon information__right__button__icon__two' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
