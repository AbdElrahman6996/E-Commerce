import React from 'react'
import Category from './product components/Category'
import './Product.css'
import Menu from './product components/Menus'
import YourCart from './product components/YourCart'
import Footerad from './product components/Footerad'
import Footer from './components/Footer'
import Hero from './product components/Hero'
import TvMenu from './product components/TvMenu'
import TvImg1 from './tvimg/Hero1.svg'
import TvImg2 from './tvimg/Hero2.svg'
import TvImg3 from './tvimg/Hero3.svg'
import TvImg4 from './tvimg/Hero4.svg'
import LargeTv from './product components/icons/LargeTv.svg'
import RelatedProducts from './product components/RelatedProducts'
import sonny from './tvimg/sonny.svg'
import './product components/Relatedproducts.css'
import RelatedTxt from './product components/RelatedTxt'
const Product = () => {
  return (
    <section className='product-page'>
      <div id='restofpage'>
        <Menu />
        <Category />
        <YourCart />
        <Hero
          TvImg1={TvImg1}
          TvImg2={TvImg2}
          TvImg3={TvImg3}
          TvImg4={TvImg4}
          TvMainImg={LargeTv}
          TvBrandName="LG"
          TvModel="OLED42C2PSA"
          Availability="Only 2 in Stock"
          TvName="LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR"
          StarsNo="4"
          TvGesture1="α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling"
          TvGesture2="Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume"
          TvGesture3="Hands-free Voice Control, Always Ready"
          TvGesture4="Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode"
          TvGesture5="Eye Comfort Display: Low-Blue Light, Flicker-Free"
          TvOption1="106 cm (42)"
          TvOption2="121 cm (48)"
          TvOption3="139 cm (55)"
          TvOption4="164 cm (65)"
          TvOption5="196 cm (77)"
          TvOption6="210 cm (83)"
          TvPrice="$600.72"
          TvPriceBefore="$800.00"
        />
        <TvMenu
          TvDescription1="The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers."
          TvDescription2="
          *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
          **65C2 Stand model is at a minimum 39% lighter than the C1 series.
          ***The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label.
          ****UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size"
        />
        <RelatedTxt/>
        <section className='related-products-section'>
          <RelatedProducts
            topBtn="New"
            BtnColor="#12A05C"
            Loved="true"
            Quickview="true"
            TvImg={sonny}
            TvName="Sony BRAVIA XR Android Tv"
            Price="$800.22"
            oldPrice="$1000.66"
          />
          <RelatedProducts
            topBtn="New"
            BtnColor="#12A05C"
            Loved="true"
            Quickview="true"
            TvImg={sonny}
            TvName="Sony BRAVIA XR Android Tv"
            Price="$800.22"
            oldPrice="$1000.66"
            />
          <RelatedProducts
            topBtn="New"
            BtnColor="#12A05C"
            Loved="true"
            Quickview="true"
            TvImg={sonny}
            TvName="Sony BRAVIA XR Android Tv"
            Price="$800.22"
            oldPrice="$1000.66"
            />
          <RelatedProducts
            topBtn="New"
            BtnColor="#12A05C"
            Loved="true"
            Quickview="true"
            TvImg={sonny}
            TvName="Sony BRAVIA XR Android Tv"
            Price="$800.22"
            oldPrice="$1000.66"
            />
          <RelatedProducts
            topBtn="New"
            BtnColor="#12A05C"
            Loved="true"
            Quickview="true"
            TvImg={sonny}
            TvName="Sony BRAVIA XR Android Tv"
            Price="$800.22"
            oldPrice="$1000.66"
            />
        </section>
        <Footerad />
        <Footer />
      </div>
    </section>
  )
}

export default Product
