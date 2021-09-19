import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import { FaSignature } from 'react-icons/fa'
import { RiRefreshLine } from 'react-icons/ri'
import { VscSettings } from 'react-icons/vsc'
import { BsClockHistory } from 'react-icons/bs'
import { VscFilePdf } from 'react-icons/vsc'
import Feature from '../Feature/Feature'
import './Plan.scss'

const Plan = () => {
  return (
    <div className='plan'>
      <div className='plan__container'>
        <div className='plan__column'>
          <Feature
            Icon={AiOutlineMessage}
            description='Your own customer success manager to help onboard large teams and create custom workflows. Reserved for teams larger than 100 paying annually.'
            heading='Success manager'
            plan
          />
          <Feature
            Icon={FaSignature}
            description='We’ll work with you to create a custom contract and payment via PO/invoice.'
            heading='Custom contracting'
            plan
          />
          <Feature
            Icon={RiRefreshLine}
            description='Maintain a single source of truth for important company announcements, policies, and strategic decisions. Rally teams around the same goals and keep everyone in the know.'
            heading='SCIM API'
            plan
          />
        </div>
        <div className='plan__column'>
          <Feature
            Icon={VscSettings}
            description='Extra permission controls to prevent certain employees from sharing pages externally, disable guests, and set workspace-level rules.'
            heading='Advanced permissions'
            plan
          />
          <Feature
            Icon={BsClockHistory}
            description='Access version history of any page indefinitely, not just 30 days.'
            heading='Unlimited version history'
            plan
          />
          <Feature
            Icon={VscFilePdf}
            description='Export all of your content at once as PDFs. Handy for legal or compliance backups.'
            heading='Bulk PDF export'
            plan
          />
        </div>
      </div>
    </div>
  )
}

export default Plan
