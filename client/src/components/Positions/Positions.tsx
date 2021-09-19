import React from 'react'
import Career from '../Career/Career'
import './Positions.scss'

const Positions = () => {
  return (
    <div className='positions' id='positions'>
      <div className='positions__container'>
        <h4>Open Positions</h4>
        <Career
          career='Software Engineer'
          description='Do you love algorithms and solving hard problems? We are always looking for Software Engineers that are passionate about what they do and can come up with creative ideas.'
          location='On Site in San Francisco'
          qualificationOne='QT5 or similar SDK experience'
          qualificationTwo='C++ / JavaScript coding skills'
          qualificationThree='Good design sense. Game development experience a plus'
          qualificationFour='Ability to deliver on a quality experience'
        />
        <Career
          career='Senior Full Stack Engineer'
          description="As a full stack engineer, you will work on Todoify's iOS and Android apps, our REST api, and work on building new features for out subscribers.
           Knowledge of the web is required, and enthusiasm is appreciated. Ideally, you can architect, develop, test, and deliver independently."
          location='On Site in San Francisco'
          qualificationOne='Fluent in Python and React'
          qualificationTwo='iOS and Android app development'
          qualificationThree='Ability to deliver a quality experience'
          qualificationFour='Highly independent and detail oriented'
          qualificationFive='Strong design sense (UX/UI)'
        />
        <Career
          career='Senior Software Engineer'
          description='As part of the Todoify engineering team, your responsibilities include developing new features, building simulation and testing infrastructure, and improving the tools our community uses to develop Todoify.'
          location='On Site in San Francisco'
          qualificationOne='Excellent Python and Linux skills, at least a familiarity with C/C++'
          qualificationTwo='Write fast and efficient code that runs on hardware with limited compute resources'
          qualificationThree='Ability to independently write, test and ship software to thousands of users'
          qualificationFour='Javascript / Typescript knowledge is nice but not mandatory'
        />

        <Career
          career='Safety Engineer'
          description="As a safety engineer, you'll work on our safety enforcement code and write safety code for new car ports. You'll also be responsible for evolving our safety model as openpilot becomes more capable."
          location='On Site in San Francisco'
          qualificationOne='Fluent in C / Python / Javascript'
          qualificationTwo='Familiarity with ISO26262 and other automotive safety standards'
          qualificationThree='A good mindset for what safety means at scale'
          qualificationFour='Know things about cars, CAN, C, programming, and automotive standards'
        />

        <Career
          career='Office Manager'
          description='As Office Manager you will be helping the Todoify team work at maximum potential.'
          location='On Site in San Francisco'
          qualificationOne='Office maintenance and management (managing all necessary policies/insurances)'
          qualificationTwo='Expense reconciliation and other purchasing support (POs, license renewals, etc)'
          qualificationThree='Employee logistics (new hires, dismissed employees, Visas etc.)'
          qualificationFour='Precise scheduling and calendar management for multiple engineering leads'
          qualificationFive='Managing access permissions'
        />
        <Career
          career='Infrastructure Engineer'
          description="As an infrastructure engineer, you'll work on our tooling, regression tests, and simulator."
          location='On Site in San Francisco'
          qualificationOne='Excellent Python and Linux skills, at least a familiarity with C/C++'
          qualificationTwo='Having pull requests upstreamed to Todoify is a plus'
          qualificationThree='Know things about operating systems, CI, and testing'
          qualificationFour='Javascript / Typescript knowledge is nice but not mandatory'
        />
      </div>
    </div>
  )
}

export default Positions
