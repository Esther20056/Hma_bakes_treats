import React from 'react';
import './RelatedItems.css';
import Items from '../Items/Items';
import NewBakes from '../../Info/NewBakes';

function RelatedItems({ currentProductCategory }) {
  const relatedProducts = NewBakes.filter(item => item.category === currentProductCategory);

  return (
    <div className='relateditems'>
      <h1>Related Products</h1>
      <div className="relatedproducts">
        {relatedProducts.map((item, i) => (
          <Items key={i} id={item.id} name={item.name} image={item.image} current_price={item.current_price} />
        ))}
      </div>
    </div>
  );
}

export default RelatedItems;
