import React from 'react'
import './Particles.css'
import arrow from '../Assets/arrow.png'

function Particles(props) {
    const{product} = props;
  return (
    <div className='particles'>
     {product.category}<img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default Particles