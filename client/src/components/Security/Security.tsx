import React from 'react'
import { Link } from 'react-router-dom'
import { MdChevronRight } from 'react-icons/md'
import { MdCheck } from 'react-icons/md'
import './Security.scss'

const Security = () => {
  return (
    <div className='security'>
      <div className='security__container'>
        <div className='security__left'>
          <h4>Enterprise-ready security</h4>
          <p>
            Notion is committed to staying compliant and providing you all the features you need to manage access across
            your organization.
          </p>
          <Link to='/contact'>
            Contact Us <MdChevronRight className='security__icon' />
          </Link>
        </div>
        <div className='security__right'>
          <div className='security__right__row'>
            <MdCheck className='security__right__row__check' />
            <p>SAML single sign on</p>
          </div>
          <div className='security__right__row'>
            <MdCheck className='security__right__row__check' />
            <p>TLS everywhere</p>
          </div>
          <div className='security__right__row'>
            <MdCheck className='security__right__row__check' />
            <p>Data encryption in transit and at rest</p>
          </div>
          <div className='security__right__row'>
            <MdCheck className='security__right__row__check' />
            <p>SCIM API</p>
          </div>
          <div className='security__right__row'>
            <MdCheck className='security__right__row__check' />
            <p>Quarterly independent security audits</p>
          </div>
          <div className='security__right__row'>
            <MdCheck className='security__right__row__check' />
            <p>Granular permission levels</p>
          </div>
          <div className='security__right__row'>
            <MdCheck className='security__right__row__check' />
            <p>100% cloud-based architecture secured behind a VPC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security
