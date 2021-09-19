import React from 'react'
import './Career.scss'

interface Props {
  career: string
  description: string
  location: string
  qualificationOne: string
  qualificationTwo: string
  qualificationThree?: string
  qualificationFour?: string
  qualificationFive?: string
}

const Career = ({
  career,
  description,
  location,
  qualificationOne,
  qualificationTwo,
  qualificationThree,
  qualificationFour,
  qualificationFive,
}: Props) => {
  return (
    <div className='career'>
      <h4 className='career__name'>{career}</h4>
      <p className='career__location'>{location}</p>
      <p className='career__description'>{description}</p>
      <h5>Qualifications:</h5>
      <ul className='career__qualifications'>
        {qualificationOne && <li>{qualificationOne}</li>}
        {qualificationTwo && <li>{qualificationTwo}</li>}
        {qualificationThree && <li>{qualificationThree}</li>}
        {qualificationFour && <li>{qualificationFour}</li>}
        {qualificationFive && <li>{qualificationFive}</li>}
      </ul>
      <button>Contact Us</button>
    </div>
  )
}

export default Career
