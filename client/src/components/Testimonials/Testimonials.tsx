import React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { SiFacebook } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'
import { RiGoogleFill } from 'react-icons/ri'
import { GrTwitter } from 'react-icons/gr'
import './Testimonials.scss'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className='testimonials__container'>
        <div className='testimonials__row'>
          <GoMarkGithub className='testimonials__row__icon' />
          <SiFacebook className='testimonials__row__icon' />
          <AiFillInstagram className='testimonials__row__icon' />
          <RiGoogleFill className='testimonials__row__icon' />
          <GrTwitter className='testimonials__row__icon' />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
