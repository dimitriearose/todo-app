import React from 'react'
import Home from '../../components/Home/Home'
import Reviews from '../../components/Reviews/Reviews'
import Information from '../../components/Information/Information'
import Testimonials from '../../components/Testimonials/Testimonials'
import Email from '../../components/Email/Email'
import Cards from '../../components/Cards/Cards'
import Ratings from '../../components/Ratings/Ratings'
import Features from '../../components/Features/Features'
import Team from '../../components/Team/Team'
import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'
import ScrollButton from '../../components/ScrollButton/ScrollButton'

export const HomePage = () => {
  return (
    <div>
      <Home />
      <Reviews
        avatar='https://randomuser.me/api/portraits/men/81.jpg'
        message='Todoify allowed me to completely turn my around. As a person with short term memory, writing things down for me is a must. Todoify is quick and intuitive, a 10/10 in my book as it has truly helped me.'
        name='John Payne'
      />
      <Information />
      <Reviews
        avatar='https://randomuser.me/api/portraits/men/88.jpg'
        message='Todoify allows me to be me. I struggle all the time with procrastination so being able to keep all my things in one central place is so useful and it has honestly been an absolute game changer for me.'
        name='Stephen Henry'
      />
      <Testimonials />
      <Reviews
        avatar='https://randomuser.me/api/portraits/women/72.jpg'
        message='Learning at home for me has always be difficult; so when I found out that my college classes were now going to be held online, I knew I would need something to help me get my stuff together. Todoify is that something.'
        name='Laura Mcaffee'
      />
      <Email />
      <Cards />
      <Reviews
        avatar='https://randomuser.me/api/portraits/men/34.jpg'
        message='As a Software Engineer, I am always swapping between projects, and I have always found it hard to remember things I need to do on the pertinent projects I am working on. Todoify solves this issue.'
        name='Arthur Willis'
      />
      <Ratings />
      <Features />
      <Team />
      <Reviews
        avatar='https://randomuser.me/api/portraits/men/14.jpg'
        message='Todoify has helped me so much. It is hard to put into terms, from my marriage to my everyday shopping, Todoify has been absolutely game changing for me and something I will use for the forseeable future.'
        name='Lenny Walters'
      />
      <FAQ />
      <Footer />
      <ScrollButton />
    </div>
  )
}

export default HomePage
