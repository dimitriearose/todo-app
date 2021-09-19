import React from 'react'
import Rating from '../Rating/Rating'
import './Ratings.scss'

const Ratings = () => {
  return (
    <div className='ratings'>
      <div className='ratings__container'>
        <h5>What Our Users Say</h5>
        <div className='ratings__content'>
          <div className='ratings__column'>
            <Rating
              name='Larry Stephens'
              avatar='https://randomuser.me/api/portraits/men/52.jpg'
              message='Overall great product, I loved using it and would recommend.'
              rating={5}
            />
            <Rating
              name='Jennifer Martin'
              avatar='https://randomuser.me/api/portraits/women/0.jpg'
              message='Saved me a bit of time here and there. Pretty good product.'
              rating={4.5}
            />
            <Rating
              name='Austin Drees'
              avatar='https://randomuser.me/api/portraits/men/45.jpg'
              message='Good product with exceptional customer care.'
              rating={4}
            />
            <Rating
              name='Michelle Jones'
              avatar='https://randomuser.me/api/portraits/women/79.jpg'
              message='Best task manager application out there!'
              rating={5}
            />
            <Rating
              name='Donald Day'
              avatar='https://randomuser.me/api/portraits/men/51.jpg'
              message='I love it alot, but I wish they would improve a few aspects of the product.'
              rating={3.5}
            />
          </div>
          <div className='ratings__column'>
            <Rating
              name='Dave Steele'
              avatar='https://randomuser.me/api/portraits/men/78.jpg'
              message='Pretty good, I use it everyday to keep track of what I am doing.'
              rating={4.5}
            />
            <Rating
              name='Dann Warner'
              avatar='https://randomuser.me/api/portraits/men/59.jpg'
              message='Made my work life and relationsips stress free and my life better.'
              rating={4}
            />
            <Rating
              name='Demetrius Stapleton'
              avatar='https://randomuser.me/api/portraits/men/46.jpg'
              message='Todoify is 100% worth the money.'
              rating={4}
            />
            <Rating
              name='Marsha Simmons'
              avatar='https://randomuser.me/api/portraits/women/71.jpg'
              message="Wow what a great user experience. Todoify is in a league of it's own"
              rating={5}
            />
            <Rating
              name='Charles Rutter'
              avatar='https://randomuser.me/api/portraits/men/81.jpg'
              message='Pretty decent task manager application.'
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ratings
