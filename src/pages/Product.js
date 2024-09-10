import React, { useContext } from 'react'
import { HomeContexts } from '../Contexts/HomeContexts'
import { useParams } from 'react-router-dom';
import Particles from '../Components/Particles/Particles';
import Display from '../Components/Display/Display';
import Describe from '../Components/Describe/Describe';
import RelatedItems from '../Components/RelatedItems/RelatedItems';

function Product() {
  const {productId} =useParams();

  return (
    <div>
      <Particles product={product}/>
      <Display productId={productId} />
      <Describe/>
      <RelatedItems/>
    </div>
  )
}

export default Product