import React from 'react'
import Card from '../Card/Card'
import { CgSmartphoneChip } from 'react-icons/cg'
import { VscServerProcess } from 'react-icons/vsc'
import { VscSettings } from 'react-icons/vsc'
import { MdSettingsBackupRestore } from 'react-icons/md'
import './Cards.scss'

const Cards = () => {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <h5>Why Todoify</h5>
        <h2>A User first approach with everything we do.</h2>
        <div className='cards__content'>
          <Card
            Icon={CgSmartphoneChip}
            heading='Close to the metal'
            message='From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack.'
          />
          <Card
            Icon={VscServerProcess}
            heading='Fastest-improving platform'
            message='We release hundreds of features and improvements each year to help you stay ahead of industry shifts. (On average, we deploy our production API 16x per day.)'
          />
          <Card
            Icon={VscSettings}
            heading='Battle-tested reliability'
            message='Our systems operate with 99.9%+ uptime and are highly scalable and redundant. Stripe is certified to the highest compliance standards.'
          />
          <Card
            Icon={MdSettingsBackupRestore}
            heading='Intelligent optimizations'
            message='Our machine learning models train on billions of data points and help increase revenue across conversion, fraud, revenue recovery, and more.'
          />
        </div>
      </div>
    </div>
  )
}

export default Cards
