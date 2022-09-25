import React from 'react'
import './Menu.css'
import DropIcon from '../img/drop-icon.svg'
import ActiveIcon from '../img/Active-drop.svg'
import MenuIcon from '../img/Menu-line.svg'
import SupportIcon from '../img/Support-Icon.svg'

const Menu = () => {
    return (
        <section className='menu'>
            <div className="big-div">
                <div className="navigation">
                    <div className='last'>
                        <a href='/' className='active' style={{
                            color: '#E73C17'
                        }}>Home</a>
                        <img src={ActiveIcon} alt="" />
                    </div>
                    <div className='last'>
                        <a href='/'>About</a>
                        <img src={DropIcon} alt="" />
                    </div>
                    <div style={{
                        width: '100px'
                    }}>
                        <a href='../product'>Product</a>
                        <img src={DropIcon} alt="" />
                    </div>
                    <div className='last'>
                        <a href='/'>Pages</a>
                        <img src={DropIcon} alt="" />
                    </div>
                    <div className='last' style={{
                        width: '100px'
                    }}>
                        <a href='/'>Contact</a>
                        <img src={DropIcon} alt="" />
                    </div>
                </div>
                <div className="right-container">
                    <img className='menuicon' src={MenuIcon} alt="" />
                    <div className="container">
                        <img src={SupportIcon} alt="" />
                        <div className="text">
                            <p>Contact Us 24/7</p>
                            <span>+12012987481</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu