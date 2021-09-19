import React, { useState } from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import { IoLogoInstagram } from 'react-icons/io'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import './Footer.scss'

const Footer = () => {
  const [browseOpen, setBrowseOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const handleFooterOptionClick = (setState: any) => {
    setState((state: any) => !state)
  }

  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__body'>
          <div className='footer__column'>
            <h6>Links</h6>
            <p>Desktop App</p>
            <p>Mobile App</p>
            <p>Customers</p>
            <p>Login</p>
          </div>

          <div className='footer__column'>
            <h6>Product</h6>
            <p>Overview</p>
            <p>Pricing</p>
            <p>Templates</p>
            <p>Personal Use</p>
            <p>Kids</p>
            <p>Todoify for Teams</p>
          </div>

          <div className='footer__column'>
            <h6>Company</h6>
            <p>About</p>
            <p>Careers</p>
            <p>Media Kit</p>
            <p>Tools & Craft</p>
          </div>

          <div className='footer__column'>
            <h6>Help & Support</h6>
            <p>Guides</p>
            <p>Tutorials</p>
            <p>Todoify for Teams</p>
            <p>Status</p>
          </div>

          <div className='footer__column'>
            <h6>Extra</h6>
            <p>Account & Billing</p>
            <p>Plans & Pricing</p>
            <p>Supported Devices</p>
            <p>Accessibility</p>
          </div>

          <div className='footer__column'>
            <h6>Contact Us</h6>
            <p>Press</p>
            <p>Jobs</p>
            <p>Contact Sales</p>
          </div>

          <div className='footer__mobile__content'>
            <div className='footer__mobile__option' onClick={() => handleFooterOptionClick(setBrowseOpen)}>
              <h6>Browse</h6>
              <KeyboardArrowDownIcon
                className={`footer__mobile__option__icon ${browseOpen && 'footer__icon__rotated'}`}
              />
            </div>
            {browseOpen && (
              <div className='footer__mobile__option__column'>
                <ul className='footer__mobile__option__column__list'>
                  <li>Desktop App</li>
                  <li>Mobile App</li>
                  <li>Customers</li>
                  <li>Login</li>
                </ul>

                <ul className='footer__mobile__option__column__list'>
                  <li>Overview</li>
                  <li>Pricing</li>
                  <li>Templates</li>
                  <li>Personal Use</li>
                  <li>Kids</li>
                  <li>Todoify for Teams</li>
                </ul>

                <ul className='footer__mobile__option__column__list'>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Media Kit</li>
                  <li>Tools</li>
                </ul>

                <ul className='footer__mobile__option__column__list'>
                  <li>Guides</li>
                  <li>Tutorials</li>
                  <li>Status</li>
                </ul>
              </div>
            )}

            <div className='footer__mobile__option' onClick={() => handleFooterOptionClick(setHelpOpen)}>
              <h6>Help</h6>
              <KeyboardArrowDownIcon
                className={`footer__mobile__option__icon ${helpOpen && 'footer__icon__rotated'}`}
              />
            </div>

            {helpOpen && (
              <div className='footer__mobile__option__column'>
                <ul className='footer__mobile__option__column__list'>
                  <li>Account & Billing</li>
                  <li>Plans & Pricing</li>
                  <li>Supported Devices</li>
                  <li>Accessibility</li>
                </ul>
              </div>
            )}

            <div className='footer__mobile__option' onClick={() => handleFooterOptionClick(setAboutOpen)}>
              <h6>About Us</h6>
              <KeyboardArrowDownIcon
                className={`footer__mobile__option__icon ${aboutOpen && 'footer__icon__rotated'}`}
              />
            </div>

            {aboutOpen && (
              <div className='footer__mobile__option__column'>
                <ul className='footer__mobile__option__column__list'>
                  <li>Press</li>
                  <li>Jobs</li>
                  <li>Contact Sales</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <hr className='footer__rule' />

        <div className='footer__footer'>
          <div className='footer__footer__left'>
            <GrFacebookOption className='footer__footer__left__icon' />
            <TwitterIcon className='footer__footer__left__icon' />
            <YouTubeIcon className='footer__footer__left__icon' />
            <IoLogoInstagram className='footer__footer__left__icon' />
          </div>
          <div className='footer__footer__right'>
            <span>&copy; 2020 Todoify LLC</span>
            <p>About Ads</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Do Not Sell My Personal Information</p>
            <p>Your California Privacy Rights</p>
            <p>TV Parental Guidelines</p>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
