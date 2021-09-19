import React from 'react'
import Statistic from '../Statistic/Statistic'
import './Collaboration.scss'

const Collaboration = () => {
  return (
    <div className='collaboration'>
      <div className='collaboration__container'>
        <h3>Focus on your Team</h3>
        <p>Companies using Todoify are more efficient across the board.</p>
        <div className='collaboration__content'>
          <Statistic percentage='98%' text='of users saved time' />
          <Statistic percentage='56%' text='less emails sent and received' />
          <Statistic percentage='75%' text='of users replaced 2+ tools' />
          <Statistic percentage='56%' text='faster project completion' />
        </div>
      </div>
    </div>
  )
}

export default Collaboration
