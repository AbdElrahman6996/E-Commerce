import React from 'react'
import './Menus.css'
import MenuIcon from './icons/Menus-Icon.svg'
import CategoryIcon from './icons/WhiteDropMenu.svg'
import DropIcon from './icons/MenusDropIcon.svg'
import ActiveIcon from '../img/Active-drop.svg'
import MenuLine from './icons/MenuLine.svg'
import SupportIcon from '../img/Support-Icon.svg'

const Menu = () => {
  return (
    <div className='Menus'>
      <a href='/' className="left-container">
        <img src={MenuIcon} alt="" />
        <p>All Categories</p>
        <img src={CategoryIcon} alt="" />
      </a>
      <div className="middle-container">
        <div className='last'>
          <a href='/'>Home</a>
          <img src={DropIcon} alt="" />
        </div>
        <div className='last'>
          <a href='/'>About</a>
          <img src={DropIcon} alt="" />
        </div>
        <div style={{
            width: '110px'
        }}>
          <a className='active' style={{
            color: '#E73C17'
          }} href='../product'>Product</a>
          <img src={ActiveIcon} alt="" />
        </div>
        <div className='last'>
          <a href='/'>Pages</a>
          <img src={DropIcon} alt="" />
        </div>
        <div className='last' style={{
            width: '105px'
        }}>
          <a href='/'>Contact</a>
          <img src={DropIcon} alt="" />
        </div>
      </div>
      <div className="right-container">
        <img className='menuicon' src={MenuLine} alt="" />
        <div className="container">
          <img src={SupportIcon} alt="" />
          <div className="text">
            <p>Contact Us 24/7</p>
            <span>+12012987481</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu