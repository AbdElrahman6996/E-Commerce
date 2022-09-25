import React from 'react'
import './Hero.css'
import LovedIcon from '../img/Loved-Icon.svg'
import EmptIcon from '../img/EmptyHeart.svg'
import CartIcon from '../img/Cart-icon.svg'
import Polygon from '../img/Polygon.svg'
import Expand from '../img/Expand.svg'
import DashedLine from '../img/Dashed-icon.svg'

const Hero = ({ topBtn, BtnColor, Loved, Quickview, width, TvImg, TvName, Price, oldPrice }) => {
    if (Loved && Quickview === "true") {
        return (
            <div className="tv-container" onClick={() => {

            }}>
                <div className="containers">
                    <div className="top-cont">
                        <span style={{
                            background: String(BtnColor)
                        }}>{topBtn}</span>
                        <div className='lovicon'>
                            <img src={LovedIcon} alt="" />
                        </div>
                    </div>
                    <div className="middle">
                        <div className='dad'>
                            <div className='cild'>
                                <p>Quick View</p>
                            </div>
                            <img src={Polygon} alt="" />
                        </div>
                        <img className='expand' src={Expand} alt="" />
                    </div>
                    <div className="centered">
                        <img src={TvImg} alt="" />
                    </div>
                    <a href='/product' className="btn-container">
                        <a href="/product">
                            <img src={CartIcon} alt="" />
                            <p>Add to cart</p>
                        </a>
                    </a>
                </div>
                <div className="txt">
                    <a href='/product'>{TvName}</a>
                    <p>{Price}<span>
                        <img src={DashedLine} alt="" />
                        {oldPrice}
                    </span></p>
                </div>
            </div>

        )
    } if (width) {
        return (
            <div className="tv-container">
                <div className="containers">
                    <div className="top-cont">
                        <span style={{
                            background: String(BtnColor),
                            width: String(width)
                        }}>{topBtn}</span>
                        <div className='lovicon'>
                            <img src={EmptIcon} alt="" />
                        </div>
                    </div>
                    <div className="middle">
                    </div>
                    <div className="centered">
                        <img src={TvImg} alt="" />
                    </div>
                    <a href='/product' className="btn-container">
                        <a href="/product">
                            <img src={CartIcon} alt="" />
                            <p>Add to cart</p>
                        </a>
                    </a>
                </div>
                <div className="txt">
                    <a href='/product'>{TvName}</a>
                    <p>{Price}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="tv-container">
                <div className="containers">
                    <div className="top-cont">
                        <span style={{
                            background: String(BtnColor)
                        }}>{topBtn}</span>
                        <div className='lovicon'>
                            <img src={EmptIcon} alt="" />
                        </div>
                    </div>
                    <div className="middle">
                    </div>
                    <div className="centered">
                        <img src={TvImg} alt="" />
                    </div>
                    <a href='/product' className="btn-container">
                        <a href="/product">
                            <img src={CartIcon} alt="" />
                            <p>Add to cart</p>
                        </a>
                    </a>
                </div>
                <div className="txt">
                    <a href='/product'>{TvName}</a>
                    <p>{Price}</p>
                </div>
            </div>
        )
    }

}

export default Hero