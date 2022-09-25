import React from 'react'
import './YourCart.css'
import CarIcon from './icons/CartIcon.svg'

const YourCart = () => {
  return (
    <section className='shoppinghead'>
    <div className='shoppingcart'>
        <div className="cart">
            <img src={CarIcon} alt="" />
            <span>6</span>
        </div>
        <div className="price">
            <p>$800.72</p>
        </div>
    </div>
    </section>
  )
}

export default YourCart