import React from 'react'
import './TvMenu.css'
import ActiveIcon from './icons/ActiveIcon.svg'

const TvMenu = (props) => {
  return (
    <section className='TvMenu'>
      <div className='tv-menus'>
        <a href="/">Description</a>
        <a href="/">Specification</a>
        <a href="/">Reviews</a>
        <img src={ActiveIcon} alt="" />
      </div>
      <div className="breaking-line"></div>
      <div className="txt-container">
        <p>{props.TvDescription1}</p>
        <p className='topping'>{props.TvDescription2}</p>
      </div>
    </section>
  )
}

export default TvMenu