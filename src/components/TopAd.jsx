import React from 'react'
import line from '../img/line.svg'
import dropicon from '../img/drop-icon.svg'
import './TopAd.css'

const TopAd = () => {
    return (
        <section className='top-hand'>
            <div className="left-hand">
                <h5>Welcome to Needus & Get the best product</h5>
            </div>
            <div className="right-hand">
                <div className="one els cont">
                    <a href="/">ENG</a>
                    <img src={dropicon} alt="" />
                </div>
                <div className="two  cont">
                    <img src={line} alt="" />
                </div>
                <div className="three els cont">
                    <a href="/">USD</a>
                    <img src={dropicon} alt="" />
                </div>
            </div>
        </section>
    )
}

export default TopAd