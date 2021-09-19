import React from 'react'
import CustomerStoriesHome from '../../components/CustomerStoriesHome/CustomerStoriesHome'
import Footer from '../../components/Footer/Footer'
import Reviews from '../../components/Reviews/Reviews'
import ScrollButton from '../../components/ScrollButton/ScrollButton'

const Testimonials = () => {
  return (
    <>
      <CustomerStoriesHome />
      <Reviews
        avatar='https://randomuser.me/api/portraits/men/79.jpg'
        message="Our design system in Todoify is not a deck. It's not something that's going to fall off. It's living, accessible, and open."
        name='Ken Seeno'
        position='Product Design Manager'
        story
      />
      <Reviews
        avatar='https://randomuser.me/api/portraits/men/17.jpg'
        message='Most task management apps — like Clickup or Trello — are just pointing to the work that lives scattered in other places. In Notion, all the work lives side by side.'
        name='Lenny Walters'
        even
        position='Founder'
        story
      />
      <Reviews
        avatar='https://randomuser.me/api/portraits/women/19.jpg'
        message="Todoify's ease of use is one of its hallmarks. It helps you visually navigate content and remember where something is."
        name='Marie Szuts'
        position='Head of Human Resources'
        story
      />
      <Reviews
        avatar='https://randomuser.me/api/portraits/men/75.jpg'
        message="Notion's become a team-wide FAQ for us. More people can immediately find what they need."
        name='William Fong'
        even
        position='Co-founder & CTO'
        story
      />
      <Reviews
        avatar='https://randomuser.me/api/portraits/women/21.jpg'
        message='Todoify helps us make sure our processes are all set up, and everything for kicking off a hiring process is available in one place.'
        name='Milica Radojevic'
        position='People Experience Partner'
        story
      />
      <Reviews
        avatar='https://randomuser.me/api/portraits/men/32.jpg'
        message="Before Todoify, it was hard to track why something was done and how it was done. Now it's so much easier to document what you're doing and discuss how to improve our processes."
        name='Seong yun Byeon'
        even
        position='Machine Learning Engineer'
        story
      />
      <Reviews
        avatar='https://randomuser.me/api/portraits/men/22.jpg'
        message='After a week, I was able to figure out almost everything about our company. Todoify shrank the learning curve.'
        name='Chris Heo'
        position='CEO'
        story
      />
      <Reviews
        avatar='https://randomuser.me/api/portraits/men/86.jpg'
        message="People actually enjoy writing documentation in Notion. The whole team is more productive because the information we're looking for is easier to access."
        name='Dmitri Gaskin'
        even
        position='Co-founder'
        story
      />
      <Reviews
        avatar='https://randomuser.me/api/portraits/men/57.jpg'
        message='Our Todoify database reduces the amount of money and time it takes to get gear, crew, and actors into one place.'
        name='Thomas Frank'
        position='Youtuber'
        story
      />
      <Reviews
        avatar='https://randomuser.me/api/portraits/men/73.jpg'
        message="No one knew where anything was, so different teams were building different plans. Now, we have one place in Todoify where it's all written down"
        name='Matthias Kentzia'
        even
        position='Product Manager'
        story
      />
      <Footer />
      <ScrollButton />
    </>
  )
}

export default Testimonials
