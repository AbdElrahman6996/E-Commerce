import React from 'react'
import Menu from './components/Menu'
import Hero from './components/Hero'
import sonny from './tvimg/sonny.svg'
import './App.css'
import tcl from './tvimg/tcl.svg'
import m1 from './tvimg/m1.png'
import konka from './tvimg/konka.svg'
import FooterAd from './components/FooterAd'
import Footer from './components/Footer'
import './components/Navbar.css'
// import Product from './Product'

const Main = () => {

    return (
        <>

            <div id='restofpage'>
                <Menu />
                <main className='Hero-section'>
                    <Hero
                        topBtn="New"
                        BtnColor="#12A05C"
                        Loved="true"
                        Quickview="true"
                        TvImg={sonny}
                        TvName="Sony BRAVIA XR Android Tv"
                        Price="$800.22"
                        oldPrice="$1000.66"
                    />
                    <Hero
                        topBtn="-10%"
                        BtnColor="#E73C17"
                        Loved="false"
                        Quickview="false"
                        TvImg={m1}
                        TvName="Mi P1 Smart Android HD TV"
                        Price="$400.00"
                        oldPrice=""
                    />
                    <Hero
                        topBtn="HOT"
                        BtnColor="#FF9900"
                        Loved="false"
                        Quickview="false"
                        TvImg={konka}
                        TvName="Konka OLED Android Tv"
                        Price="$700.00"
                        oldPrice=""
                    />
                    <Hero
                        topBtn="2 Years Warranty"
                        BtnColor="#7F7CF7"
                        width="136px"
                        Loved="false"
                        Quickview="false"
                        TvImg={tcl}
                        TvName="TCL Roku Android Tv"
                        Price="$800.00"
                        oldPrice=""
                    />
                    <Hero
                        topBtn="New"
                        BtnColor="#12A05C"
                        Loved="true"
                        Quickview="true"
                        TvImg={sonny}
                        TvName="Sony BRAVIA XR Android Tv"
                        Price="$800.22"
                        oldPrice="$1000.66"
                    />
                    <Hero
                        topBtn="-10%"
                        BtnColor="#E73C17"
                        Loved="false"
                        Quickview="false"
                        TvImg={m1}
                        TvName="Mi P1 Smart Android HD TV"
                        Price="$400.00"
                        oldPrice=""
                    />
                    <Hero
                        topBtn="HOT"
                        BtnColor="#FF9900"
                        Loved="false"
                        Quickview="false"
                        TvImg={konka}
                        TvName="Konka OLED Android Tv"
                        Price="$700.00"
                        oldPrice=""
                    />
                    <Hero
                        topBtn="2 Years Warranty"
                        BtnColor="#7F7CF7"
                        width="136px"
                        Loved="false"
                        Quickview="false"
                        TvImg={tcl}
                        TvName="TCL Roku Android Tv"
                        Price="$800.00"
                        oldPrice=""
                    />
                    <Hero
                        topBtn="New"
                        BtnColor="#12A05C"
                        Loved="true"
                        Quickview="true"
                        TvImg={sonny}
                        TvName="Sony BRAVIA XR Android Tv"
                        Price="$800.22"
                        oldPrice="$1000.66"
                    />
                    <Hero
                        topBtn="-10%"
                        BtnColor="#E73C17"
                        Loved="false"
                        Quickview="false"
                        TvImg={m1}
                        TvName="Mi P1 Smart Android HD TV"
                        Price="$400.00"
                        oldPrice=""
                    />
                    <Hero
                        topBtn="HOT"
                        BtnColor="#FF9900"
                        Loved="false"
                        Quickview="false"
                        TvImg={konka}
                        TvName="Konka OLED Android Tv"
                        Price="$700.00"
                        oldPrice=""
                    />
                    <Hero
                        topBtn="2 Years Warranty"
                        BtnColor="#7F7CF7"
                        width="136px"
                        Loved="false"
                        Quickview="false"
                        TvImg={tcl}
                        TvName="TCL Roku Android Tv"
                        Price="$800.00"
                        oldPrice=""
                    />
                </main>
                <FooterAd />
                <Footer />
            </div>
        </>
    )
}

export default Main