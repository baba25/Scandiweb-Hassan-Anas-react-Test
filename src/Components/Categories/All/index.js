import React from 'react'
import Card from '../../Card'
// import image from '../../../benefits img 1.svg';
import './index.scss'
import { AllHooks } from '../../../Hooks/AllHooks';

export default function All() {


    
    const {error, loading, data} = AllHooks();
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
      <Card 
      productImg={data.category.products[2].gallery[0]}
      productDes={data.category.products[2].name}
      productPrice={<h5>{data.category.products[2].prices[0].currency.symbol}<span>{data.category.products[2].prices[0].amount}</span></h5>}
      />
      <Card 
      productImg={data.category.products[3].gallery[0]}
      productDes={data.category.products[3].name}
      productPrice={<h5>{data.category.products[3].prices[0].currency.symbol}<span>{data.category.products[3].prices[0].amount}</span></h5>}
      />
      <Card 
      productImg={data.category.products[4].gallery[0]}
      productDes={data.category.products[4].name}
      productPrice={<h5>{data.category.products[4].prices[0].currency.symbol}<span>{data.category.products[4].prices[0].amount}</span></h5>}
      />
      <Card 
      productImg={data.category.products[5].gallery[0]}
      productDes={data.category.products[5].name}
      productPrice={<h5>{data.category.products[5].prices[0].currency.symbol}<span>{data.category.products[5].prices[0].amount}</span></h5>}
      />
      <Card 
      productImg={data.category.products[6].gallery[0]}
      productDes={data.category.products[6].name}
      productPrice={<h5>{data.category.products[6].prices[0].currency.symbol}<span>{data.category.products[6].prices[0].amount}</span></h5>}
      />
      <Card 
      productImg={data.category.products[7].gallery[0]}
      productDes={data.category.products[7].name}
      productPrice={<h5>{data.category.products[7].prices[0].currency.symbol}<span>{data.category.products[7].prices[0].amount}</span></h5>}
      />
    </div>
  )
}

