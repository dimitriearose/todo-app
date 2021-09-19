import React from 'react'
import Collaboration from '../../components/Collaboration/Collaboration'
import Feature from '../../components/Feature/Feature'
import FeatureRow from '../../components/FeatureRow/FeatureRow'
import Footer from '../../components/Footer/Footer'
import Plan from '../../components/Plan/Plan'
import ScrollButton from '../../components/ScrollButton/ScrollButton'
import Security from '../../components/Security/Security'
import Testimonials from '../../components/Testimonials/Testimonials'
import { FaMapMarkedAlt } from 'react-icons/fa'
import Enterprise from '../../components/EnterpriseHome/EnterpriseHome'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsNewspaper } from 'react-icons/bs'
import Email from '../../components/Email/Email'

const EnterprisePage = () => {
  return (
    <>
      <Enterprise />
      <FeatureRow>
        <Feature
          Icon={FaMapMarkedAlt}
          description='Build custom workflows so everyone can focus on getting more done with unmatched flexibility. Then connect all your teams in one shared space for seamless collaboration.'
          heading='Greater productivity'
        />
        <Feature
          Icon={FaTelegramPlane}
          description='Spend less time sending email, searching for information, and jumping between tools. Share resources and project updates across teams so work is always moving forward.'
          heading='More efficiency'
        />
        <Feature
          Icon={BsNewspaper}
          description='Maintain a single source of truth for important company announcements, policies, and strategic decisions. Rally teams around the same goals and keep everyone in the know.'
          heading='Total transparency'
        />
      </FeatureRow>
      <Testimonials />
      <Email />
      <Security />
      <Collaboration />
      <Plan />
      <Footer />
      <ScrollButton />
    </>
  )
}

export default EnterprisePage
