import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'


function Items(props) {
  return (
    <div className="items">
      <div className="img-display">
        <Link to={`/product/${props.name}`} ><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
      </div>
      <div className="ps">
        <p id='name'>{props.name}</p>
        <p id='size'>{props.size}</p>
        <div className="items-prices">
          <div className="items-price-current">
            #{props.current_price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items