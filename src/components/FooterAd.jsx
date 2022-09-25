import React from 'react'
import './FooterAd.css'
import Newspaper from '../img/Newspaper.svg'
const FooterAd = () => {
  return (
    <section className='footerad'>
        <div className="left-section">
            <img src={Newspaper} alt="" />
            <div>
                <h4>Join our newsletter and get offers</h4>
                <p>Sign up our newsletter</p>
            </div>
        </div>
        <div className="right-section">
            <input type="text" placeholder='Enter your email'/>
            <a href="/">SUBSCRIBE</a>
        </div>
    </section>
  )
}

export default FooterAd