import React from 'react'
import { EndpointHook } from '../Hooks/endpointHook';


export default function DataList() {
  const {error, loading, data} = EndpointHook();
  console.log(error, loading, data);
    if(loading) return <div>loading....</div>;
    if(error) return <div>Something went wrong</div>;
  return (

    <div>
        {data.categories(0).products.map((product) => {
          return <div>
            <h1>{product.id}</h1>
          </div>
        })}
    </div>
  )
}
