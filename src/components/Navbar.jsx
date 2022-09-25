import React from 'react'
import './Navbar.css'
import Logo from '../img/Logo.svg'
import NavbarLine from '../img/Navbar-Line.svg'
import SearchDrop from '../img/Search-drop.svg'
import SearchIcon from '../img/Search-icon.svg'
import LoginIcon from '../img/Login-Line.svg'
import FavoritesIcon from '../img/Favorites-icon.svg'
import ShoppingIcon from '../img/Shopping-icon.svg'
import MobileLogo from '../img/MobileLogo.svg'
import MobileSearch from '../img/MobileSearch.svg'
import MobileAccount from '../img/MobileAccount.svg'
import MobileFavorite from '../img/MovileFavorite.svg'
import MobileShopping from '../img/MobileShopping.svg'
import MobileSMenu from '../img/MobileMenu.svg'
import DropIcon from '../img/drop-icon.svg'
import ActiveIcon from '../img/Active-drop.svg'
import CloseIcon from '../img/Close-icon.svg'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar-main'>
                <div className="left container">
                    <img src={Logo} alt="" />
                </div>

                <div className="mid container">
                    <input type="text" placeholder='Search Products' />
                    <div className="categories">
                        <img className='navline' src={NavbarLine} alt="" />
                        <div className="drop-menue">
                            <a href="/">All Categories</a>
                            <img src={SearchDrop} alt="" />
                        </div>
                        <div className="searchicon">
                            <img src={SearchIcon} alt="" />
                        </div>
                    </div>
                </div>

                <div className="right container">
                    <div className="login container">
                        <a href="/">Login</a>
                        <img src={LoginIcon} alt="" />
                        <a href="/">Signup</a>
                    </div>
                    <div className="icons container">
                        <img className='img' src={FavoritesIcon} alt="" />
                        <div className="shopping-cart">
                            <img className='img' src={ShoppingIcon} alt="" />
                            <span>6</span>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className='mobile-nav' id='header'>
                <div className="mobile-logo">
                    <img src={MobileLogo} alt="" />
                </div>
                <div className="mobile-icons">
                    <img src={MobileSearch} alt="" />
                    <img src={MobileAccount} alt="" />
                    <img src={MobileFavorite} alt="" />
                    <div className="shopping-cart">
                        <img className='img' src={MobileShopping} alt="" />
                        <span>6</span>
                    </div>
                    <div className='hamburgermenu' onClick={() => {
                        let header = document.getElementById('header')
                        let navigation = document.getElementById('navbar')
                        let restofpage = document.getElementById('restofpage')
                        let hamburgermenu = document.getElementById('hamburger-menu')
                        if (header.classList.contains('opened')){
                            header.classList.remove('opened')
                            hamburgermenu.src = MobileSMenu
                            restofpage.style.display = "unset"
                           return navigation.style.display = "none"
                        }
                        header.classList.add('opened')
                        restofpage.style.display = "none"
                        navigation.style.display = "flex"
                        hamburgermenu.src = CloseIcon
                    }}>
                        <img src={MobileSMenu} id="hamburger-menu" alt="" />
                    </div>
                </div>
            </nav>
            <ul className='mobile-navigation' id='navbar'>
                <li>
                    <a href="/" className='activate' style={{
                        color: '#E73C17'
                    }}>
                        Home
                        <img src={ActiveIcon} alt="" />
                    </a>
                    <a href="/">
                        About
                        <img src={DropIcon} alt="" />
                    </a>
                    <a href="/product">
                        Product
                        <img src={DropIcon} alt="" />
                    </a>
                    <a href="/">
                        Pages
                        <img src={DropIcon} alt="" />
                    </a>
                    <a href="/">
                        Contact
                        <img src={DropIcon} alt="" />
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default Navbar