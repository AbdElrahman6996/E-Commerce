import React, { useState } from 'react'
import './Hero.css'
import MarkedStar from './icons/MarkedStar.svg'
import EmptyStar from './icons/EmptyStar.svg'
import DashedLine from './icons/DashedLine.svg'
import ListIcon from './icons/ListIcon.svg'
import img1 from './tv/image 2.png'
import img2 from './tv/image 3.png'
import img3 from './tv/image 4.png'
import img4 from './tv/image 5.png'

const Hero = (props) => {
    let [counter, setCounter] = useState(1)
    let [active, setActive] = useState(1)
    console.log(active)
    return (
        <main className='Hero-Product'>
            <div className="hide">

                <div className="pictures-container main">
                    <div className='active' style={{
                        border: '1px solid #E73C17'
                    }} onClick={()=> {
                        let img = document.getElementById('displayed-img')
                        img.src = img1 
                    }}>
                        <img src={props.TvImg1} alt="" />
                    </div>
                    <div onClick={()=> {
                        let img = document.getElementById('displayed-img')
                        img.src = img2
                    }}>
                        <img src={props.TvImg2} alt="" />
                    </div>
                    <div onClick={()=> {
                        let img = document.getElementById('displayed-img')
                        img.src = img3
                    }}>
                        <img src={props.TvImg3} alt="" />
                    </div>
                    <div onClick={()=> {
                        let img = document.getElementById('displayed-img')
                        img.src = img4
                    }}>
                        <img src={props.TvImg4} alt="" />
                    </div>
                </div>
                <div className="displayed-container main">
                    <div>
                        <img id='displayed-img' src={props.TvMainImg} alt="" />
                    </div>
                    <p>*LG C2 42 (106cm) 4K Smart OLED evo TV</p>
                </div>
                <div className="hero-text-container main">
                    <div className='hero-top main'>
                        <p>Brand: <span>{props.TvBrandName}</span></p>
                        <p>Model: <span>{props.TvModel}</span></p>
                        <p>Availability: <span>{props.Availability}</span></p>
                    </div>
                    <div className="hero-tvname main">
                        <h3>{props.TvName}</h3>
                    </div>
                    <div className="hero-stars main">
                        <img src={MarkedStar} alt="" />
                        <img src={MarkedStar} alt="" />
                        <img src={MarkedStar} alt="" />
                        <img src={MarkedStar} alt="" />
                        <img src={EmptyStar} alt="" />
                    </div>
                    <div className="hero-gestures main">
                        <ul className='ul'>
                            <li><img src={ListIcon} alt="" />{props.TvGesture1}</li>
                            <li><img src={ListIcon} alt="" />{props.TvGesture2}</li>
                            <li><img src={ListIcon} alt="" />{props.TvGesture3}</li>
                            <li><img src={ListIcon} alt="" />{props.TvGesture4}</li>
                            <li><img src={ListIcon} alt="" />{props.TvGesture5}</li>
                        </ul>
                    </div>
                    <div className="hero-breakline main"></div>
                    <div className="hero-options main">
                        <span className='actived-gesture' style={{
                            border: '1px solid #E73C17',
                            fontWeight: '400',
                            color: '#E73C17'
                        }}>{props.TvOption1}</span>
                        <span>{props.TvOption2}</span>
                        <span>{props.TvOption3}</span>
                        <span>{props.TvOption4}</span>
                        <span>{props.TvOption5}</span>
                        <span>{props.TvOption6}</span>
                    </div>
                    <div className="hero-breaklines main"></div>
                    <div className="hero-buy main">
                        <span style={{
                            overflow: 'hidden'
                        }}>USD(incl. of all taxes):</span>
                        <p className='tvprices'>{props.TvPrice}<span><img src={DashedLine} alt="" />{props.TvPriceBefore}</span></p>
                        <div className='buying-section'>
                            <div className="counter-container">
                                <p className='add' onClick={() => {
                                    if (counter === 1) {
                                        return
                                    }
                                    setCounter(counter - 1)
                                }}>-</p>
                                <p className='value'>{counter}</p>
                                <p className='add' onClick={() => {
                                    setCounter(counter + 1)
                                }}>+</p>
                            </div>
                            <a href="/" className='buynow'>Buy Now</a>
                            <a href="/" className='addtocart'>Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
            <main className='responsive'>
                <div className="responsive-displayed-container">
                    <div>
                        <img id='displayed-imgs' src={props.TvMainImg} alt="" />
                    </div>
                    <p>*LG C2 42 (106cm) 4K Smart OLED evo TV</p>
                </div>
                <div className="responsive-pictures-container">
                <div className='active' id="initial" onClick={()=> {
                        let img = document.getElementById('displayed-imgs')
                        let mew = document.getElementById('initial')
                        if (active === 3){
                            let initial = document.getElementById('3')
                            img.src = img1
                            mew.setAttribute("id",'active')
                            mew.classList.add('active')
                            initial.classList.remove('active')
                            console.log('yes 1')
                            setActive(1)
                        }
                        if (active === 2){
                            let initial = document.getElementById('3')
                            img.src = img1
                            mew.setAttribute("id",'active')
                            mew.classList.add('active')
                            initial.classList.remove('active')
                            console.log('yes 2')
                            setActive(1)

                        }
                        if (active === 4){
                            let initial = document.getElementById('4')
                            img.src = img1
                            mew.setAttribute("id",'active')
                            mew.classList.add('active')
                            initial.classList.remove('active')
                            console.log('yes 3')
                            setActive(1)
                        }
                    }}>
                        <img src={props.TvImg1} alt="" />
                    </div>
                    <div id='2' onClick={()=> {
                        let img = document.getElementById('displayed-imgs')
                        let mew = document.getElementById('2')
                        if (active === 1){
                            let initial = document.getElementById('initial')
                            img.src = img2
                            mew.setAttribute("id",'active')
                            mew.classList.add('active')
                            initial.classList.remove('active')
                            console.log('yes 11')
                            setActive(2)
                        }
                        if (active === 3){
                            let initial = document.getElementById('3')
                            img.src = img2
                            mew.setAttribute("id",'active')
                            mew.classList.add('active')
                            initial.classList.remove('active')
                            setActive(2)
                            console.log('yes 12')

                        }
                        if (active === 4){
                            let initial = document.getElementById('4')
                            img.src = img2
                            mew.setAttribute("id",'active')
                            mew.classList.add('active')
                            initial.classList.remove('active')
                            setActive(2)
                            console.log('yes 13')
                        }
                    }}>
                        <img src={props.TvImg2} alt="" />
                    </div>
                    <div id='3' onClick={()=> {
                        let img = document.getElementById('displayed-imgs')
                        let mew = document.getElementById('3')
                        if (active === 1){
                            let initial = document.getElementById('initial')
                            img.src = img3
                            mew.setAttribute("id",'active')
                            mew.classList.add('active')
                            initial.classList.remove('active')
                            setActive(3)
                            console.log('yes 21')

                        }
                        if (active === 2){
                            let initial = document.getElementById('2')
                            img.src = img3
                            mew.setAttribute("id",'active')
                            mew.classList.add('active')
                            initial.classList.remove('active')
                            setActive(3)
                            console.log('yes 22')

                        }
                        if (active === 4){
                            let initial = document.getElementById('4')
                            img.src = img3
                            mew.setAttribute("id",'active')
                            mew.classList.add('active')
                            initial.classList.remove('active')
                            setActive(3)
                            console.log('yes 23')
                        }
                    }}>
                        <img src={props.TvImg3} alt="" />
                    </div>
                    <div id='4' onClick={()=> {
                        let img = document.getElementById('displayed-imgs')
                        let mew = document.getElementById('4')
                        if (active === 1){
                            let initial = document.getElementById('initial')
                            img.src = img4
                            mew.setAttribute("id",'active')
                            mew.classList.add('active')
                            initial.classList.remove('active')
                            setActive(4)
                            console.log('yes 31')

                        }
                        if (active === 2){
                            let initial = document.getElementById('2')
                            img.src = img4
                            mew.setAttribute("id",'active')
                            mew.classList.add('active')
                            initial.classList.remove('active')
                            setActive(4)
                            console.log('yes 32')

                        }
                        if (active === 3){
                            let initial = document.getElementById('3')
                            img.src = img4
                            mew.setAttribute("id",'active')
                            mew.classList.add('active')
                            initial.classList.remove('active')
                            setActive(4)
                            console.log('yes 33')

                        }
                    }}>
                        <img src={props.TvImg4} alt="" />
                    </div>
                </div>
                <div className='responsive-hero-top'>
                    <p>Brand: <span>{props.TvBrandName}</span></p>
                    <p>Model: <span>{props.TvModel}</span></p>
                    <p>Availability: <span>{props.Availability}</span></p>
                </div>
                <div className="responsive-hero-tvname">
                    <h3>{props.TvName}</h3>
                </div>
                <div className="responsive-hero-stars">
                    <img src={MarkedStar} alt="" />
                    <img src={MarkedStar} alt="" />
                    <img src={MarkedStar} alt="" />
                    <img src={MarkedStar} alt="" />
                    <img src={EmptyStar} alt="" />
                </div>
                <div className="responsive-hero-gestures">
                    <ul className='responsive-ul'>
                        <li><img src={ListIcon} alt="" />{props.TvGesture1}</li>
                        <li><img src={ListIcon} alt="" />{props.TvGesture2}</li>
                        <li><img src={ListIcon} alt="" />{props.TvGesture3}</li>
                        <li><img src={ListIcon} alt="" />{props.TvGesture4}</li>
                        <li><img src={ListIcon} alt="" />{props.TvGesture5}</li>
                    </ul>
                </div>
                <div className="responsive-hero-options">
                    <span className='active-gestures' style={{
                        border: '1px solid #E73C17',
                        fontWeight: '400',
                        color: '#E73C17'
                    }}>{props.TvOption1}</span>
                    <span>{props.TvOption2}</span>
                    <span>{props.TvOption3}</span>
                    <span>{props.TvOption4}</span>
                    <span>{props.TvOption5}</span>
                    <span>{props.TvOption6}</span>
                </div>
                <div className="responsive-hero-buy">
                        <span style={{
                            overflow: 'hidden'
                        }}>USD(incl. of all taxes):</span>
                        <p className='responsive-tvprices'>{props.TvPrice}<span><img src={DashedLine} alt="" />{props.TvPriceBefore}</span></p>
                        <div className='responsive-buying-section'>
                            <div className="responsive-counter-container">
                                <p className='responsive-add res' onClick={() => {
                                    if (counter === 1) {
                                        return
                                    }
                                    setCounter(counter - 1)
                                }}>-</p>
                                <p className='responsive-value res'>{counter}</p>
                                <p className='responsive-add res' onClick={() => {
                                    setCounter(counter + 1)
                                }}>+</p>
                            </div>
                            <a href="/" className='responsive-buynow'>Buy Now</a>
                            <a href="/" className='responsive-addtocart'>Add to Cart</a>
                        </div>
                    </div>
            </main>
        </main>
    )
}

export default Hero
