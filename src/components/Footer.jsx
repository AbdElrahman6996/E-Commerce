import React from 'react'
import './Footer.css'
import Visa_1 from '../img/visa1.svg'
import Visa_2 from '../img/visa2.svg'
import Visa_3 from '../img/visa3.svg'
import Visa_4 from '../img/visa4.svg'
import Visa_5 from '../img/visa5.svg'
import Copyright from '../img/Copyright.svg'
import FacebookIcon from '../img/Facebook.svg'
import WhatsappIcon from '../img/Whatsapp.svg'
import InstagramIcon from '../img/Instagram.svg'
import SkypeIcon from '../img/Skype.svg'
import YoutubeIcon from '../img/Youtube.svg'
import LocationIcon from '../img/Location.svg'
import PhoneIcon from '../img/Phone.svg'
import DropIcon from '../img/drop-icon.svg'

const Footer = () => {
  return (
    <footer>
      <div className="topfooter">
        <div className="left-div">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet. </p>
          <div>
            <img src={FacebookIcon} alt="" />
            <img src={WhatsappIcon} alt="" />
            <img src={InstagramIcon} alt="" />
            <img src={SkypeIcon} alt="" />
            <img src={YoutubeIcon} alt="" />
          </div>
        </div>
        <div className="middle-div">
          <div className='conter'>
            <h4>Information</h4>
            <ul>
              <li>
                <a href="/">About</a>
                <a href="/">Delivery information</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Sales</a>
                <a href="/">Terms & Conditions </a>
                <a href="/">EMI Payment</a>
              </li>
            </ul>
          </div>
          <div className='conter'>
            <h4>ACCOUNT</h4>
            <ul>
              <li>
                <a href="/">My Account</a>
                <a href="/">My Orders</a>
                <a href="/">Returns</a>
                <a href="/">Shipping</a>
                <a href="/">Wishlist</a>
                <a href="/">Account Details</a>
              </li>
            </ul>
          </div>
          <div className='laster'>
            <h4>Store</h4>
            <ul>
              <li>
                <a href="/">Affiliate</a>
                <a href="/">Discounts</a>
                <a href="/">Sale</a>
                <a href="/">Contact</a>
                <a href="/">All Collections</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-div">
          <h4>CONTACT US</h4>
          <div className='txt-cont'>
            <p>If you have any query, please contact us</p>
            <span>needus24@gmail.com</span>
          </div>
          <div className='icon-containers'>
            <img src={LocationIcon} alt="" />
            <p>California, USA</p>
          </div>
          <div className='icon-containers'>
            <img src={PhoneIcon} alt="" />
            <p>+12012987481</p>
          </div>
        </div>
      </div>
      <div className="footerbreak">

      </div>
      <div className="mobile-footer">
        <a href='/'>
          ABOUT US
          <img src={DropIcon} alt="" />
        </a>
        <a href='/'>
          INFORMATION
          <img src={DropIcon} alt="" />
        </a>
        <a href='/'>
          ACCOUNT
          <img src={DropIcon} alt="" />
        </a>
        <a href='/'>
          STORE
          <img src={DropIcon} alt="" />
        </a>
        <a href='/'>
          CONTACT US
          <img src={DropIcon} alt="" />
        </a>
      </div>
      <div className="bottomfooter">
        <div>
          <img src={Visa_1} alt="" />
          <img src={Visa_2} alt="" />
          <img src={Visa_3} alt="" />
          <img src={Visa_4} alt="" />
          <img src={Visa_5} alt="" />
        </div>
        <p><img src={Copyright} alt="" />Copyright.2022.All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer