import React, { Component } from 'react'
import Card from '../../Card'
import image from '../../../benefits img 1.svg';
import './index.scss';
export default class Kids extends Component {
  render() {
    return (
      <div className='kids_cont'>
        <Card 
      productImg={image}
      productDes="Aplio dress"
      productPrice="$5.195"
      />
        <Card 
      productImg={image}
      productDes="Aplio dress"
      productPrice="$5.195"
      />
        <Card 
      productImg={image}
      productDes="Aplio dress"
      productPrice="$5.195"
      />
        <Card 
      productImg={image}
      productDes="Aplio dress"
      productPrice="$5.195"
      />
        <Card 
      productImg={image}
      productDes="Aplio dress"
      productPrice="$5.195"
      />
      </div>
    )
  }
}
