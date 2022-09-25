import React from 'react'
import LovedIcon from '../img/Loved-Icon.svg'
import EmptIcon from '../img/EmptyHeart.svg'
import CartIcon from '../img/Cart-icon.svg'
import Polygon from '../img/Polygon.svg'
import Expand from '../img/Expand.svg'
import DashedLine from '../img/Dashed-icon.svg'
import './Relatedproducts.css'
const RelatedProducts = ({ topBtn, BtnColor, Loved, Quickview, width, TvImg, TvName, Price, oldPrice }) => {
  return (
      <div className="tv-container related">
        <div className="related-containers containers">
          <div className="related-top-cont top-cont">
            <span style={{
              background: String(BtnColor)
            }}>{topBtn}</span>
            <div className='lovicon'>
              <img src={LovedIcon} alt="" />
            </div>
          </div>
          <div className="related-middle middle">
            <div className='dad'>
              <div className='cild'>
                <p>Quick View</p>
              </div>
              <img src={Polygon} alt="" />
            </div>
            <img className='related-expand expand' src={Expand} alt="" />
          </div>
          <div className="related-centered centered">
            <img src={TvImg} alt="" />
          </div>
          <a href='/product' className="related-btn-container btn-container">
            <a href="/product">
              <img src={CartIcon} alt="" />
              <p>Add to cart</p>
            </a>
          </a>
        </div>
        <div className="txt related-txt">
          <a href='/product'>{TvName}</a>
          <p>{Price}<span>
            <img src={DashedLine} alt="" />
            {oldPrice}
          </span></p>
        </div>
      </div>
  )
}

export default RelatedProducts