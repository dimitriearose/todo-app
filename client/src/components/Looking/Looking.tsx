import React from 'react'
import './Looking.scss'

const Looking = () => {
  return (
    <div className='looking'>
      <div className='looking__container'>
        <h3>What We Are Looking For</h3>
        <div className='looking__content'>
          <h4>Engineers</h4>
          <p>
            People who can design good APIs and source layouts on the first try. This is crucial to working in teams and
            scaling. Before you do work, you should be able to explain to a contractor what you want done. ME has a
            great divide between design and machining that software lacks; we want to try to fix that.
          </p>
        </div>
        <div className='looking__content'>
          <h4>Contributors</h4>
          <p>
            People who have contributed value to open source projects. Show us your github. Got stars? Code is never
            measured in quantity, but rather quality. We value those who can do more with less code; software
            engineering doesn't have an external selection pressure for low part count and cost like EE and ME, but you
            pay massive costs down the line in debugging and upkeep.
          </p>
        </div>
        <div className='looking__content'>
          <h4>Mathematicians</h4>
          <p>
            People who have done well at math competitions (USAMO, IMO, PUTNAM), competition programming (ACM, USACO,
            codejam, topcoder), science fairs (ISEF, STS), or capture the flag (DEFCON, secuinside, GITS). Those
            competitions don't just select for ability, they also select for quickness. We are in a very competitive
            space.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Looking
