import React from 'react'
import Feature from '../Feature/Feature'
import { GiHeavyTimer } from 'react-icons/gi'
import { BsScrewdriver } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { SiMaterialdesign } from 'react-icons/si'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { GoMailRead } from 'react-icons/go'
import './Features.scss'

const Features = () => {
  return (
    <div className='features'>
      <div className='features__container'>
        <h4>Built to empower every team</h4>
        <p>Todoify solves problems unique to every user.</p>
        <div className='features__row'>
          <Feature
            Icon={GiHeavyTimer}
            heading='Product'
            messageOne='Visualize your product roadmap'
            messageTwo='Write feature specs'
            messageThree='Cross-functional collaboration'
          />
          <Feature
            Icon={BsScrewdriver}
            heading='Engineering'
            messageOne='Coordinate releases'
            messageTwo='Codify processes'
            messageThree='Write docs to ship fast'
          />
          <Feature
            Icon={FaUsers}
            heading='HR'
            messageOne='Create a company wiki'
            messageTwo='Answer questions at scale'
            messageThree='Onboard new employees'
          />
        </div>
        <div className='features__row'>
          <Feature
            Icon={SiMaterialdesign}
            heading='Design'
            messageOne='Track every project'
            messageTwo='Catalog logos, fonts, and assets'
            messageThree='Publish a design system'
          />
          <Feature
            Icon={FaMoneyBillAlt}
            heading='Sales'
            messageOne='Build a flexible CRM'
            messageTwo='Organize all meeting notes'
            messageThree='Share a single playbook'
          />
          <Feature
            Icon={GoMailRead}
            heading='Marketing'
            messageOne='Make a style guide'
            messageTwo='Track your content calendar'
            messageThree='Keep tabs on everything'
          />
        </div>
      </div>
    </div>
  )
}

export default Features
