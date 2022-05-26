import React, { Component } from 'react'
import './index.scss'
export default class Card extends Component {
  render({item, handleClick}) {
    
    const {productImg, product_des, product_price} = item;

    return (
      <div className='card_cont'>
        <div>
          <img src={this.props.productImg} className="product_img" />
          <h4 className='product_des'>{this.props.productDes}</h4>
          <p className='product_price'>{this.props.productPrice}</p>
          </div>
          <div className='card_cart'>
    <svg onClick={() => handleClick(item)} height={"20px"} width={"20px"} id="card_btn" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff" stroke-width="1">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    </div>
    </div>
    )
  }
}
