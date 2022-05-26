import React from 'react'
import Card from '../../Card'
// import image from '../../../benefits img 1.svg';
import './index.scss'
import { ClothHooks } from '../../../Hooks/ClothHooks';

export default function Tech() {
  const {error, loading, data} = ClothHooks();
  console.log(error, loading, data);
    if(loading) return <div>loading....</div>;
    if(error) return <div>Something went wrong</div>;

  return (
    <div className='card_ui'>
      <Card 
      productImg={data.category.products[0].gallery[0]}
      productDes={data.category.products[0].name}
      productPrice={<h5>{data.category.products[0].prices[0].currency.symbol}<span>{data.category.products[0].prices[0].amount}</span></h5>}
      />
      <Card 
      productImg={data.category.products[1].gallery[0]}
      productDes={data.category.products[1].name}
      productPrice={<h5>{data.category.products[1].prices[0].currency.symbol}<span>{data.category.products[1].prices[0].amount}</span></h5>}
      />
    
    </div>
  )
}
